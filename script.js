document.addEventListener('DOMContentLoaded', () => {
    // Modal Logic
    const modal = document.getElementById('project-modal');
    const modalBody = modal.querySelector('.modal-body');
    const closeModal = document.querySelector('.close-modal');

    // Close modal when clicking X
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        // Stop any videos playing in the modal
        const videos = modalBody.querySelectorAll('video');
        videos.forEach(v => v.pause());
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            const videos = modalBody.querySelectorAll('video');
            videos.forEach(v => v.pause());
        }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            const videos = modalBody.querySelectorAll('video');
            videos.forEach(v => v.pause());
        }
    });

    // Populate and open modal
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').innerText;
            const content = card.querySelector('.project-details').innerHTML;

            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-content-injected').innerHTML = content;

            modal.classList.add('active');

            // Autoplay videos muted with controls
            const videos = document.getElementById('modal-content-injected').querySelectorAll('video');
            videos.forEach(v => {
                v.controls = true;
                v.muted = true;
                v.play();
            });
        });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});
