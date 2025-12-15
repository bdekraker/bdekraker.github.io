// Data ported from constants.ts
window.LayoutConfig = {
  ERA_COLUMN_WIDTH: 360, // Increased from 320 to spread headers
  ROW_HEIGHT: 100,
  HEADER_HEIGHT: 80,
  PADDING_LEFT: 40,
  PADDING_TOP: 100 // Increased from 40 to move everything down, leaving room for headers
};

window.BranchColors = {
  "AI & Computing": "cyan",
  "Robotics & Mobility": "orange",
  "Space Exploration": "purple",
  "Energy & Sustainability": "yellow",
  "Bio & Health": "green",
  "Quantum & Materials": "indigo"
};

window.TechTreeData = [
  // --- ORIGINS (1970-1985) ---
  // AI & Computing Roots
  {
    id: 'arpanet',
    title: 'ARPANET',
    branch: 'AI & Computing',
    era: 'Origins (1970-1985)',
    cost: 30,
    description: 'The first packet-switching network. Four computers talking to each other. <strong>Basically a heavy group chat where no one sends memes yet.</strong>',
    prerequisites: [],
    unlocks: ['Backpropagation'],
    historicalEnabler: '<a href="https://grokipedia.com/page/ARPANET" target="_blank">1969 ARPANET</a> (View on Grokipedia)',
    row: 0,
    column: 0,
    imageUrl: 'assets/arpanet.png'
  },
  {
    id: 'microproc',
    title: 'Microprocessors',
    branch: 'AI & Computing',
    era: 'Origins (1970-1985)',
    cost: 40,
    description: 'The Intel 4004. A calculator chip that accidentally started the digital revolution. <strong>We put sand in a rock and taught it to do math. What could go wrong?</strong>',
    prerequisites: [],
    unlocks: ['GPUs / CUDA', 'First Qubits'],
    historicalEnabler: '<a href="https://grokipedia.com/page/Intel_4004" target="_blank">1971 Intel 4004</a> (View on Grokipedia)',
    row: 1,
    column: 0,
    imageUrl: 'assets/microproc.png'
  },

  // Robotics Roots
  {
    id: 'unimate',
    title: 'Unimate Arm',
    branch: 'Robotics & Mobility',
    era: 'Origins (1970-1985)',
    cost: 30,
    description: 'The first industrial robot arm. It moved hot metal parts so humans didn\'t have to melt. <strong>It didn\'t know love, it only knew "move object A to location B" and we respected that.</strong>',
    prerequisites: [],
    unlocks: ['DARPA Grand Challenge', 'ASIMO Humanoid'],
    historicalEnabler: '<a href="https://grokipedia.com/page/Unimate" target="_blank">1961 Unimate</a> (View on Grokipedia)',
    row: 4,
    column: 0,
    imageUrl: 'assets/unimate.png'
  },

  // Space Roots
  {
    id: 'voyager',
    title: 'Voyager Probes',
    branch: 'Space Exploration',
    era: 'Origins (1970-1985)',
    cost: 40,
    description: 'Twin probes sent to verify if Jupiter is as gas-filled as reported. <strong>We strapped a golden mixtape to a piece of metal and yeeted it into the void. Good luck, aliens.</strong>',
    prerequisites: [],
    unlocks: ['Space Shuttle', 'ISS Assembly'],
    historicalEnabler: '<a href="https://grokipedia.com/page/Voyager_program" target="_blank">1977 Voyager</a> (View on Grokipedia)',
    row: 7,
    column: 0,
    imageUrl: 'assets/voyager.png'
  },

  // Energy Roots
  {
    id: 'early_solar',
    title: 'Early Solar Cells',
    branch: 'Energy & Sustainability',
    era: 'Origins (1970-1985)',
    cost: 35,
    description: 'The first viable terrestrial solar panels. 10% efficiency on a good day. <strong>Turning the sun\'s angry screaming ball of fire into barely enough juice to run a calculator.</strong>',
    prerequisites: [],
    unlocks: ['Lithium-Ion Batteries', 'PWR Reactors'], // Linking PWR here for flow
    historicalEnabler: '<a href="https://grokipedia.com/page/Solar_cell#History" target="_blank">1970s Solar Efficiency</a> (View on Grokipedia)',
    row: 9,
    column: 0,
    imageUrl: 'assets/early_solar.png'
  },

  // Bio Roots
  {
    id: 'rec_dna',
    title: 'Recombinant DNA',
    branch: 'Bio & Health',
    era: 'Origins (1970-1985)',
    cost: 35,
    description: 'Cohen and Boyer splicing genes like biological DJs. <strong>The moment we realized we could cut-and-paste life itself. ctrl+c, ctrl+v, oops new bacteria.</strong>',
    prerequisites: [],
    unlocks: ['Recombinant DNA (Foundations)'], // Wait, "DNA" (Foundations) is named Recombinant DNA too. I should rename the old one or this one.
    // I'll rename the OLD one to "Genomic Sequencing" or "DNA Synthesis"? Or keep same name?
    // The old one id is 'dna'. Title: Recombinant DNA. 1980-2020.
    // I will rename the NEW one "Gene Splicing" to avoid confusion? Or rename old one "GMO Era"?
    // I'll rename the OLD one to "Biotech Industry" or similar?
    // Actually, I'll name the new one "Gene Splicing" title, id 'rec_dna'.
    // And link to old 'dna' (Title: "Biotech & GMOs")?
    // Let's stick to the plan: New is 'rec_dna'. Old is 'dna'.
    historicalEnabler: '<a href="https://grokipedia.com/page/Recombinant_DNA" target="_blank">1972 Recombinant DNA</a> (View on Grokipedia)',
    row: 11,
    column: 0,
    imageUrl: 'assets/rec_dna.png'
  },

  // Materials Roots
  {
    id: 'carbon_fiber',
    title: 'Carbon Fiber',
    branch: 'Quantum & Materials',
    era: 'Origins (1970-1985)',
    cost: 45,
    description: 'High strength-to-weight ratio composite. <strong>It’s just burnt fabric that costs more than gold. But hey, it makes fast cars go vroom.</strong>',
    prerequisites: [],
    unlocks: ['Utah Array BCI'], // Linking to BCI early
    historicalEnabler: '<a href="https://grokipedia.com/page/Carbon_fibers" target="_blank">1960s Carbon Fiber</a> (View on Grokipedia)',
    row: 12, // Align with BCI
    column: 0,
    imageUrl: 'assets/carbon_fiber.png'
  },


  // --- AI & COMPUTING (Shifted +1 Col) ---
  // Path 1: Intelligence
  {
    id: 'backprop',
    title: 'Backpropagation',
    branch: 'AI & Computing',
    era: 'Foundations (1980-2020)',
    cost: 50,
    description: 'The fundamental algorithm for training neural networks efficiently. <strong>Basically, the math equivalent of telling a toddler "no" a billion times until they stop eating glue.</strong>',
    prerequisites: ['arpanet'], // NEW PARENT
    unlocks: ['Basic AI Labs', 'Early Chatbots'],
    historicalEnabler: '<a href="https://grokipedia.com/page/Backpropagation" target="_blank">1986 Rumelhart/Hinton paper</a> (View on Grokipedia)',
    row: 0,
    column: 1, // SHIFTED
    imageUrl: 'assets/backprop.png'
  },
  {
    id: 'ai_agents',
    title: 'Advanced AI Agents',
    branch: 'AI & Computing',
    era: 'Breakthrough (2025)',
    cost: 150,
    description: 'Autonomous software agents capable of multi-step reasoning and tool use. <strong>Great, now your to-do list has a to-do list and it\'s judging your productivity.</strong>',
    prerequisites: ['backprop'],
    unlocks: ['Autonomous Agent Units', 'Agentic OS'],
    row: 0,
    column: 2, // SHIFTED
    imageUrl: 'assets/ai_agents.png'
  },
  {
    id: 'ai_economies',
    title: 'AI-Driven Economies',
    branch: 'AI & Computing',
    era: 'Expansion (2030s)',
    cost: 450,
    description: 'Self-managing supply chains and predictive market allocation. Because human economists have done *such* a bang-up job so far. <strong>Prepare for the "Invisible Hand" to be literal steel.</strong>',
    prerequisites: ['ai_agents'],
    unlocks: ['Self-managing Factories', 'Predictive Markets'],
    row: 0,
    column: 3, // SHIFTED
    imageUrl: 'assets/ai_economies.png'
  },
  {
    id: 'agi',
    title: 'Artificial General Intelligence',
    branch: 'AI & Computing',
    era: 'Singularity (2040s)',
    cost: 1200,
    description: 'An intelligence capable of solving any intellectual task that a human being can. Or, you know, turning us all into paperclips. <strong>It\'s a coin toss, really.</strong>',
    prerequisites: ['ai_economies'],
    unlocks: ['Global Brain Wonder', 'AI Supremacy Victory'],
    row: 0,
    column: 4, // SHIFTED
    imageUrl: 'assets/agi.png'
  },
  // Path 2: Hardware
  {
    id: 'gpus',
    title: 'GPUs / CUDA',
    branch: 'AI & Computing',
    era: 'Foundations (1980-2020)',
    cost: 60,
    description: 'Parallel computing architecture originally designed for graphics. We built them to run Crysis, but now they run the Matrix. <strong>Hope you like expensive silicon.</strong>',
    prerequisites: ['microproc'], // NEW PARENT
    unlocks: ['GPU Clusters', 'Deep Learning Training'],
    historicalEnabler: '<a href="https://grokipedia.com/page/GeForce_256" target="_blank">1999-2006 NVIDIA</a> (View on Grokipedia)',
    row: 1,
    column: 1, // SHIFTED
    imageUrl: 'assets/gpus.png'
  },
  {
    id: 'slms',
    title: 'Small Language Models',
    branch: 'AI & Computing',
    era: 'Breakthrough (2025)',
    cost: 140,
    description: 'Highly efficient models capable of running on edge devices. <strong>Finally, your toaster can hallucinate Shakespeare without needing a cloud subscription.</strong>',
    prerequisites: ['gpus'],
    unlocks: ['Edge Intelligence', 'Privacy-First Assistants'],
    row: 1,
    column: 2, // SHIFTED
    imageUrl: 'assets/slms.png'
  },
  {
    id: 'edge_ai',
    title: 'Ubiquitous Edge AI',
    branch: 'AI & Computing',
    era: 'Expansion (2030s)',
    cost: 400,
    description: 'Intelligence embedded in every object and surface. <strong>Your walls are listening, your coffee mug is judging your caffeine intake, and privacy is a quaint 20th-century myth.</strong>',
    prerequisites: ['slms'],
    unlocks: ['Smart Dust', 'Zero-latency Inference'],
    row: 1,
    column: 3, // SHIFTED
    imageUrl: 'assets/edge_ai.png'
  },
  // Path 3: Neuromorphic
  {
    id: 'neuromorphic',
    title: 'Neuromorphic Computing',
    branch: 'AI & Computing',
    era: 'Breakthrough (2025)',
    cost: 180,
    description: 'Hardware architecture mimicking the human brain\'s synaptic structure. <strong>It\'s like a brain, but without the existential dread or the need for sleep. Jealous?</strong>',
    prerequisites: ['backprop'],
    unlocks: ['Brain-like Chips', 'Low-power Data Centers'],
    historicalEnabler: '<a href="https://grokipedia.com/page/Carver_Mead" target="_blank">1980s Carver Mead</a> (View on Grokipedia)',
    row: 2,
    column: 2, // SHIFTED
    imageUrl: 'assets/neuromorphic.png'
  },
  {
    id: 'bio_sims',
    title: 'Biological Neural Sims',
    branch: 'AI & Computing',
    era: 'Expansion (2030s)',
    cost: 500,
    description: 'Full-scale simulation of biological neural networks. We\'re uploading grandmas to the cloud. <strong>Hope she remembers her password.</strong>',
    prerequisites: ['neuromorphic'],
    unlocks: ['Hybrid Bio-AI', 'Digital Consciousness Upload'],
    row: 2,
    column: 3, // SHIFTED
    imageUrl: 'assets/bio_sims.png'
  },
  // Path 4: Gen AI
  {
    id: 'gen_search',
    title: 'Generative AI Search',
    branch: 'AI & Computing',
    era: 'Breakthrough (2025)',
    cost: 160,
    description: 'Search engines that synthesize answers rather than indexing links. Who needs sources when you have confidence? <strong>It\'s like asking that one friend who thinks they know everything, but at light speed.</strong>',
    prerequisites: ['ai_agents'],
    unlocks: ['Truth Engines', 'Synthetic Media Districts'],
    row: 3,
    column: 2, // SHIFTED
    imageUrl: 'assets/gen_search.png'
  },

  // --- ROBOTICS & MOBILITY ---
  {
    id: 'darpa_challenge',
    title: 'DARPA Grand Challenge',
    branch: 'Robotics & Mobility',
    era: 'Foundations (1980-2020)',
    cost: 50,
    description: 'The race that ignited the modern autonomous vehicle revolution. <strong>A bunch of robots driving into ditches in the desert so your Uber can eventually arrive at the wrong pickup spot.</strong>',
    prerequisites: ['unimate'], // NEW PARENT
    unlocks: ['LIDAR', 'Early AV Prototypes'],
    historicalEnabler: '<a href="https://grokipedia.com/page/DARPA_Grand_Challenge" target="_blank">2004 Mojave Desert Race</a> (View on Grokipedia)',
    row: 4,
    column: 1, // SHIFTED
    imageUrl: 'assets/darpa_challenge.png'
  },
  {
    id: 'robotaxis',
    title: 'Autonomous Robotaxis',
    branch: 'Robotics & Mobility',
    era: 'Breakthrough (2025)',
    cost: 150,
    description: 'Fleets of self-driving vehicles serving as public transit. <strong>Look ma, no hands! Also no driver to yell at when you\'re late. You\'ll just have to yell at the algorithm.</strong>',
    prerequisites: ['darpa_challenge'],
    unlocks: ['Robotaxi Fleets', 'AV Highways'],
    row: 4,
    column: 2, // SHIFTED
    imageUrl: 'assets/robotaxis.png'
  },
  {
    id: 'level_5',
    title: 'Level 5 Global Autonomy',
    branch: 'Robotics & Mobility',
    era: 'Expansion (2030s)',
    cost: 450,
    description: 'Full autonomy in any condition, anywhere. Drivers licenses are now vintage collectibles. <strong>Road rage is obsolete, replaced by "network latency frustration".</strong>',
    prerequisites: ['robotaxis'],
    unlocks: ['Underground Hyperloops', 'Drone Swarms'],
    row: 4,
    column: 3, // SHIFTED
    imageUrl: 'assets/level_5.png'
  },
  {
    id: 'asimo',
    title: 'ASIMO Humanoid',
    branch: 'Robotics & Mobility',
    era: 'Foundations (1980-2020)',
    cost: 60,
    description: 'Early bipedal robotics research. <strong>It walked like it had to use the bathroom, so Optimus could run. Rest in peace, little spaceman.</strong>',
    prerequisites: ['unimate'], // NEW PARENT
    unlocks: ['Walking Scouts', 'Factory Arms'],
    historicalEnabler: '<a href="https://grokipedia.com/page/ASIMO" target="_blank">2000 Honda</a> (View on Grokipedia)',
    row: 5,
    column: 1, // SHIFTED
    imageUrl: 'assets/asimo.png'
  },
  {
    id: 'humanoids',
    title: 'General Humanoid Robots',
    branch: 'Robotics & Mobility',
    era: 'Breakthrough (2025)',
    cost: 170,
    description: 'Versatile robots with human-like form factors for general labor. <strong>They\'ll fold your laundry and definitely won\'t overthrow you. Probably. Check the warranty.</strong>',
    prerequisites: ['asimo'],
    unlocks: ['Factory Humanoids', 'Home Assistants'],
    row: 5,
    column: 2, // SHIFTED
    imageUrl: 'assets/humanoids.png'
  },
  {
    id: 'swarm_bots',
    title: 'Swarm & Companion Robots',
    branch: 'Robotics & Mobility',
    era: 'Expansion (2030s)',
    cost: 420,
    description: 'Robots capable of complex coordination and emotional bonding. A thousand tiny robots acting as one. <strong>It\'s either a beautiful dance or a terrifying metal cloud. Don\'t make them angry.</strong>',
    prerequisites: ['humanoids'],
    unlocks: ['Planetary Construction Swarms'],
    row: 5,
    column: 3, // SHIFTED
    imageUrl: 'assets/swarm_bots.png'
  },
  {
    id: 'hoverbikes',
    title: 'Hoverbikes',
    branch: 'Robotics & Mobility',
    era: 'Breakthrough (2025)',
    cost: 160,
    description: 'Personal aerial mobility devices. <strong>The most efficient way to turn a traffic jam into a fatal plummet. Wear a helmet. Or a parachute.</strong>',
    prerequisites: ['robotaxis'],
    unlocks: ['Personal Air Units'],
    row: 6,
    column: 2, // SHIFTED (2025 is col 2 now)
    imageUrl: 'assets/hoverbikes.png'
  },
  {
    id: 'evtol',
    title: 'eVTOL Megacities',
    branch: 'Robotics & Mobility',
    era: 'Expansion (2030s)',
    cost: 400,
    description: 'Urban air mobility integrated into city skylines. Flying cars are finally here, and they\'re basically just loud, expensive busses. <strong>The Jetsons lied to us about the cool factor.</strong>',
    prerequisites: ['hoverbikes'],
    unlocks: ['Flying Taxis', 'Skyports'],
    row: 6,
    column: 3, // SHIFTED
    imageUrl: 'assets/evtol.png'
  },

  // --- SPACE EXPLORATION ---
  {
    id: 'shuttle',
    title: 'Space Shuttle',
    branch: 'Space Exploration',
    era: 'Foundations (1980-2020)',
    cost: 70,
    description: 'Reusable orbital spacecraft program. <strong>A flying brick that proved space is hard, expensive, and really cool if you ignore the safety margins.</strong>',
    prerequisites: ['voyager'], // NEW PARENT
    unlocks: ['Orbital Stations', 'Reusable Boosters'],
    historicalEnabler: '<a href="https://grokipedia.com/page/STS-1" target="_blank">1981 STS-1</a> (View on Grokipedia)',
    row: 7,
    column: 1, // SHIFTED
    imageUrl: 'assets/shuttle.png'
  },
  {
    id: 'starship',
    title: 'Starship-Class Heavy Lift',
    branch: 'Space Exploration',
    era: 'Breakthrough (2025)',
    cost: 200,
    description: 'Fully reusable, super-heavy launch vehicles. A stainless steel grain silo that flies. <strong>It lands or it explodes; either way, it\'s good TV.</strong>',
    prerequisites: ['shuttle'],
    unlocks: ['Mars Cargo Missions', 'Mega-Constellations'],
    row: 7,
    column: 2, // SHIFTED
    imageUrl: 'assets/starship.png'
  },
  {
    id: 'interplanetary',
    title: 'Routine Interplanetary',
    branch: 'Space Exploration',
    era: 'Expansion (2030s)',
    cost: 500,
    description: 'Scheduled transport between Earth and Mars. <strong>The commute is 6 months and the in-flight movie is "Total Recall" on loop. Bring snacks.</strong>',
    prerequisites: ['starship'],
    unlocks: ['Asteroid Mining', 'Mars Shuttles'],
    row: 7,
    column: 3, // SHIFTED
    imageUrl: 'assets/interplanetary.png'
  },
  {
    id: 'colonies',
    title: 'Self-Sustaining Colonies',
    branch: 'Space Exploration',
    era: 'Singularity (2040s)',
    cost: 1500,
    description: 'Off-world settlements independent of Earth. For when you really, really need to get away from your in-laws. <strong>Like, 140 million miles away.</strong>',
    prerequisites: ['interplanetary'],
    unlocks: ['Mars City', 'Space Victory'],
    row: 7,
    column: 4, // SHIFTED
    imageUrl: 'assets/colonies.png'
  },
  {
    id: 'iss',
    title: 'ISS Assembly',
    branch: 'Space Exploration',
    era: 'Foundations (1980-2020)',
    cost: 65,
    description: 'International cooperation for permanent orbital presence. <strong>The most expensive Airbnb in history. Great view, terrible plumbing.</strong>',
    prerequisites: ['voyager'], // NEW PARENT (Shared with Shuttle)
    unlocks: ['Zero-G Labs'],
    historicalEnabler: '<a href="https://grokipedia.com/page/Zarya_(ISS_module)" target="_blank">1998 Zarya Module</a> (View on Grokipedia)',
    row: 8,
    column: 1, // SHIFTED
    imageUrl: 'assets/iss.png'
  },
  {
    id: 'space_datacenters',
    title: 'Space Datacenters',
    branch: 'Space Exploration',
    era: 'Breakthrough (2025)',
    cost: 180,
    description: 'Orbital compute clusters cooled by deep space. <strong>Putting servers in orbit because "the cloud" wasn\'t literal enough for marketing.</strong>',
    prerequisites: ['iss'],
    unlocks: ['Orbital AI Farms', '+20% Science'],
    row: 8,
    column: 2, // SHIFTED
    imageUrl: 'assets/space_datacenters.png'
  },
  {
    id: 'orbital_factories',
    title: 'Orbital Mega-Factories',
    branch: 'Space Exploration',
    era: 'Expansion (2030s)',
    cost: 480,
    description: 'Zero-gravity manufacturing of impossible materials. <strong>Making things in space because gravity is for peasants. Also, distinct lack of OSHA inspectors.</strong>',
    prerequisites: ['space_datacenters'],
    unlocks: ['Propellant Depots', 'Moon Factories'],
    row: 8,
    column: 3, // SHIFTED
    imageUrl: 'assets/orbital_factories.png'
  },

  // --- ENERGY ---
  {
    id: 'li_ion',
    title: 'Lithium-Ion Batteries',
    branch: 'Energy & Sustainability',
    era: 'Foundations (1980-2020)',
    cost: 50,
    description: 'High energy density rechargeable batteries. <strong>The reason your phone dies at 1% and also the reason your car can do 0-60 in 2 seconds.</strong>',
    prerequisites: ['early_solar'], // NEW PARENT
    unlocks: ['Early EVs', 'Grid Storage'],
    historicalEnabler: '<a href="https://grokipedia.com/page/Lithium-ion_battery" target="_blank">1991 Sony</a> (View on Grokipedia)',
    row: 9,
    column: 1, // SHIFTED
    imageUrl: 'assets/li_ion.png'
  },
  {
    id: 'adv_batteries',
    title: 'Advanced Batteries',
    branch: 'Energy & Sustainability',
    era: 'Breakthrough (2025)',
    cost: 140,
    description: 'Solid-state and silicon anode technologies. Batteries that don\'t catch fire? What a concept. <strong>We might actually make it through a whole day without a charger.</strong>',
    prerequisites: ['li_ion'],
    unlocks: ['1000km EVs', 'Home Batteries'],
    row: 9,
    column: 2, // SHIFTED
    imageUrl: 'assets/adv_batteries.png'
  },
  {
    id: 'ambient_energy',
    title: 'Ambient Energy',
    branch: 'Energy & Sustainability',
    era: 'Expansion (2030s)',
    cost: 350,
    description: 'Harvesting energy from radio waves, heat, and vibration. <strong>Powering your devices with the ambient screaming of the universe. Free energy, if you ignore the entropy.</strong>',
    prerequisites: ['adv_batteries'],
    unlocks: ['Wireless Power Grids', 'Perpetual Sensors'],
    row: 9,
    column: 3, // SHIFTED
    imageUrl: 'assets/ambient_energy.png'
  },
  {
    id: 'pwr',
    title: 'PWR Reactors',
    branch: 'Energy & Sustainability',
    era: 'Foundations (1980-2020)',
    cost: 60,
    description: 'Pressurized Water Reactors for nuclear fission. Boiling water with rocks. <strong>It\'s steampunk but with more radiation shielding.</strong>',
    prerequisites: ['early_solar'], // NEW PARENT (Loose link, but keeps tree connected)
    unlocks: ['Nuclear Plants'],
    historicalEnabler: '<a href="https://grokipedia.com/page/Shippingport_Atomic_Power_Station" target="_blank">1957 Shippingport</a> (View on Grokipedia)',
    row: 10,
    column: 1, // SHIFTED (Kept at 1)
    imageUrl: 'assets/pwr.png'
  },
  {
    id: 'smr',
    title: 'SMR Reactors',
    branch: 'Energy & Sustainability',
    era: 'Breakthrough (2025)',
    cost: 190,
    description: 'Small Modular Reactors for flexible deployment. <strong>Pocket-sized nuclear power! What could possibly go wrong in a suburban backyard?</strong>',
    prerequisites: ['pwr'],
    unlocks: ['Portable Reactors', 'Datacenter Power'],
    row: 10,
    column: 2, // SHIFTED
    imageUrl: 'assets/smr.png'
  },
  {
    id: 'fusion_micro',
    title: 'Fusion Micro-Reactors',
    branch: 'Energy & Sustainability',
    era: 'Expansion (2030s)',
    cost: 800,
    description: 'Net-positive fusion energy at neighborhood scale. <strong>The power of the sun, in the palm of your hand. Doc Ock would be proud.</strong>',
    prerequisites: ['smr'],
    unlocks: ['Unlimited Energy', 'Post-Scarcity'],
    row: 10,
    column: 3, // SHIFTED
    imageUrl: 'assets/fusion_micro.png'
  },

  // --- BIO & HEALTH ---
  {
    id: 'dna',
    title: 'Biotech & GMOs', // Renamed from "Recombinant DNA" to avoid duplicate name
    branch: 'Bio & Health',
    era: 'Foundations (1980-2020)',
    cost: 50,
    description: 'Factories for biological compounds. Playing Lego with the building blocks of life for profit. <strong>Jurassic Park was a warning, not a manual, guys.</strong>',
    prerequisites: ['rec_dna'], // NEW PARENT
    unlocks: ['GMOs', 'Insulin Production'],
    historicalEnabler: '<a href="https://grokipedia.com/page/Genentech" target="_blank">1976 Genentech</a> (View on Grokipedia)',
    row: 11,
    column: 1, // SHIFTED
    imageUrl: 'assets/dna.png'
  },
  {
    id: 'crispr',
    title: 'CRISPR Gene Editing',
    branch: 'Bio & Health',
    era: 'Breakthrough (2025)',
    cost: 160,
    description: 'Precise editing of DNA sequences in living organisms. <strong>CTRL+F for "cancer", replace with "nope". Nature is just a suggestion now.</strong>',
    prerequisites: ['dna'],
    unlocks: ['Genetic Therapies', 'Cancer Vaccines'],
    row: 11,
    column: 2, // SHIFTED
    imageUrl: 'assets/crispr.png'
  },
  {
    id: 'genomics',
    title: 'Personalized Genomics',
    branch: 'Bio & Health',
    era: 'Expansion (2030s)',
    cost: 400,
    description: 'Medical treatment tailored to individual genetic makeup. <strong>Healthcare that actually cares about *your* specific weirdness. About time.</strong>',
    prerequisites: ['crispr'],
    unlocks: ['Disease Eradication', 'Telomere Extension'],
    row: 11,
    column: 3, // SHIFTED
    imageUrl: 'assets/genomics.png'
  },
  {
    id: 'bci_early',
    title: 'Utah Array BCI',
    branch: 'Bio & Health',
    era: 'Foundations (1980-2020)',
    cost: 80,
    description: 'Early microelectrode arrays for neural recording. Sticking pins in brains for science. <strong>Primitive, but hey, you gotta start the cyborg revolution somewhere.</strong>',
    prerequisites: ['carbon_fiber'], // NEW PARENT
    unlocks: ['Paralysis Control'],
    historicalEnabler: '<a href="https://grokipedia.com/page/BrainGate" target="_blank">2004 Implants</a> (View on Grokipedia)',
    row: 12,
    column: 1, // SHIFTED
    imageUrl: 'assets/bci_early.png'
  },
  {
    id: 'bci_modern',
    title: 'Brain-Computer Interface',
    branch: 'Bio & Health',
    era: 'Breakthrough (2025)',
    cost: 220,
    description: 'High-bandwidth connection between brain and machine. Twitter directly into your cortex. <strong>You thought doomscrolling was bad on a phone? Just wait.</strong>',
    prerequisites: ['bci_early'],
    unlocks: ['Neuralink Telepathy', 'Memory Prosthetics'],
    row: 12,
    column: 2, // SHIFTED
    imageUrl: 'assets/bci_modern.png'
  },
  {
    id: 'neural_lace',
    title: 'Full Neural Lace',
    branch: 'Bio & Health',
    era: 'Expansion (2030s)',
    cost: 600,
    description: 'Seamless integration of biological and digital cognition. <strong>Resistance is futile. Seriously, why resist? We have instant kung-fu downloads.</strong>',
    prerequisites: ['bci_modern'],
    unlocks: ['Mind Uploads', 'Transhuman Victory'],
    row: 12,
    column: 3, // SHIFTED
    imageUrl: 'assets/neural_lace.png'
  },

  // --- QUANTUM ---
  {
    id: 'qubits',
    title: 'First Qubits',
    branch: 'Quantum & Materials',
    era: 'Foundations (1980-2020)',
    cost: 90,
    description: 'Experimental realization of quantum bits. <strong>It\'s a 1 and a 0 at the same time. If you understand it, you\'re lying.</strong>',
    prerequisites: ['microproc'], // NEW PARENT (linked to microproc)
    unlocks: ['Quantum Simulators'],
    historicalEnabler: '<a href="https://grokipedia.com/page/Nuclear_magnetic_resonance_quantum_computer" target="_blank">1998 NMR</a> (View on Grokipedia)',
    row: 13,
    column: 1, // SHIFTED
    imageUrl: 'assets/qubits.png'
  },
  {
    id: 'quantum_processors',
    title: 'Quantum Processors',
    branch: 'Quantum & Materials',
    era: 'Breakthrough (2025)',
    cost: 250,
    description: 'Scalable quantum computing chips with error correction. <strong>Breaking encryption and solving mazes instantly. RIP your blockchain wallet.</strong>',
    prerequisites: ['qubits'],
    unlocks: ['Secure Networks', 'Topological Qubits'],
    row: 13,
    column: 2, // SHIFTED
    imageUrl: 'assets/quantum_processors.png'
  },
  {
    id: 'quantum_internet',
    title: 'Quantum Internet',
    branch: 'Quantum & Materials',
    era: 'Expansion (2030s)',
    cost: 700,
    description: 'Instantaneous information transfer via entanglement. <strong>Lag is officially dead. Now you have no excuse for losing that competitive match.</strong>',
    prerequisites: ['quantum_processors'],
    unlocks: ['Global Entanglement', 'Encryption Breaking'],
    row: 13,
    column: 3, // SHIFTED
    imageUrl: 'assets/quantum_internet.png'
  },
  {
    id: 'reality_sims',
    title: 'Quantum Reality Sims',
    branch: 'Quantum & Materials',
    era: 'Singularity (2040s)',
    cost: 2000,
    description: 'Simulating physics at the Planck scale. <strong>If we\'re living in a simulation, this is the computer running it. Try not to segfault the universe.</strong>',
    prerequisites: ['quantum_internet'],
    unlocks: ['Universe Simulation', 'Ultimate Compute'],
    row: 13,
    column: 4, // SHIFTED
    imageUrl: 'assets/reality_sims.png'
  },

  // --- SINGULARITY EXPANSION ---
  {
    id: 'immortality',
    title: 'Immortality Therapies',
    branch: 'Bio & Health',
    era: 'Singularity (2040s)',
    cost: 1800,
    description: 'Reversing aging at the cellular level. <strong>Death is now an optional DLC. Terms and conditions (and subscription fees) apply.</strong>',
    prerequisites: ['genomics'],
    unlocks: ['Galaxy Population'],
    row: 11,
    column: 4,
    imageUrl: 'assets/immortality.png'
  },
  {
    id: 'zero_point',
    title: 'Zero-Point Energy',
    branch: 'Energy & Sustainability',
    era: 'Singularity (2040s)',
    cost: 2500,
    description: 'Extracting energy from the vacuum of space. <strong>Physics said "conservation of energy", we said "hold my beer". Infinite power, zero emissions.</strong>',
    prerequisites: ['fusion_micro'],
    unlocks: ['Type II Civilization'],
    row: 10,
    column: 4,
    imageUrl: 'assets/zero_point.png'
  },
  {
    id: 'nano_fabs',
    title: 'Nanobot Fabricators',
    branch: 'Robotics & Mobility',
    era: 'Singularity (2040s)',
    cost: 1600,
    description: 'Molecular manufacturing. <strong>Tea, Earl Grey, Hot. Or a Ferrari. It\'s all just arranged atoms anyway.</strong>',
    prerequisites: ['swarm_bots'],
    unlocks: ['Matter Programming'],
    row: 5,
    column: 4,
    imageUrl: 'assets/nano_fabs.png'
  },
  {
    id: 'stellar_engine',
    title: 'Stellar Engines',
    branch: 'Space Exploration',
    era: 'Singularity (2040s)',
    cost: 5000,
    description: 'Moving the entire solar system. <strong>Because the galactic neighborhood was getting a bit sketchy. We\'re taking the sun and leaving.</strong>',
    prerequisites: ['colonies'],
    unlocks: ['Galactic Nomadism'],
    row: 7,
    column: 4,
    imageUrl: 'assets/stellar_engine.png'
  }
];
