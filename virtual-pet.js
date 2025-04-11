/**
 * Virtual Dental Cat Pet for DUS Hazırlık
 * A cute companion that grows as the student progresses
 */

(function() {
    // Pet stages based on progress percentage
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
            minProgress: 25,
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
                "Çalışmak güzel şey! %25'i geçmişsin!",
                "Diş öğrencisi kediciğin de derslerine çalışıyor."
            ]
        },
        {
            name: "Diş Asistanı Kediciğin",
            minProgress: 50,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <!-- Body -->
                <circle cx="50" cy="55" r="38" fill="#FFB6C1" />
                
                <!-- Ears -->
                <path d="M25 25 L35 45 L45 35 Z" fill="#FFB6C1" />
                <path d="M75 25 L65 45 L55 35 Z" fill="#FFB6C1" />
                <path d="M28 28 L35 43 L42 36 Z" fill="#FFC0CB" />
                <path d="M72 28 L65 43 L58 36 Z" fill="#FFC0CB" />
                
                <!-- Eyes -->
                <ellipse cx="35" cy="50" rx="8" ry="9" fill="white" />
                <ellipse cx="65" cy="50" rx="8" ry="9" fill="white" />
                <ellipse cx="35" cy="50" rx="4" ry="5" fill="black" />
                <ellipse cx="65" cy="50" rx="4" ry="5" fill="black" />
                <ellipse cx="33" cy="47" rx="2" ry="2" fill="white" />
                <ellipse cx="63" cy="47" rx="2" ry="2" fill="white" />
                
                <!-- Muzzle -->
                <ellipse cx="50" cy="65" rx="16" ry="11" fill="#FFCCDA" />
                
                <!-- Nose -->
                <path d="M47 60 Q50 62 53 60 L50 63 Z" fill="#FF90B3" />
                
                <!-- Mouth -->
                <path d="M44 67 Q50 74 56 67" stroke="#FF69B4" stroke-width="1.5" fill="none" />
                
                <!-- Whiskers -->
                <line x1="41" y1="62" x2="25" y2="58" stroke="#FFE6EA" stroke-width="1.5" />
                <line x1="41" y1="65" x2="25" y2="67" stroke="#FFE6EA" stroke-width="1.5" />
                <line x1="59" y1="62" x2="75" y2="58" stroke="#FFE6EA" stroke-width="1.5" />
                <line x1="59" y1="65" x2="75" y2="67" stroke="#FFE6EA" stroke-width="1.5" />
                
                <!-- Dental mask -->
                <path d="M30 60 Q50 75 70 60" stroke="#fff" stroke-width="1" fill="#fff" fill-opacity="0.5" />
                <path d="M30 60 L30 50 L70 50 L70 60" stroke="#fff" stroke-width="1" fill="#fff" fill-opacity="0.5" />
                <path d="M35 55 L40 55" stroke="#FF90B3" stroke-width="1.5" />
                <path d="M60 55 L65 55" stroke="#FF90B3" stroke-width="1.5" />
                
                <!-- Dental tools -->
                <path d="M35 80 L45 75" stroke="#999" stroke-width="1" />
                <circle cx="48" cy="73" r="2" fill="#FF90B3" />
                <path d="M65 80 L55 75" stroke="#999" stroke-width="1" />
                <circle cx="52" cy="73" r="2" fill="#00BFFF" />
            </svg>`,
            messages: [
                "Süper ilerleme kaydediyorsun! Yarılamışsın! 🎓",
                "Bu konuları ben de senin kadar iyi biliyorum artık!",
                "Diş asistanı kediciğin sana yardıma hazır!"
            ]
        },
        {
            name: "Diş Hekimi Kediciğin",
            minProgress: 75,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <!-- Body -->
                <circle cx="50" cy="55" r="40" fill="#FFB6C1" />
                
                <!-- Ears -->
                <path d="M23 25 L35 45 L45 35 Z" fill="#FFB6C1" />
                <path d="M77 25 L65 45 L55 35 Z" fill="#FFB6C1" />
                <path d="M26 28 L35 43 L42 36 Z" fill="#FFC0CB" />
                <path d="M74 28 L65 43 L58 36 Z" fill="#FFC0CB" />
                
                <!-- Eyes -->
                <ellipse cx="35" cy="50" rx="8" ry="8" fill="white" />
                <ellipse cx="65" cy="50" rx="8" ry="8" fill="white" />
                <ellipse cx="35" cy="50" rx="4" ry="4" fill="black" />
                <ellipse cx="65" cy="50" rx="4" ry="4" fill="black" />
                <ellipse cx="33" cy="47" rx="2" ry="2" fill="white" />
                <ellipse cx="63" cy="47" rx="2" ry="2" fill="white" />
                
                <!-- Muzzle -->
                <ellipse cx="50" cy="65" rx="18" ry="12" fill="#FFCCDA" />
                
                <!-- Nose -->
                <path d="M47 60 Q50 62 53 60 L50 63 Z" fill="#FF90B3" />
                
                <!-- Mouth -->
                <path d="M42 68 Q50 75 58 68" stroke="#FF69B4" stroke-width="2" fill="none" />
                
                <!-- Whiskers -->
                <line x1="40" y1="62" x2="22" y2="57" stroke="#FFE6EA" stroke-width="2" />
                <line x1="40" y1="65" x2="22" y2="68" stroke="#FFE6EA" stroke-width="2" />
                <line x1="60" y1="62" x2="78" y2="57" stroke="#FFE6EA" stroke-width="2" />
                <line x1="60" y1="65" x2="78" y2="68" stroke="#FFE6EA" stroke-width="2" />
                
                <!-- Dentist coat -->
                <path d="M20 60 L20 90 L45 80 L55 80 L80 90 L80 60" fill="white" />
                
                <!-- Dentist headband with tooth -->
                <path d="M30 30 L70 30" stroke="white" stroke-width="5" />
                <path d="M45 25 Q50 20 55 25 L53 34 L47 34 Z" fill="white" stroke="#FFCCDA" stroke-width="0.5" />
                
                <!-- Dental explorer tool -->
                <path d="M25 82 L30 75 L40 85" stroke="#888" stroke-width="1.5" fill="none" />
                <circle cx="25" cy="82" r="2" fill="#ccc" />
            </svg>`,
            messages: [
                "Harikasın! Son aşamaya gelmişiz! 🦷",
                "Diş hekimi olma yolunda çok iyi ilerliyorsun!",
                "Diş hekimi kediciğin de seninle gurur duyuyor!"
            ]
        },
        {
            name: "Uzman Diş Hekimi Kediciğin",
            minProgress: 95,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <!-- Body -->
                <circle cx="50" cy="55" r="42" fill="#FFB6C1" />
                
                <!-- Ears -->
                <path d="M22 22 L35 45 L45 35 Z" fill="#FFB6C1" />
                <path d="M78 22 L65 45 L55 35 Z" fill="#FFB6C1" />
                <path d="M25 25 L35 43 L42 36 Z" fill="#FFC0CB" />
                <path d="M75 25 L65 43 L58 36 Z" fill="#FFC0CB" />
                
                <!-- Eyes -->
                <ellipse cx="35" cy="50" rx="8" ry="7" fill="white" />
                <ellipse cx="65" cy="50" rx="8" ry="7" fill="white" />
                <ellipse cx="35" cy="50" rx="3.5" ry="3.5" fill="black" />
                <ellipse cx="65" cy="50" rx="3.5" ry="3.5" fill="black" />
                <ellipse cx="33" cy="48" rx="1.5" ry="1.5" fill="white" />
                <ellipse cx="63" cy="48" rx="1.5" ry="1.5" fill="white" />
                
                <!-- Glasses -->
                <circle cx="35" cy="50" r="10" fill="none" stroke="#444" stroke-width="1.5" />
                <circle cx="65" cy="50" r="10" fill="none" stroke="#444" stroke-width="1.5" />
                <line x1="45" y1="50" x2="55" y2="50" stroke="#444" stroke-width="1.5" />
                
                <!-- Muzzle -->
                <ellipse cx="50" cy="65" rx="20" ry="13" fill="#FFCCDA" />
                
                <!-- Nose -->
                <path d="M47 60 Q50 62 53 60 L50 63 Z" fill="#FF90B3" />
                
                <!-- Smile -->
                <path d="M40 68 Q50 78 60 68" stroke="#FF69B4" stroke-width="2" fill="none" />
                
                <!-- Whiskers -->
                <line x1="40" y1="62" x2="20" y2="56" stroke="#FFE6EA" stroke-width="2" />
                <line x1="40" y1="66" x2="20" y2="70" stroke="#FFE6EA" stroke-width="2" />
                <line x1="60" y1="62" x2="80" y2="56" stroke="#FFE6EA" stroke-width="2" />
                <line x1="60" y1="66" x2="80" y2="70" stroke="#FFE6EA" stroke-width="2" />
                
                <!-- Dentist coat -->
                <path d="M15 65 L15 95 L45 85 L55 85 L85 95 L85 65" fill="white" />
                <circle cx="30" cy="75" r="3" fill="#FF90B3" />
                <circle cx="40" cy="75" r="3" fill="#00BFFF" />
                <circle cx="60" cy="75" r="3" fill="#FF90B3" />
                <circle cx="70" cy="75" r="3" fill="#00BFFF" />
                
                <!-- Expert dentist hat with tooth emblem -->
                <path d="M25 30 L50 15 L75 30" stroke="#444" stroke-width="2" fill="#444" />
                <rect x="25" y="30" width="50" height="5" fill="#444" />
                <path d="M45 15 Q50 10 55 15 L53 25 L47 25 Z" fill="white" stroke="#ccc" stroke-width="0.5" />
                
                <!-- Dental tools -->
                <path d="M30 92 Q20 75 35 85" stroke="#888" stroke-width="1.5" fill="none" />
                <path d="M35 85 Q50 95 65 85" stroke="#888" stroke-width="1.5" fill="none" />
                <circle cx="70" cy="92" r="4" fill="#ccc" />
                <circle cx="67" cy="89" r="1" fill="#FF90B3" />
            </svg>`,
            messages: [
                "Tebrikler! Neredeyse tamamladın! 🎉",
                "Uzman diş hekimi oldun! Artık herşeyi biliyorsun!",
                "Seninle gurur duyuyorum! Sonuna çok az kaldı!"
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

    // Initialize pet
    function init(containerElement, progressPercentage) {
        container = containerElement;
        
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
        // Increase happiness
        state.happiness = Math.min(100, state.happiness + 5);
        state.lastInteraction = Date.now();
        
        // Show random message
        const currentStage = petStages[state.stage];
        const randomMessage = currentStage.messages[Math.floor(Math.random() * currentStage.messages.length)];
        
        showPetMessage(randomMessage);
        
        // Visual feedback - added null check
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
        state.happiness = 100;
        state.lastInteraction = Date.now();
        
        // Visual celebration - added null check
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
            
            // Try to play celebration sound
            try {
                const audio = new Audio("data:audio/mp3;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTguMTYuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
                audio.play();
            } catch (e) {
                console.error("Could not play celebration sound", e);
            }
        } else if (container) {
            showPetMessage('Seninle gurur duyuyorum! 🎉');
        }
        
        saveState();
        render();
    }

    // Reset pet to initial state
    function reset() {
        state = {
            stage: 0,
            progress: 0,
            happiness: 100,
            lastInteraction: Date.now()
        };
        
        saveState();
        render();
        
        // Visual feedback - added null check
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
        if (!container) return;
        
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

    // Show pet message bubble
    function showPetMessage(message) {
        if (!container) return;
        
        // Create message bubble
        const bubble = document.createElement('div');
        bubble.className = 'absolute -top-16 -right-4 bg-white rounded-lg p-2 shadow-md text-xs w-28 animate__animated animate__fadeIn';
        bubble.innerHTML = `
            <p class="text-center">${message}</p>
            <div class="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
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
        }, 3000);
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

    // Expose public API
    window.VirtualPet = {
        init,
        updateProgress,
        interact,
        celebrate,
        reset
    };
})();