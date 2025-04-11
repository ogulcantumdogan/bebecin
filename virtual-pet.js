/**
 * Virtual Dental Cat Pet for DUS Hazırlık
 * A cute companion that grows as the student progresses
 */

(function() {
    // Only keep first 2 pet stages based on progress percentage
    const petStages = [
        {
            name: "Yavru Diş Kediciğin",
            minProgress: 0,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <!-- Body -->
                <circle cx="50" cy="55" r="35" fill="#FFB6C1" />
                
                <!-- Ears -->
                <path d="M25 30 L35 45 L45 35 Z" fill="#FFB6C1" />
                <path d="M75 30 L65 45 L55 35 Z" fill="#FFB6C1" />
                <path d="M28 32 L35 43 L42 36 Z" fill="#FFC0CB" />
                <path d="M72 32 L65 43 L58 36 Z" fill="#FFC0CB" />
                
                <!-- Eyes -->
                <ellipse cx="35" cy="50" rx="8" ry="9" fill="white" />
                <ellipse cx="65" cy="50" rx="8" ry="9" fill="white" />
                <ellipse cx="35" cy="50" rx="4" ry="7" fill="black" />
                <ellipse cx="65" cy="50" rx="4" ry="7" fill="black" />
                <ellipse cx="33" cy="47" rx="2" ry="2" fill="white" />
                <ellipse cx="63" cy="47" rx="2" ry="2" fill="white" />
                
                <!-- Muzzle -->
                <ellipse cx="50" cy="65" rx="15" ry="10" fill="#FFCCDA" />
                
                <!-- Nose -->
                <path d="M47 60 Q50 62 53 60 L50 63 Z" fill="#FF90B3" />
                
                <!-- Mouth -->
                <path d="M45 68 Q50 72 55 68" stroke="#FF69B4" stroke-width="1.5" fill="none" />
                
                <!-- Whiskers -->
                <line x1="42" y1="62" x2="28" y2="60" stroke="#FFE6EA" stroke-width="1.5" />
                <line x1="42" y1="65" x2="28" y2="65" stroke="#FFE6EA" stroke-width="1.5" />
                <line x1="58" y1="62" x2="72" y2="60" stroke="#FFE6EA" stroke-width="1.5" />
                <line x1="58" y1="65" x2="72" y2="65" stroke="#FFE6EA" stroke-width="1.5" />
                
                <!-- Baby features -->
                <ellipse cx="35" cy="55" rx="3" ry="2" fill="#FF90B3" opacity="0.5" />
                <ellipse cx="65" cy="55" rx="3" ry="2" fill="#FF90B3" opacity="0.5" />
                
                <!-- Tiny tooth -->
                <path d="M46 28 Q50 25 54 28 L52 35 L48 35 Z" fill="white" stroke="#FFCCDA" stroke-width="0.5" />
            </svg>`,
            messages: [
                "Daha yeni başlıyoruz! 🐱",
                "Çalışmaya devam et! Minik bir destek burada.",
                "DUS hazırlığına başlarken ben de büyümeye başlıyorum!"
            ]
        },
        {
            name: "Öğrenci Diş Kediciğin",
            minProgress: 50,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <!-- Body -->
                <circle cx="50" cy="55" r="37" fill="#FFB6C1" />
                
                <!-- Ears -->
                <path d="M25 28 L35 45 L45 35 Z" fill="#FFB6C1" />
                <path d="M75 28 L65 45 L55 35 Z" fill="#FFB6C1" />
                <path d="M28 30 L35 43 L42 36 Z" fill="#FFC0CB" />
                <path d="M72 30 L65 43 L58 36 Z" fill="#FFC0CB" />
                
                <!-- Eyes -->
                <ellipse cx="35" cy="50" rx="8" ry="9" fill="white" />
                <ellipse cx="65" cy="50" rx="8" ry="9" fill="white" />
                <ellipse cx="35" cy="50" rx="4" ry="6" fill="black" />
                <ellipse cx="65" cy="50" rx="4" ry="6" fill="black" />
                <ellipse cx="33" cy="47" rx="2" ry="2" fill="white" />
                <ellipse cx="63" cy="47" rx="2" ry="2" fill="white" />
                
                <!-- Muzzle -->
                <ellipse cx="50" cy="65" rx="15" ry="10" fill="#FFCCDA" />
                
                <!-- Nose -->
                <path d="M47 60 Q50 62 53 60 L50 63 Z" fill="#FF90B3" />
                
                <!-- Mouth -->
                <path d="M44 67 Q50 73 56 67" stroke="#FF69B4" stroke-width="1.5" fill="none" />
                
                <!-- Whiskers -->
                <line x1="42" y1="62" x2="28" y2="59" stroke="#FFE6EA" stroke-width="1.5" />
                <line x1="42" y1="65" x2="28" y2="66" stroke="#FFE6EA" stroke-width="1.5" />
                <line x1="58" y1="62" x2="72" y2="59" stroke="#FFE6EA" stroke-width="1.5" />
                <line x1="58" y1="65" x2="72" y2="66" stroke="#FFE6EA" stroke-width="1.5" />
                
                <!-- Student hat -->
                <path d="M25 25 L50 15 L75 25 L50 35 Z" fill="#444" />
                <rect x="46" y="15" width="8" height="10" fill="#444" />
                <rect x="44" y="5" width="12" height="5" fill="#444" />
                
                <!-- Small tooth model -->
                <path d="M40 84 Q45 80 50 84 L48 90 L42 90 Z" fill="white" stroke="#ccc" stroke-width="0.5" />
            </svg>`,
            messages: [
                "İyi gidiyorsun! Ben de seninle öğreniyorum! 📚",
                "Çalışmak güzel şey! %50'yi geçmişsin!",
                "Diş öğrencisi kediciğin de derslerine çalışıyor."
            ]
        }
    ];

    // Current pet state
    let state = {
        stage: 0,
        progress: 0,
        happiness: 100,
        lastInteraction: Date.now()
    };

    // Container element
    let container = null;

    // Check if device is mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Initialize pet
    function init(containerElement, progressPercentage) {
        container = containerElement;
        
        // Hide on mobile
        if (isMobile()) {
            container.style.display = 'none';
            return;
        } else {
            container.style.display = 'block';
        }
        
        // Load state if available
        loadState();
        
        // Update progress with current value
        updateProgress(progressPercentage);
        
        // Render initial pet
        render();
        
        // Set up decay timer for happiness
        setInterval(() => {
            if (Date.now() - state.lastInteraction > 3600000) { // 1 hour
                // Decrease happiness if no interaction
                state.happiness = Math.max(50, state.happiness - 1);
                saveState();
                render();
            }
        }, 300000); // Check every 5 minutes
        
        // Add resize listener to hide/show based on screen size
        window.addEventListener('resize', () => {
            if (isMobile()) {
                container.style.display = 'none';
            } else {
                container.style.display = 'block';
                render();
            }
        });
    }

    // Update progress and pet stage
    function updateProgress(progressPercentage) {
        state.progress = progressPercentage;
        
        // Determine appropriate stage based on progress
        let newStage = 0;
        for (let i = petStages.length - 1; i >= 0; i--) {
            if (progressPercentage >= petStages[i].minProgress) {
                newStage = i;
                break;
            }
        }
        
        // If stage changed, celebrate
        if (newStage > state.stage) {
            state.stage = newStage;
            celebrate(true);
        } else {
            state.stage = newStage;
        }
        
        // Happiness increases slightly with progress
        state.happiness = Math.min(100, state.happiness + 1);
        
        saveState();
        render();
    }

    // Interact with pet
    function interact() {
        if (isMobile()) return;
        
        // Increase happiness
        state.happiness = Math.min(100, state.happiness + 5);
        state.lastInteraction = Date.now();
        
        // Show random message
        const currentStage = petStages[state.stage];
        const randomMessage = currentStage.messages[Math.floor(Math.random() * currentStage.messages.length)];
        
        showPetMessage(randomMessage);
        
        // Visual feedback
        if (container) {
            container.classList.add('animate__animated', 'animate__rubberBand');
            setTimeout(() => {
                if (container) {
                    container.classList.remove('animate__animated', 'animate__rubberBand');
                }
            }, 1000);
        }
        
        saveState();
        render();
    }

    // Celebrate achievement
    function celebrate(stageUp = false) {
        if (isMobile()) return;
        
        state.happiness = 100;
        state.lastInteraction = Date.now();
        
        // Visual celebration
        if (container) {
            container.classList.add('animate__animated', 'animate__tada');
            setTimeout(() => {
                if (container) {
                    container.classList.remove('animate__animated', 'animate__tada');
                }
            }, 1500);
        }
        
        // Show celebration message
        if (stageUp && container) {
            const currentStage = petStages[state.stage];
            showPetMessage(`${currentStage.name} olarak seviye atladım! Tebrikler! 🎉`);
        } else if (container) {
            showPetMessage('Seninle gurur duyuyorum! 🎉');
        }
        
        saveState();
        render();
    }

    // Reset pet to initial state
    function reset() {
        if (isMobile()) return;
        
        state = {
            stage: 0,
            progress: 0,
            happiness: 100,
            lastInteraction: Date.now()
        };
        
        saveState();
        render();
        
        // Visual feedback
        if (container) {
            container.classList.add('animate__animated', 'animate__fadeOut');
            setTimeout(() => {
                if (container) {
                    container.classList.remove('animate__animated', 'animate__fadeOut');
                    container.classList.add('animate__animated', 'animate__fadeIn');
                    setTimeout(() => {
                        if (container) {
                            container.classList.remove('animate__animated', 'animate__fadeIn');
                        }
                    }, 1000);
                }
            }, 1000);
        }
    }

    // Render pet on screen
    function render() {
        if (!container || isMobile()) return;
        
        const currentStage = petStages[state.stage];
        
        // Create pet SVG with happiness effect
        const happinessScale = 0.9 + (state.happiness / 500); // 0.9 to 1.1 based on happiness
        
        container.innerHTML = `
            <div class="relative w-full h-full cursor-pointer" title="${currentStage.name}">
                <div class="absolute inset-0 transform-gpu scale-${Math.round(happinessScale * 100) / 100}">
                    ${currentStage.svg}
                </div>
                <div class="absolute -bottom-2 left-0 right-0 mx-auto w-3/4 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-green-300 to-green-500 rounded-full" style="width: ${state.happiness}%"></div>
                </div>
            </div>
        `;
        
        // Add some animation based on happiness
        const petElement = container.querySelector('.inset-0');
        if (petElement && state.happiness > 80) {
            petElement.classList.add('animate-bounce');
            setTimeout(() => {
                if (petElement) {
                    petElement.classList.remove('animate-bounce');
                }
            }, 1000);
        }
    }

    // Improved speech bubble with better visibility
    function showPetMessage(message) {
        if (!container || isMobile()) return;
        
        // Remove any existing bubbles first
        const existingBubbles = container.querySelectorAll('.pet-speech-bubble');
        existingBubbles.forEach(bubble => {
            if (container.contains(bubble)) {
                container.removeChild(bubble);
            }
        });
        
        // Create message bubble with improved styling
        const bubble = document.createElement('div');
        bubble.className = 'pet-speech-bubble absolute -top-20 left-0 right-0 mx-auto bg-white rounded-lg p-3 shadow-lg text-sm w-36 z-50 animate__animated animate__fadeIn border-2 border-pink-300';
        bubble.style.minHeight = '3rem';
        bubble.innerHTML = `
            <p class="text-center text-gray-800 font-medium">${message}</p>
            <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-white border-r-2 border-b-2 border-pink-300"></div>
        `;
        
        // Add to container
        container.appendChild(bubble);
        
        // Remove after a few seconds
        setTimeout(() => {
            if (bubble && container) {
                bubble.classList.replace('animate__fadeIn', 'animate__fadeOut');
                setTimeout(() => {
                    if (container && bubble && container.contains(bubble)) {
                        container.removeChild(bubble);
                    }
                }, 500);
            }
        }, 5000); // Extended time to 5 seconds for better readability
    }

    // Save state to localStorage
    function saveState() {
        try {
            localStorage.setItem('virtualPetState', JSON.stringify(state));
        } catch (e) {
            console.error('Failed to save pet state:', e);
        }
    }

    // Load state from localStorage
    function loadState() {
        try {
            const savedState = localStorage.getItem('virtualPetState');
            if (savedState) {
                state = JSON.parse(savedState);
            }
        } catch (e) {
            console.error('Failed to load pet state:', e);
            // Reset to default state
            state = {
                stage: 0,
                progress: 0,
                happiness: 100,
                lastInteraction: Date.now()
            };
        }
    }

    // Add CSS for the pet container (to be injected once)
    function injectStyles() {
        const styleEl = document.createElement('style');
        styleEl.textContent = `
            .pet-speech-bubble {
                opacity: 1 !important;
                pointer-events: none;
                animation-duration: 0.5s;
            }
            
            @media (max-width: 768px) {
                .pet-container {
                    display: none !important;
                }
            }
            
            /* Fix for animations */
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            
            .animate-bounce {
                animation: bounce 1s infinite;
            }
        `;
        document.head.appendChild(styleEl);
    }
    
    // Call this when the script loads
    injectStyles();

    // Expose public API
    window.VirtualPet = {
        init,
        updateProgress,
        interact,
        celebrate,
        reset
    };
})();