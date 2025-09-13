// Champion data with roles and enhanced information
const champions = [
    { id: 1, name: "Aatrox", role: "Top" },
    { id: 2, name: "Ahri", role: "Mid" },
    { id: 3, name: "Akali", role: "Mid" },
    { id: 4, name: "Alistar", role: "Support" },
    { id: 5, name: "Ammu", role: "Jungle" },
    { id: 6, name: "Anivia", role: "Mid" },
    { id: 7, name: "Annie", role: "Mid" },
    { id: 8, name: "Ashe", role: "ADC" },
    { id: 9, name: "Azir", role: "Mid" },
    { id: 10, name: "Bard", role: "Support" },
    { id: 11, name: "Blitzcrank", role: "Support" },
    { id: 12, name: "Brand", role: "Support" },
    { id: 13, name: "Braum", role: "Support" },
    { id: 14, name: "Caitlyn", role: "ADC" },
    { id: 15, name: "Camille", role: "Top" },
    { id: 16, name: "Cassiopeia", role: "Mid" },
    { id: 17, name: "Cho'Gath", role: "Top" },
    { id: 18, name: "Corki", role: "Mid" },
    { id: 19, name: "Darius", role: "Top" },
    { id: 20, name: "Diana", role: "Jungle" },
    { id: 21, name: "Dr. Mundo", role: "Top" },
    { id: 22, name: "Draven", role: "ADC" },
    { id: 23, name: "Ekko", role: "Jungle" },
    { id: 24, name: "Elise", role: "Jungle" },
    { id: 25, name: "Evelynn", role: "Jungle" },
    { id: 26, name: "Ezreal", role: "ADC" },
    { id: 27, name: "Fiddlesticks", role: "Jungle" },
    { id: 28, name: "Fiora", role: "Top" },
    { id: 29, name: "Fizz", role: "Mid" },
    { id: 30, name: "Galio", role: "Mid" },
    { id: 31, name: "Gangplank", role: "Top" },
    { id: 32, name: "Garen", role: "Top" },
    { id: 33, name: "Gnar", role: "Top" },
    { id: 34, name: "Gragas", role: "Jungle" },
    { id: 35, name: "Graves", role: "Jungle" },
    { id: 36, name: "Hecarim", role: "Jungle" },
    { id: 37, name: "Heimerdinger", role: "Mid" },
    { id: 38, name: "Illaoi", role: "Top" },
    { id: 39, name: "Irelia", role: "Top" },
    { id: 40, name: "Ivern", role: "Jungle" },
    { id: 41, name: "Janna", role: "Support" },
    { id: 42, name: "Jarvan IV", role: "Jungle" },
    { id: 43, name: "Jax", role: "Top" },
    { id: 44, name: "Jayce", role: "Top" },
    { id: 45, name: "Jhin", role: "ADC" },
    { id: 46, name: "Jinx", role: "ADC" },
    { id: 47, name: "Kai'Sa", role: "ADC" },
    { id: 48, name: "Kalista", role: "ADC" },
    { id: 49, name: "Karma", role: "Support" },
    { id: 50, name: "Karthus", role: "Jungle" },
    { id: 51, name: "Kassadin", role: "Mid" },
    { id: 52, name: "Katarina", role: "Mid" },
    { id: 53, name: "Kayle", role: "Top" },
    { id: 54, name: "Kayn", role: "Jungle" },
    { id: 55, name: "Kennen", role: "Top" },
    { id: 56, name: "Kha'Zix", role: "Jungle" },
    { id: 57, name: "Kindred", role: "Jungle" },
    { id: 58, name: "Kled", role: "Top" },
    { id: 59, name: "Kog'Maw", role: "ADC" },
    { id: 60, name: "LeBlanc", role: "Mid" },
    { id: 61, name: "Lee Sin", role: "Jungle" },
    { id: 62, name: "Leona", role: "Support" },
    { id: 63, name: "Lissandra", role: "Mid" },
    { id: 64, name: "Lucian", role: "ADC" },
    { id: 65, name: "Lulu", role: "Support" },
    { id: 66, name: "Lux", role: "Support" },
    { id: 67, name: "Malphite", role: "Top" },
    { id: 68, name: "Malzahar", role: "Mid" },
    { id: 69, name: "Maokai", role: "Top" },
    { id: 70, name: "Master Yi", role: "Jungle" },
    { id: 71, name: "Miss Fortune", role: "ADC" },
    { id: 72, name: "Mordekaiser", role: "Top" },
    { id: 73, name: "Morgana", role: "Support" },
    { id: 74, name: "Nami", role: "Support" },
    { id: 75, name: "Nasus", role: "Top" },
    { id: 76, name: "Nautilus", role: "Support" },
    { id: 77, name: "Nidalee", role: "Jungle" },
    { id: 78, name: "Nocturne", role: "Jungle" },
    { id: 79, name: "Nunu", role: "Jungle" },
    { id: 80, name: "Olaf", role: "Jungle" },
    { id: 81, name: "Orianna", role: "Mid" },
    { id: 82, name: "Ornn", role: "Top" },
    { id: 83, name: "Pantheon", role: "Top" },
    { id: 84, name: "Poppy", role: "Top" },
    { id: 85, name: "Pyke", role: "Support" },
    { id: 86, name: "Qiyana", role: "Mid" },
    { id: 87, name: "Quinn", role: "Top" },
    { id: 88, name: "Rakan", role: "Support" },
    { id: 89, name: "Rammus", role: "Jungle" },
    { id: 90, name: "Rek'Sai", role: "Jungle" },
    { id: 91, name: "Renekton", role: "Top" },
    { id: 92, name: "Rengar", role: "Jungle" },
    { id: 93, name: "Riven", role: "Top" },
    { id: 94, name: "Rumble", role: "Top" },
    { id: 95, name: "Ryze", role: "Mid" },
    { id: 96, name: "Sejuani", role: "Jungle" },
    { id: 97, name: "Senna", role: "Support" },
    { id: 98, name: "Seraphine", role: "Support" },
    { id: 99, name: "Sett", role: "Top" },
    { id: 100, name: "Shaco", role: "Jungle" },
    { id: 101, name: "Shen", role: "Top" },
    { id: 102, name: "Shyvana", role: "Jungle" },
    { id: 103, name: "Singed", role: "Top" },
    { id: 104, name: "Sion", role: "Top" },
    { id: 105, name: "Sivir", role: "ADC" },
    { id: 106, name: "Skarner", role: "Jungle" },
    { id: 107, name: "Sona", role: "Support" },
    { id: 108, name: "Soraka", role: "Support" },
    { id: 109, name: "Swain", role: "Support" },
    { id: 110, name: "Sylas", role: "Mid" },
    { id: 111, name: "Syndra", role: "Mid" },
    { id: 112, name: "Tahm Kench", role: "Support" },
    { id: 113, name: "Taliyah", role: "Jungle" },
    { id: 114, name: "Talon", role: "Mid" },
    { id: 115, name: "Taric", role: "Support" },
    { id: 116, name: "Teemo", role: "Top" },
    { id: 117, name: "Thresh", role: "Support" },
    { id: 118, name: "Tristana", role: "ADC" },
    { id: 119, name: "Trundle", role: "Jungle" },
    { id: 120, name: "Tryndamere", role: "Top" },
    { id: 121, name: "Twisted Fate", role: "Mid" },
    { id: 122, name: "Twitch", role: "ADC" },
    { id: 123, name: "Udyr", role: "Jungle" },
    { id: 124, name: "Urgot", role: "Top" },
    { id: 125, name: "Varus", role: "ADC" },
    { id: 126, name: "Vayne", role: "ADC" },
    { id: 127, name: "Veigar", role: "Mid" },
    { id: 128, name: "Vel'Koz", role: "Support" },
    { id: 129, name: "Vi", role: "Jungle" },
    { id: 130, name: "Viego", role: "Jungle" },
    { id: 131, name: "Viktor", role: "Mid" },
    { id: 132, name: "Vladimir", role: "Mid" },
    { id: 133, name: "Volibear", role: "Jungle" },
    { id: 134, name: "Warwick", role: "Jungle" },
    { id: 135, name: "Wukong", role: "Jungle" },
    { id: 136, name: "Xayah", role: "ADC" },
    { id: 137, name: "Xerath", role: "Mid" },
    { id: 138, name: "Xin Zhao", role: "Jungle" },
    { id: 139, name: "Yasuo", role: "Mid" },
    { id: 140, name: "Yone", role: "Mid" },
    { id: 141, name: "Yorick", role: "Top" },
    { id: 142, name: "Yuumi", role: "Support" },
    { id: 143, name: "Zac", role: "Jungle" },
    { id: 144, name: "Zed", role: "Mid" },
    { id: 145, name: "Ziggs", role: "Mid" },
    { id: 146, name: "Zilean", role: "Support" },
    { id: 147, name: "Zoe", role: "Mid" },
    { id: 148, name: "Zyra", role: "Support" }
];

// Game state variables
let currentMode = 'ranking';
let draftPhases = [];
let currentPhaseIndex = 0;
let bannedChampions = new Set();
let pickedChampions = new Set();
let blueBans = [];
let redBans = [];
let bluePicks = [];
let redPicks = [];
let timer = 30;
let timerInterval;
let isPaused = false;
let pausedIndicator = null;

// Draft phase definitions
const rankingPhases = [
    // Ban Phase 1 (5 bans each)
    { type: 'ban', team: 'blue', description: 'Blue team ban 1', phase: 'Ban Phase 1' },
    { type: 'ban', team: 'red', description: 'Red team ban 1', phase: 'Ban Phase 1' },
    { type: 'ban', team: 'blue', description: 'Blue team ban 2', phase: 'Ban Phase 1' },
    { type: 'ban', team: 'red', description: 'Red team ban 2', phase: 'Ban Phase 1' },
    { type: 'ban', team: 'blue', description: 'Blue team ban 3', phase: 'Ban Phase 1' },
    { type: 'ban', team: 'red', description: 'Red team ban 3', phase: 'Ban Phase 1' },
    { type: 'ban', team: 'blue', description: 'Blue team ban 4', phase: 'Ban Phase 1' },
    { type: 'ban', team: 'red', description: 'Red team ban 4', phase: 'Ban Phase 1' },
    { type: 'ban', team: 'blue', description: 'Blue team ban 5', phase: 'Ban Phase 1' },
    { type: 'ban', team: 'red', description: 'Red team ban 5', phase: 'Ban Phase 1' },
    // Pick Phase
    { type: 'pick', team: 'blue', description: 'Blue team pick 1', phase: 'Pick Phase' },
    { type: 'pick', team: 'red', description: 'Red team pick 1', phase: 'Pick Phase' },
    { type: 'pick', team: 'red', description: 'Red team pick 2', phase: 'Pick Phase' },
    { type: 'pick', team: 'blue', description: 'Blue team pick 2', phase: 'Pick Phase' },
    { type: 'pick', team: 'blue', description: 'Blue team pick 3', phase: 'Pick Phase' },
    { type: 'pick', team: 'red', description: 'Red team pick 3', phase: 'Pick Phase' },
    { type: 'pick', team: 'red', description: 'Red team pick 4', phase: 'Pick Phase' },
    { type: 'pick', team: 'blue', description: 'Blue team pick 4', phase: 'Pick Phase' },
    { type: 'pick', team: 'blue', description: 'Blue team pick 5', phase: 'Pick Phase' },
    { type: 'pick', team: 'red', description: 'Red team pick 5', phase: 'Pick Phase' }
];

const tournamentPhases = [
    // Ban Phase 1 (3 bans each)
    { type: 'ban', team: 'blue', description: 'Blue team ban 1', phase: 'Ban Phase 1' },
    { type: 'ban', team: 'red', description: 'Red team ban 1', phase: 'Ban Phase 1' },
    { type: 'ban', team: 'blue', description: 'Blue team ban 2', phase: 'Ban Phase 1' },
    { type: 'ban', team: 'red', description: 'Red team ban 2', phase: 'Ban Phase 1' },
    { type: 'ban', team: 'blue', description: 'Blue team ban 3', phase: 'Ban Phase 1' },
    { type: 'ban', team: 'red', description: 'Red team ban 3', phase: 'Ban Phase 1' },
    // Pick Phase 1 (3 picks each)
    { type: 'pick', team: 'blue', description: 'Blue team pick 1', phase: 'Pick Phase 1' },
    { type: 'pick', team: 'red', description: 'Red team pick 1', phase: 'Pick Phase 1' },
    { type: 'pick', team: 'red', description: 'Red team pick 2', phase: 'Pick Phase 1' },
    { type: 'pick', team: 'blue', description: 'Blue team pick 2', phase: 'Pick Phase 1' },
    { type: 'pick', team: 'blue', description: 'Blue team pick 3', phase: 'Pick Phase 1' },
    { type: 'pick', team: 'red', description: 'Red team pick 3', phase: 'Pick Phase 1' },
    // Ban Phase 2 (2 bans each)
    { type: 'ban', team: 'red', description: 'Red team ban 4', phase: 'Ban Phase 2' },
    { type: 'ban', team: 'blue', description: 'Blue team ban 4', phase: 'Ban Phase 2' },
    { type: 'ban', team: 'red', description: 'Red team ban 5', phase: 'Ban Phase 2' },
    { type: 'ban', team: 'blue', description: 'Blue team ban 5', phase: 'Ban Phase 2' },
    // Pick Phase 2 (2 picks each)
    { type: 'pick', team: 'red', description: 'Red team pick 4', phase: 'Pick Phase 2' },
    { type: 'pick', team: 'blue', description: 'Blue team pick 4', phase: 'Pick Phase 2' },
    { type: 'pick', team: 'blue', description: 'Blue team pick 5', phase: 'Pick Phase 2' },
    { type: 'pick', team: 'red', description: 'Red team pick 5', phase: 'Pick Phase 2' }
];

// Utility functions
function generateChampionColor(championId) {
    return `hsl(${championId * 137.508 % 360}, 70%, 50%)`;
}

function generateChampionAvatar(champion) {
    const color = generateChampionColor(champion.id);
    return `<span style="color: white; font-weight: bold; font-size: 14px;">${champion.name.charAt(0)}</span>`;
}

// Timer functions
function startTimer() {
    if (isPaused) return;
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (isPaused) return;
        
        timer--;
        updateTimerDisplay();
        
        if (timer <= 0) {
            clearInterval(timerInterval);
            nextPhase();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    const timerElement = document.getElementById('timer');
    
    timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Add warning animation for last 10 seconds
    if (timer <= 10 && !isPaused) {
        timerElement.classList.add('warning');
    } else {
        timerElement.classList.remove('warning');
    }
    
    // Update paused state
    if (isPaused) {
        timerElement.classList.add('paused');
    } else {
        timerElement.classList.remove('paused');
    }
}

function pauseResumeTimer() {
    isPaused = !isPaused;
    const pauseBtn = document.getElementById('pause-btn');
    
    if (isPaused) {
        clearInterval(timerInterval);
        pauseBtn.textContent = 'Resume';
        pauseBtn.classList.add('pause-btn');
        showPausedIndicator();
    } else {
        startTimer();
        pauseBtn.textContent = 'Pause';
        pauseBtn.classList.remove('pause-btn');
        hidePausedIndicator();
    }
    
    updateTimerDisplay();
}

function showPausedIndicator() {
    if (!pausedIndicator) {
        pausedIndicator = document.createElement('div');
        pausedIndicator.className = 'paused-indicator';
        pausedIndicator.textContent = '⏸️ PAUSED';
        pausedIndicator.style.display = 'block';
        document.body.appendChild(pausedIndicator);
    }
    pausedIndicator.style.display = 'block';
}

function hidePausedIndicator() {
    if (pausedIndicator) {
        pausedIndicator.style.display = 'none';
    }
}

// Mode management
function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const modeInfo = document.getElementById('mode-info');
    if (mode === 'ranking') {
        modeInfo.textContent = 'Ranking Mode: 5 bans → 5 picks each team';
    } else {
        modeInfo.textContent = 'Tournament Mode: 3 bans → 3 picks → 2 bans → 2 picks';
    }
    
    resetDraft();
}

// Draft management
function resetDraft() {
    // Stop timer and reset pause state
    clearInterval(timerInterval);
    isPaused = false;
    hidePausedIndicator();
    document.getElementById('pause-btn').textContent = 'Pause';
    document.getElementById('pause-btn').classList.remove('pause-btn');
    
    // Reset draft state
    draftPhases = currentMode === 'ranking' ? [...rankingPhases] : [...tournamentPhases];
    currentPhaseIndex = 0;
    bannedChampions.clear();
    pickedChampions.clear();
    blueBans = [];
    redBans = [];
    bluePicks = [];
    redPicks = [];
    timer = 30;
    
    // Regenerate UI
    generateDraftSlots();
    generateChampions();
    updatePhaseInfo();
    document.getElementById('draft-summary').style.display = 'none';
    startTimer();
}

function generateDraftSlots() {
    const blueSlots = document.getElementById('blue-slots');
    const redSlots = document.getElementById('red-slots');
    
    blueSlots.innerHTML = '';
    redSlots.innerHTML = '';
    
    // Generate ban slots (5 for each team in both modes)
    for (let i = 1; i <= 5; i++) {
        blueSlots.innerHTML += `
            <div class="draft-slot ban" id="blue-ban-${i}">
                <div class="champion-avatar">
                    <span>B${i}</span>
                </div>
                <div class="slot-info">
                    <div class="slot-type">Ban ${i}</div>
                    <div class="champion-name">-</div>
                </div>
            </div>
        `;
        
        redSlots.innerHTML += `
            <div class="draft-slot ban" id="red-ban-${i}">
                <div class="champion-avatar">
                    <span>B${i}</span>
                </div>
                <div class="slot-info">
                    <div class="slot-type">Ban ${i}</div>
                    <div class="champion-name">-</div>
                </div>
            </div>
        `;
    }
    
    // Generate pick slots (5 for each team)
    for (let i = 1; i <= 5; i++) {
        blueSlots.innerHTML += `
            <div class="draft-slot pick" id="blue-pick-${i}">
                <div class="champion-avatar">
                    <span>P${i}</span>
                </div>
                <div class="slot-info">
                    <div class="slot-type">Pick ${i}</div>
                    <div class="champion-name">-</div>
                </div>
            </div>
        `;
        
        redSlots.innerHTML += `
            <div class="draft-slot pick" id="red-pick-${i}">
                <div class="champion-avatar">
                    <span>P${i}</span>
                </div>
                <div class="slot-info">
                    <div class="slot-type">Pick ${i}</div>
                    <div class="champion-name">-</div>
                </div>
            </div>
        `;
    }
}

function generateChampions() {
    const container = document.getElementById('champions-container');
    container.innerHTML = '';
    
    champions.forEach(champion => {
        const isBanned = bannedChampions.has(champion.id);
        const isPicked = pickedChampions.has(champion.id);
        
        const championCard = document.createElement('div');
        championCard.className = `champion-card ${isBanned ? 'banned' : ''} ${isPicked ? 'picked' : ''}`;
        championCard.onclick = () => selectChampion(champion);
        
        const avatarColor = generateChampionColor(champion.id);
        
        championCard.innerHTML = `
            <div class="champion-portrait" style="background: ${avatarColor};">
                ${generateChampionAvatar(champion)}
            </div>
            <div class="champion-card-name">${champion.name}</div>
            <div class="champion-role">${champion.role}</div>
        `;
        
        // Add status indicator
        if (isBanned || isPicked) {
            const statusIndicator = document.createElement('div');
            statusIndicator.className = `status-indicator ${isBanned ? 'status-banned' : 'status-picked'}`;
            championCard.appendChild(statusIndicator);
        }
        
        container.appendChild(championCard);
    });
}

function selectChampion(champion) {
    // Don't allow selection if paused
    if (isPaused) {
        alert('Draft is paused! Resume to continue.');
        return;
    }
    
    // Don't allow selection of banned/picked champions
    if (bannedChampions.has(champion.id) || pickedChampions.has(champion.id)) {
        return;
    }
    
    // Don't allow selection if draft is complete
    if (currentPhaseIndex >= draftPhases.length) {
        return;
    }
    
    const currentPhase = draftPhases[currentPhaseIndex];
    
    // Process the selection
    if (currentPhase.type === 'ban') {
        bannedChampions.add(champion.id);
        if (currentPhase.team === 'blue') {
            blueBans.push(champion);
            updateSlot('blue', 'ban', blueBans.length, champion);
        } else {
            redBans.push(champion);
            updateSlot('red', 'ban', redBans.length, champion);
        }
    } else {
        pickedChampions.add(champion.id);
        if (currentPhase.team === 'blue') {
            bluePicks.push(champion);
            updateSlot('blue', 'pick', bluePicks.length, champion);
        } else {
            redPicks.push(champion);
            updateSlot('red', 'pick', redPicks.length, champion);
        }
    }
    
    // Update UI and move to next phase
    generateChampions();
    nextPhase();
}

function updateSlot(team, type, number, champion) {
    const slot = document.getElementById(`${team}-${type}-${number}`);
    if (!slot) return;
    
    const avatar = slot.querySelector('.champion-avatar');
    const name = slot.querySelector('.champion-name');
    
    const avatarColor = generateChampionColor(champion.id);
    avatar.innerHTML = generateChampionAvatar(champion);
    avatar.style.background = avatarColor;
    avatar.style.border = `2px solid ${avatarColor}`;
    name.textContent = champion.name;
    
    // Add completion animation
    slot.style.transform = 'scale(1.05)';
    setTimeout(() => {
        slot.style.transform = 'scale(1)';
    }, 200);
}

function nextPhase() {
    // Clear active states
    document.querySelectorAll('.draft-slot.active').forEach(slot => {
        slot.classList.remove('active');
    });
    
    currentPhaseIndex++;
    
    if (currentPhaseIndex >= draftPhases.length) {
        finishDraft();
        return;
    }
    
    updatePhaseInfo();
    timer = 30; // Reset timer for new phase
    startTimer();
}

function skipPhase() {
    if (isPaused) {
        pauseResumeTimer(); // Resume if paused
    }
    nextPhase();
}

function updatePhaseInfo() {
    if (currentPhaseIndex >= draftPhases.length) {
        return;
    }
    
    const phase = draftPhases[currentPhaseIndex];
    const phaseElement = document.getElementById('current-phase');
    const descElement = document.getElementById('phase-description');
    
    phaseElement.textContent = phase.phase;
    descElement.textContent = phase.description;
    
    // Highlight active slot
    const teamType = phase.team;
    const actionType = phase.type;
    let slotNumber;
    
    if (actionType === 'ban') {
        slotNumber = (teamType === 'blue' ? blueBans.length : redBans.length) + 1;
    } else {
        slotNumber = (teamType === 'blue' ? bluePicks.length : redPicks.length) + 1;
    }
    
    const activeSlot = document.getElementById(`${teamType}-${actionType}-${slotNumber}`);
    if (activeSlot) {
        activeSlot.classList.add('active');
    }
}

function finishDraft() {
    clearInterval(timerInterval);
    isPaused = false;
    hidePausedIndicator();
    
    document.getElementById('current-phase').textContent = 'Draft Complete!';
    document.getElementById('phase-description').textContent = 'All picks and bans have been made';
    document.getElementById('timer').textContent = 'COMPLETE';
    document.getElementById('pause-btn').textContent = 'Pause';
    document.getElementById('pause-btn').classList.remove('pause-btn');
    document.getElementById('pause-btn').disabled = true;
    
    // Clear active states
    document.querySelectorAll('.draft-slot.active').forEach(slot => {
        slot.classList.remove('active');
    });
    
    // Show summary
    showDraftSummary();
}

function showDraftSummary() {
    const summary = document.getElementById('draft-summary');
    const blueBansEl = document.getElementById('blue-bans-summary');
    const redBansEl = document.getElementById('red-bans-summary');
    const bluePicksEl = document.getElementById('blue-picks-summary');
    const redPicksEl = document.getElementById('red-picks-summary');
    
    // Format team compositions
    blueBansEl.innerHTML = blueBans.map(c => `• ${c.name}`).join('<br>') || 'No bans';
    redBansEl.innerHTML = redBans.map(c => `• ${c.name}`).join('<br>') || 'No bans';
    bluePicksEl.innerHTML = bluePicks.map(c => `• ${c.name} (${c.role})`).join('<br>') || 'No picks';
    redPicksEl.innerHTML = redPicks.map(c => `• ${c.name} (${c.role})`).join('<br>') || 'No picks';
    
    summary.style.display = 'block';
    summary.scrollIntoView({ behavior: 'smooth' });
    
    // Log draft data for ML integration
    console.log('Draft Complete - Data for ML Model:');
    console.log('Blue Team:', {
        bans: blueBans.map(c => ({ id: c.id, name: c.name })),
        picks: bluePicks.map(c => ({ id: c.id, name: c.name, role: c.role }))
    });
    console.log('Red Team:', {
        bans: redBans.map(c => ({ id: c.id, name: c.name })),
        picks: redPicks.map(c => ({ id: c.id, name: c.name, role: c.role }))
    });
}

function filterChampions() {
    const search = document.getElementById('champion-search').value.toLowerCase();
    const championCards = document.querySelectorAll('.champion-card');
    
    championCards.forEach(card => {
        const championName = card.querySelector('.champion-card-name').textContent.toLowerCase();
        const championRole = card.querySelector('.champion-role').textContent.toLowerCase();
        const shouldShow = championName.includes(search) || championRole.includes(search);
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case ' ': // Spacebar to pause/resume
            event.preventDefault();
            if (currentPhaseIndex < draftPhases.length) {
                pauseResumeTimer();
            }
            break;
        case 'Enter': // Enter to skip phase
            event.preventDefault();
            if (currentPhaseIndex < draftPhases.length) {
                skipPhase();
            }
            break;
        case 'Escape': // Escape to reset
            event.preventDefault();
            if (confirm('Are you sure you want to reset the draft?')) {
                resetDraft();
            }
            break;
    }
});

// Auto-save draft state
function saveDraftState() {
    const draftState = {
        mode: currentMode,
        phaseIndex: currentPhaseIndex,
        blueBans: blueBans.map(c => c.id),
        redBans: redBans.map(c => c.id),
        bluePicks: bluePicks.map(c => c.id),
        redPicks: redPicks.map(c => c.id),
        timer: timer,
        isPaused: isPaused
    };
    
    // In a real application, you could save this to localStorage
    // localStorage.setItem('draftState', JSON.stringify(draftState));
    console.log('Draft state:', draftState);
}

// Export draft data for ML model
function exportDraftData() {
    const draftData = {
        mode: currentMode,
        timestamp: new Date().toISOString(),
        blue_team: {
            bans: blueBans.map(c => ({ id: c.id, name: c.name })),
            picks: bluePicks.map(c => ({ id: c.id, name: c.name, role: c.role }))
        },
        red_team: {
            bans: redBans.map(c => ({ id: c.id, name: c.name })),
            picks: redPicks.map(c => ({ id: c.id, name: c.name, role: c.role }))
        },
        phase_duration: draftPhases.length > 0 ? (draftPhases.length * 30) - timer : 0
    };
    
    return draftData;
}

// Initialize the application
function initializeApp() {
    console.log('LoL Draft Simulator initialized');
    console.log('Keyboard shortcuts:');
    console.log('- Spacebar: Pause/Resume');
    console.log('- Enter: Skip Phase');
    console.log('- Escape: Reset Draft');
    
    // Enable pause button
    document.getElementById('pause-btn').disabled = false;
    
    resetDraft();
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Auto-save every 5 seconds during draft
setInterval(() => {
    if (currentPhaseIndex < draftPhases.length && currentPhaseIndex > 0) {
        saveDraftState();
    }
}, 5000);