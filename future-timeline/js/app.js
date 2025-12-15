// Main Application Logic

// State
const state = {
    selectedTechId: null,
    offset: { x: -100, y: -50 },
    isDragging: false,
    startPan: { x: 0, y: 0 },
    ancestorIds: new Set(),
    descendantIds: new Set(),
    autoScrollVelocity: { x: 0, y: 0 }
};

// DOM Elements
const container = document.getElementById('tech-tree-container');
const canvas = document.getElementById('canvas');
const erasLayer = document.getElementById('eras-layer');
const connectionsSvg = document.getElementById('connections');
const nodesLayer = document.getElementById('nodes-layer');
const markersLayer = document.getElementById('markers-layer');
const detailsPanel = document.getElementById('details-panel');
const detailsCloseBtn = document.getElementById('details-close');

// Config
const { ERA_COLUMN_WIDTH, ROW_HEIGHT, PADDING_LEFT, PADDING_TOP } = window.LayoutConfig;
const TECH_DATA = window.TechTreeData;
const BRANCH_COLORS = window.BranchColors;

// --- Initialization ---
function init() {
    calculateCanvasSize();
    renderEras();
    renderMarker();
    renderNodes();
    renderConnections();
    renderConnections();
    renderCredits();
    setupInteractions();



    // Initial Transform
    centerOnInitialView();
    updateTransform();
}

function centerOnInitialView() {
    const { ERA_COLUMN_WIDTH, PADDING_LEFT } = window.LayoutConfig;

    // Calculate Marker X (Logic duplicated from renderMarker for simplicity)
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const decimalYear = currentYear + (currentMonth / 12);
    const pixelsPerYear = ERA_COLUMN_WIDTH / 5;
    const yearsSince2025 = decimalYear - 2025;
    const col2025X = (2 * ERA_COLUMN_WIDTH) + PADDING_LEFT; // 2025 is now Column 2
    const markerX = col2025X + (yearsSince2025 * pixelsPerYear);

    // Center X
    const screenCenterX = window.innerWidth / 2;
    const newOffsetX = screenCenterX - markerX;

    // Set Y to show top headers (positive value moves content down/camera up)
    // "Bit more up" implys seeing more of the top content.
    const newOffsetY = 20;

    state.offset = { x: newOffsetX, y: newOffsetY };
}

function calculateCanvasSize() {
    const maxCol = Math.max(...TECH_DATA.map(t => t.column)) + 1;
    const maxRow = Math.max(...TECH_DATA.map(t => t.row)) + 1;
    const width = (maxCol * ERA_COLUMN_WIDTH) + PADDING_LEFT * 4;
    const height = (maxRow * ROW_HEIGHT) + PADDING_TOP * 2 + 120; // Reduced padding for tighter credits

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Update SVG size
    connectionsSvg.setAttribute('width', width);
    connectionsSvg.setAttribute('height', height);
}

function renderCredits() {
    const height = parseInt(canvas.style.height);
    const width = parseInt(canvas.style.width);

    const credits = document.createElement('div');
    credits.className = 'absolute flex flex-col items-center justify-center text-center text-gray-500 text-sm font-mono pointer-events-auto';
    credits.style.width = '100%';
    credits.style.left = '0';
    credits.style.top = `${height - 100}px`; // Moved higher
    credits.style.opacity = '0.7'; // Requested transparency

    credits.innerHTML = `
        <div class="mb-2">
            Built by: <a href="https://x.com/BenjaminDEKR" target="_blank" class="text-rose-400 hover:text-rose-300 underline">Benjamin De Kraker</a>
        </div>
        <div class="opacity-75 relative z-50">
            Tools used: Grok 4.1, Grokipedia, Gemini 3 Pro, Google Nano Banana, Antigravity
        </div>
    `;

    canvas.appendChild(credits);
}

// --- Rendering ---

function renderEras() {
    const eras = [...new Set(TECH_DATA.map(t => t.era))];

    eras.forEach((era, i) => {
        const el = document.createElement('div');
        el.className = 'era-column';
        el.style.left = `${i * ERA_COLUMN_WIDTH}px`;
        el.style.width = `${ERA_COLUMN_WIDTH}px`;

        const label = document.createElement('div');
        label.className = 'era-label';

        const title = document.createElement('div');
        title.className = 'era-title';
        title.textContent = era.split(' ')[0];

        const sub = document.createElement('div');
        sub.className = 'era-subtitle';
        const match = era.match(/\((.*)\)/);
        sub.textContent = match ? match[1] : 'Era';

        label.appendChild(title);
        label.appendChild(sub);
        el.appendChild(label);
        erasLayer.appendChild(el);
    });
}

function renderMarker() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const decimalYear = currentYear + (currentMonth / 12);

    const pixelsPerYear = ERA_COLUMN_WIDTH / 5; // 5 years per column
    const yearsSince2025 = decimalYear - 2025;

    const col2025X = (2 * ERA_COLUMN_WIDTH) + PADDING_LEFT; // 2025 is now Column 2
    let markerX = col2025X + (yearsSince2025 * pixelsPerYear);

    // Clamp
    // Clamp
    const minX = PADDING_LEFT;
    markerX = Math.max(minX, markerX);

    const marker = document.createElement('div');
    marker.className = 'absolute top-0 bottom-0 border-l border-dashed z-40 pointer-events-none';
    marker.style.left = `${markerX}px`;
    marker.style.borderColor = 'rgba(244, 63, 94, 0.6)'; // rose-500
    marker.style.height = '100%';

    const labelContainer = document.createElement('div');
    labelContainer.className = 'absolute top-0 flex flex-col items-center';
    // Center the container relative to the marker line
    labelContainer.style.transform = 'translateX(-50%)';
    labelContainer.style.left = '0';

    const label = document.createElement('div');
    label.className = 'marker-label'; // Use defined CSS class
    label.style.backgroundColor = 'rgba(159, 18, 57, 0.95)';
    label.style.boxShadow = '0 0 15px rgba(159, 18, 57, 0.4)';

    const text = document.createElement('span');
    text.className = 'marker-text'; // Use defined CSS class
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    text.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    label.appendChild(text);
    labelContainer.appendChild(label);

    const line = document.createElement('div');
    line.className = 'absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2';
    line.style.width = '2px';
    line.style.height = '1000%'; // Make it very long to cover everything
    line.style.backgroundColor = 'rgba(244, 63, 94, 0.4)'; // Visible solid line
    line.style.zIndex = '-1'; // Behind label but visible

    labelContainer.appendChild(line);
    marker.appendChild(labelContainer);
    markersLayer.appendChild(marker);
}

function getCoords(id) {
    const tech = TECH_DATA.find(t => t.id === id);
    if (!tech) return { x: 0, y: 0 };
    return {
        x: (tech.column * ERA_COLUMN_WIDTH) + PADDING_LEFT,
        y: (tech.row * ROW_HEIGHT) + PADDING_TOP
    };
}

function renderNodes() {
    nodesLayer.innerHTML = ''; // Clear

    TECH_DATA.forEach(tech => {
        const { x, y } = getCoords(tech.id);
        const color = BRANCH_COLORS[tech.branch];

        const el = document.createElement('div');
        el.className = 'tech-node';
        el.id = `node-${tech.id}`;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.borderColor = color; // Default border color

        // Thumbnail
        if (tech.imageUrl) {
            const thumb = document.createElement('div');
            thumb.className = 'node-thumb';
            const img = document.createElement('img');
            img.src = tech.imageUrl;
            thumb.appendChild(img);
            el.appendChild(thumb);
        }

        // Content
        const content = document.createElement('div');
        content.className = 'node-content';

        // Header
        const header = document.createElement('div');
        header.className = 'node-header';
        const branch = document.createElement('span');
        branch.className = 'branch-name';
        branch.style.color = color;
        branch.textContent = tech.branch.split(' ')[0];
        header.appendChild(branch);
        content.appendChild(header);

        // Title
        const title = document.createElement('div');
        title.className = 'node-title';
        title.textContent = tech.title;
        content.appendChild(title);

        // Footer
        const footer = document.createElement('div');
        footer.className = 'node-footer';
        const era = document.createElement('span');
        era.className = 'node-era';
        era.textContent = tech.era.includes('20') ? tech.era.split(' ')[0] : 'HISTORIC';
        footer.appendChild(era);
        content.appendChild(footer);

        el.appendChild(content);

        // Interaction
        el.addEventListener('mouseenter', () => {
            SoundManager.playHover();
        });

        el.addEventListener('click', (e) => {
            e.stopPropagation();
            SoundManager.playOpen();
            selectTech(tech.id);
        });

        nodesLayer.appendChild(el);
    });
}

// --- Sound Manager ---
const SoundManager = {
    hoverSound: new Audio('assets/hover.mp3'),
    openSound: new Audio('assets/open.mp3'),
    closeSound: new Audio('assets/close.mp3'),
    lastHoverTime: 0,
    HOVER_DEBOUNCE_MS: 750, // Increased to 0.75s to prevent spamming

    init() {
        // Preload
        this.hoverSound.load();
        this.openSound.load();
        this.closeSound.load();

        this.openSound.volume = 0.4; // Reduced from 0.6
        this.closeSound.volume = 0.2; // Reduced from 0.4
    },

    playHover() {
        const now = Date.now();
        if (now - this.lastHoverTime > this.HOVER_DEBOUNCE_MS) {
            // Clone the node to allow overlapping sounds and prevent 'interrupted' errors
            const sound = this.hoverSound.cloneNode();
            sound.volume = 0.8; // Significantly louder

            // Play and forget (garbage collected after playback usually)
            sound.play().catch(err => {
                // Ignore autoplay errors
            });

            this.lastHoverTime = now;
        }
    },

    playOpen() {
        // For open, single instance is fine/better
        this.openSound.currentTime = 0;
        this.openSound.play().catch(e => { });
    },

    playClose() {
        this.closeSound.currentTime = 0;
        this.closeSound.play().catch(e => { });
    }
};

// Initialize Audio
SoundManager.init();

function renderConnections() {
    connectionsSvg.innerHTML = ''; // Clear

    TECH_DATA.forEach(tech => {
        tech.prerequisites.forEach(preId => {
            const start = getCoords(preId);
            const end = getCoords(tech.id);

            const startX = start.x + 176; // Node width
            const startY = start.y + 48;  // Half height
            const endX = end.x;
            const endY = end.y + 48;

            const midX = (startX + endX) / 2;
            const d = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', d);
            path.setAttribute('stroke', '#334155');
            path.setAttribute('stroke-width', '2');
            path.setAttribute('fill', 'none');
            path.setAttribute('id', `conn-${preId}-${tech.id}`);

            connectionsSvg.appendChild(path);
        });
    });
}

// --- Interaction Logic ---

function selectTech(id) {
    if (state.selectedTechId === id) {
        // Deselect if clicking same
        state.selectedTechId = null;
        closeDetails();
    } else {
        state.selectedTechId = id;
        calculateRelationships(id);
        openDetails(id);
    }
    updateVisuals();
}

function calculateRelationships(id) {
    state.ancestorIds.clear();
    state.descendantIds.clear();

    if (!id) return;

    // Trace Back
    const traceBack = (currId) => {
        const node = TECH_DATA.find(t => t.id === currId);
        if (!node) return;
        node.prerequisites.forEach(pid => {
            if (!state.ancestorIds.has(pid)) {
                state.ancestorIds.add(pid);
                traceBack(pid);
            }
        });
    };

    // Trace Forward
    const traceForward = (currId) => {
        const nextNodes = TECH_DATA.filter(t => t.prerequisites.includes(currId));
        nextNodes.forEach(n => {
            if (!state.descendantIds.has(n.id)) {
                state.descendantIds.add(n.id);
                traceForward(n.id);
            }
        });
    };

    traceBack(id);
    traceForward(id);
}

function updateVisuals() {
    const { selectedTechId, ancestorIds, descendantIds } = state;

    // Update Nodes
    TECH_DATA.forEach(tech => {
        const el = document.getElementById(`node-${tech.id}`);
        if (!el) return;

        // Reset classes
        el.classList.remove('selected', 'dimmed', 'ancestor', 'descendant');
        el.style.borderColor = BRANCH_COLORS[tech.branch]; // Reset border

        if (selectedTechId) {
            if (tech.id === selectedTechId) {
                el.classList.add('selected');
            } else if (ancestorIds.has(tech.id)) {
                el.classList.add('ancestor');
            } else if (descendantIds.has(tech.id)) {
                el.classList.add('descendant');
            } else {
                el.classList.add('dimmed');
                el.style.borderColor = '#334155';
            }
        }
    });

    // Update Connections
    TECH_DATA.forEach(tech => {
        tech.prerequisites.forEach(preId => {
            const path = document.getElementById(`conn-${preId}-${tech.id}`);
            if (!path) return;

            let isRelated = false;
            if (selectedTechId) {
                // Check if this connection is part of the highlighted path
                const isPathIn = (ancestorIds.has(tech.id) && ancestorIds.has(preId)) || (tech.id === selectedTechId && ancestorIds.has(preId));
                const isPathOut = (descendantIds.has(tech.id) && descendantIds.has(preId)) || (descendantIds.has(tech.id) && preId === selectedTechId);

                if (isPathIn || isPathOut) isRelated = true;

                if (isRelated) {
                    path.setAttribute('stroke', '#ffffff');
                    path.setAttribute('stroke-width', '3');
                    path.style.opacity = '0.8';
                } else {
                    path.setAttribute('stroke', '#1e293b');
                    path.setAttribute('stroke-width', '2');
                    path.style.opacity = '0.2';
                }
            } else {
                // Reset
                path.setAttribute('stroke', '#334155');
                path.setAttribute('stroke-width', '2');
                path.style.opacity = '0.4';
            }
        });
    });
}

// --- Details Panel ---

function openDetails(id) {
    const tech = TECH_DATA.find(t => t.id === id);
    if (!tech) return;

    const color = BRANCH_COLORS[tech.branch];
    const header = document.getElementById('details-header');
    const titleContainer = document.getElementById('details-title-container');
    const content = document.getElementById('details-content');

    // Dynamic Header Gradient
    // Simple mapping for vanilla JS
    const colorMap = {
        cyan: 'linear-gradient(to bottom, rgba(8, 145, 178, 0.8), #0f172a)',
        orange: 'linear-gradient(to bottom, rgba(194, 65, 12, 0.8), #0f172a)',
        purple: 'linear-gradient(to bottom, rgba(126, 34, 206, 0.8), #0f172a)',
        yellow: 'linear-gradient(to bottom, rgba(202, 138, 4, 0.8), #0f172a)',
        green: 'linear-gradient(to bottom, rgba(21, 128, 61, 0.8), #0f172a)',
        indigo: 'linear-gradient(to bottom, rgba(67, 56, 202, 0.8), #0f172a)',
    };
    header.style.background = colorMap[color] || 'linear-gradient(to bottom, #1e293b, #0f172a)';

    // Title
    titleContainer.innerHTML = `
    <div class="flex items-center gap-2 mb-3">
        <span class="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest border rounded bg-black/40 backdrop-blur-md" style="border-color: ${color}; color: ${color}">
            ${tech.branch}
        </span>
        <span class="text-slate-400 text-xs font-mono uppercase tracking-widest">
            // ${tech.era}
        </span>
    </div>
    <h2 class="text-4xl font-bold text-white leading-tight tracking-tight">
        ${tech.title}
    </h2>
  `;

    // Content
    let html = '';

    if (tech.imageUrl) {
        html += `
      <div class="details-image">
        <img src="${tech.imageUrl}" alt="${tech.title}">
      </div>
    `;
    }

    html += `
    <div class="details-desc">
        <p>${tech.description}</p>
    </div>
    
    <div class="details-meta">
        <div class="meta-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            ${tech.era.includes('Foundations') ? 'Historical Origin' : 'Projected Impact'}
        </div>
        <p class="meta-value">"${tech.historicalEnabler || tech.unlocks.join(', ')}"</p>
    </div>
    
    <div class="divider"></div>
  `;

    // Navigation
    const prerequisites = tech.prerequisites.map(pid => TECH_DATA.find(t => t.id === pid)).filter(Boolean);
    const leadsTo = TECH_DATA.filter(t => t.prerequisites.includes(tech.id));

    if (prerequisites.length > 0) {
        html += `
      <div class="nav-section">
        <h4>Built Upon</h4>
        ${prerequisites.map(pre => `
            <button class="nav-button" onclick="selectTech('${pre.id}')">
                <div>
                    <div class="text-xs text-slate-500 mb-0.5">${pre.era.split(' ')[0]}</div>
                    <div class="text-sm font-medium text-slate-300">${pre.title}</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
        `).join('')}
      </div>
    `;
    }

    if (leadsTo.length > 0) {
        html += `
      <div class="nav-section" style="margin-top: 1.5rem">
        <h4>Unlocks Future</h4>
        ${leadsTo.map(next => `
            <button class="nav-button" onclick="selectTech('${next.id}')">
                <div>
                    <div class="text-xs text-slate-500 mb-0.5">${next.era.split(' ')[0]}</div>
                    <div class="text-sm font-medium text-slate-300">${next.title}</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
        `).join('')}
      </div>
    `;
    }

    content.innerHTML = html;
    detailsPanel.classList.add('open');
}

function closeDetails() {
    if (detailsPanel.classList.contains('open')) {
        SoundManager.playClose();
        detailsPanel.classList.remove('open');
    }
    // Don't clear selection immediately to allow animation
}

detailsCloseBtn.addEventListener('click', () => {
    state.selectedTechId = null;
    updateVisuals();
    closeDetails();
});

// --- Pan / Zoom / Auto-Scroll ---

let animationFrameId = null;

function setupInteractions() {
    // Mouse Down - Start Drag
    container.addEventListener('mousedown', (e) => {
        state.isDragging = true;
        // Calculate offset from current transform to mouse position (anchor point)
        state.startPan = { x: e.clientX - state.offset.x, y: e.clientY - state.offset.y };
        container.style.cursor = 'grabbing';
    });

    // Mouse Move - Track Position for Drag and Auto-Scroll
    window.addEventListener('mousemove', (e) => {
        // Track mouse position for auto-scroll check
        handleAutoScrollInput(e.clientX, e.clientY);

        if (state.isDragging) {
            e.preventDefault();
            // Direct tracking for 1:1 feel when dragging, simple and responsive
            const newX = e.clientX - state.startPan.x;
            const newY = e.clientY - state.startPan.y;
            state.offset = { x: newX, y: newY };
        }
    });

    // Mouse Up - Stop Drag
    window.addEventListener('mouseup', () => {
        state.isDragging = false;
        container.style.cursor = 'grab';
    });

    // Background click to deselect
    container.addEventListener('click', (e) => {
        if (e.target === container || e.target === canvas || e.target.classList.contains('era-column')) {
            state.selectedTechId = null;
            updateVisuals();
            closeDetails();
        }
    });

    // Esc key to close
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && state.selectedTechId) {
            state.selectedTechId = null;
            updateVisuals();
            closeDetails();
        }
    });

    // Start the game loop
    startGameLoop();
}

// Auto-Scroll Logic
const SCROLL_MARGIN = 50; // pixels from edge to trigger scroll
const MAX_SCROLL_SPEED = 15; // pixels per frame

function handleAutoScrollInput(mouseX, mouseY) {
    if (state.isDragging) {
        state.autoScrollVelocity = { x: 0, y: 0 };
        return;
    }

    const { innerWidth, innerHeight } = window;
    let velX = 0;
    let velY = 0;

    // Left Edge
    if (mouseX < SCROLL_MARGIN) {
        const intensity = 1 - (mouseX / SCROLL_MARGIN);
        velX = MAX_SCROLL_SPEED * intensity; // Positive to move content RIGHT (pan left) -> Wait.
        // Moving camera LEFT means content moves RIGHT (positive X).
    }
    // Right Edge
    else if (mouseX > innerWidth - SCROLL_MARGIN) {
        const intensity = 1 - ((innerWidth - mouseX) / SCROLL_MARGIN);
        velX = -MAX_SCROLL_SPEED * intensity; // Content moves LEFT (pan right)
    }

    // Top Edge
    if (mouseY < SCROLL_MARGIN) {
        const intensity = 1 - (mouseY / SCROLL_MARGIN);
        velY = MAX_SCROLL_SPEED * intensity; // Content moves DOWN
    }
    // Bottom Edge
    else if (mouseY > innerHeight - SCROLL_MARGIN) {
        const intensity = 1 - ((innerHeight - mouseY) / SCROLL_MARGIN);
        velY = -MAX_SCROLL_SPEED * intensity; // Content moves UP
    }

    state.autoScrollVelocity = { x: velX, y: velY };
}

function startGameLoop() {
    function loop() {
        if (!state.isDragging && (state.autoScrollVelocity.x !== 0 || state.autoScrollVelocity.y !== 0)) {
            state.offset.x += state.autoScrollVelocity.x;
            state.offset.y += state.autoScrollVelocity.y;
        }

        // Clamp to Bounds
        clampOffset();

        updateTransform();
        animationFrameId = requestAnimationFrame(loop);
    }
    loop();
}

function clampOffset() {
    // Bounds are calculated in calculateCanvasSize
    // Min X: -(canvasWidth - window.innerWidth) - PADDING
    // Max X: PADDING_LEFT
    // Min Y: -(canvasHeight - window.innerHeight) - PADDING
    // Max Y: PADDING_TOP

    const viewportW = window.innerWidth;
    const viewportH = window.innerHeight;
    const canvasW = parseInt(canvas.style.width);
    const canvasH = parseInt(canvas.style.height);

    const minX = -(canvasW - viewportW) - 100; // Extra buffer
    const maxX = 100;
    const minY = -(canvasH - viewportH) - 100;
    const maxY = 100;

    // Soft clamp
    if (state.offset.x < minX) state.offset.x = minX;
    if (state.offset.x > maxX) state.offset.x = maxX;
    if (state.offset.y < minY) state.offset.y = minY;
    if (state.offset.y > maxY) state.offset.y = maxY;
}

function updateTransform() {
    // Use translate3d to force hardware acceleration
    canvas.style.transform = `translate3d(${state.offset.x.toFixed(1)}px, ${state.offset.y.toFixed(1)}px, 0)`;
}

// Expose selectTech globally for inline onclicks
window.selectTech = selectTech;

// Start
init();
