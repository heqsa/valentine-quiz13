// ==================== ВИКТОРИНА ====================

const questions = [
    {
        question: "Когда я полюбила тебя?",
        options: [
            { text: "Вчера", points: 5 },
            { text: "Ещё в прошлой жизни", points: 10 },
            { text: "Когда впервые встретились", points: 8 },
            { text: "В сентябре 2022 года", points: 7 }
        ]
    },
    {
        question: "Кто первый признался в чувствах?",
        options: [
            { text: "Масик", points: 10 },
            { text: "Лерик", points: 5 },
            { text: "Одновременно", points: 8 },
            { text: "Не помню...", points: 3 }
        ]
    },
    {
        question: "А кто первый влюбился?)",
        options: [
            { text: "ЛЕРИК", points: 10 },
            { text: "Лерик", points: 5 },
            { text: "Лерик)", points: 8 },
            { text: "Лерик...", points: 3 }
        ]
    },
    {
        question: "Какой мой любимый цвет?",
        options: [
            { text: "Коричневый", points: 8 },
            { text: "Черный", points: 5 },
            { text: "Розовый", points: 10 },
            { text: "Жёлтый", points: 3 }
        ]
    },
    {
        question: "Что я делаю, когда нервничаю?",
        options: [
            { text: "Чешусь", points: 8 },
            { text: "Кусаю губы/щёки", points: 5 },
            { text: "Кручу волосы", points: 10 },
            { text: "Болтаю ногами", points: 3 }
        ]
    },
    {
        question: "Как мы любим проводить время вместе?",
        options: [
            { text: "Валяться и смотреть ютуб", points: 8 },
            { text: "Пойти куда-то", points: 5 },
            { text: "Играть в компуктер", points: 10 },
            { text: "Готовить вместе", points: 3 }
        ]
    },
    {
        question: "Что я ценю в тебе больше всего?",
        options: [
            { text: "Чувство юмора", points: 7 },
            { text: "Заботу, внимание и понимание", points: 10 },
            { text: "Надежность и верность", points: 9 },
            { text: "Твою улыбку", points: 8 }
        ]
    },
    {
        question: "Что мне не нравится в тебе?",
        options: [
            { text: "Игнор", points: 8 },
            { text: "Пропадание без предупреждений", points: 5 },
            { text: "Невыполнение обещаний", points: 10 },
            { text: "Когда злишься и повышаешь голос", points: 3 }
        ]
    },
    {
        question: "Что мне нравится в тебе?",
        options: [
            { text: "Харизма", points: 8 },
            { text: "Внешность", points: 5 },
            { text: "ВСЁ", points: 10 },
            { text: "Тело", points: 3 }
        ]
    },
    {
        question: "Чего я бы хотела больше всего?",
        options: [
            { text: "Всегда быть вместе", points: 8 },
            { text: "На море с любимкой", points: 6 },
            { text: "Чтобы ты приехал ко мне", points: 9 },
            { text: "Выйти за тебя замуж", points: 10 }
        ]
    }
];

// ==================== БОНУС ====================

const compliments = [
    "За твою улыбку, которая делает мой день светлее",
    "За то, что ты всегда меня поддерживаешь",
    "За твоё чувство юмора - с тобой никогда не скучно",
    "За твои заботливые руки, которые всегда готовы обнять",
    "За то, что ты слушаешь и понимаешь меня",
    "За твою честность и открытость",
    "За то, как ты заботишься обо мне",
    "За твою уверенность в себе",
    "За наши общие мечты и планы",
    "За то, что ты делаешь меня лучше",
    "За твои умные и добрые глаза",
    "За наше взаимопонимание без слов",
    "За то, что ты всегда находишь время для меня",
    "За твою романтичность",
    "За то, что ты мой самый близкий человек",
    "За твоё терпение",
    "За то, что ты веришь в меня",
    "За наши совместные воспоминания",
    "За то, что ты мой лучший друг",
    "За то, что ты просто существуешь в моей жизни"
];

// ==================== ПЕРЕМЕННЫЕ ====================

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let foundHearts = 0;
let userAnswers = []; // Массив для хранения ответов пользователя
let scoreHistory = []; // Массив для хранения истории начисления очков

// ==================== ЭЛЕМЕНТЫ ====================

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const bonusScreen = document.getElementById('bonus-screen');

const startBtn = document.getElementById('start-btn');
const bonusBtn = document.getElementById('bonus-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn'); // Кнопка "Назад"
const restartBtn = document.getElementById('restart-btn');
const toStartBtn = document.getElementById('to-start-btn');
const toBonusBtn = document.getElementById('to-bonus-btn');
const backToStart = document.getElementById('back-to-start');
const backToQuiz = document.getElementById('back-to-quiz');

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');
const progressElement = document.getElementById('progress');
const finalScoreElement = document.getElementById('final-score');
const resultMessageElement = document.getElementById('result-message');
const giftElement = document.getElementById('gift');

const heartsContainer = document.getElementById('heartsContainer');
const foundHeartsElement = document.getElementById('found-hearts');
const totalHeartsElement = document.getElementById('total-hearts');

// ==================== ВИКТОРИНА ====================

startBtn.addEventListener('click', () => {
    switchScreen(startScreen, quizScreen);
    loadQuestion();
});

bonusBtn.addEventListener('click', () => {
    switchScreen(startScreen, bonusScreen);
    createBonusHearts();
});

function switchScreen(from, to) {
    from.classList.remove('active');
    to.classList.add('active');
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = option.text;
        button.addEventListener('click', () => selectOption(button, option.points, index));
        optionsElement.appendChild(button);
    });
    
    // Восстанавливаем выбор пользователя, если он уже отвечал на этот вопрос
    if (userAnswers[currentQuestionIndex] !== undefined) {
        const buttons = document.querySelectorAll('.option-btn');
        const previousAnswer = userAnswers[currentQuestionIndex];
        buttons[previousAnswer.index].classList.add('selected');
        selectedOption = previousAnswer;
    } else {
        selectedOption = null;
    }
    
    progressElement.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    
    // Обновляем кнопки навигации
    updateNavigationButtons();
}

function selectOption(button, points, index) {
    // Если уже есть выбранный ответ, убираем его стиль
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Добавляем стиль к новому выбранному ответу
    button.classList.add('selected');
    selectedOption = { points, index };
    
    // Сохраняем ответ пользователя
    userAnswers[currentQuestionIndex] = { points, index };
    
    // Обновляем кнопки навигации
    updateNavigationButtons();
}

function updateNavigationButtons() {
    // На первом вопросе скрываем кнопку "Назад"
    if (currentQuestionIndex === 0) {
        prevBtn.style.display = 'none';
        // Центрируем кнопку "Далее", если кнопки "Назад" нет
        nextBtn.style.marginLeft = 'auto';
        nextBtn.style.marginRight = 'auto';
    } else {
        prevBtn.style.display = 'flex';
        // Возвращаем обычное расположение
        nextBtn.style.marginLeft = '';
        nextBtn.style.marginRight = '';
    }
    
    // Кнопка "Далее" активна, если выбран ответ
    nextBtn.disabled = selectedOption === null;
    
    // Меняем текст кнопки "Далее" на последнем вопросе
    nextBtn.innerHTML = currentQuestionIndex === questions.length - 1 
        ? '<i class="fas fa-flag-checkered"></i> Завершить' 
        : '<i class="fas fa-arrow-right"></i> Далее';
}

nextBtn.addEventListener('click', () => {
    if (selectedOption !== null) {
        // Получаем текущий ответ
        const currentAnswer = userAnswers[currentQuestionIndex];
        
        // Проверяем, были ли уже начислены очки за этот вопрос
        if (scoreHistory[currentQuestionIndex] === undefined) {
            // Очки еще не начислялись - добавляем их
            score += currentAnswer.points;
            scoreHistory[currentQuestionIndex] = currentAnswer.points;
        } else {
            // Очки уже были начислены - это значит, что пользователь вернулся назад и изменил ответ
            // Вычитаем старые очки и добавляем новые
            score = score - scoreHistory[currentQuestionIndex] + currentAnswer.points;
            scoreHistory[currentQuestionIndex] = currentAnswer.points;
        }
        
        // Обновляем отображение счета
        scoreElement.textContent = score;
        
        // Переходим к следующему вопросу
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
});

prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        // Переходим к предыдущему вопросу
        currentQuestionIndex--;
        loadQuestion();
    }
});

function showResult() {
    switchScreen(quizScreen, resultScreen);
    
    const maxScore = 100;
    const percentage = (score / maxScore) * 100;
    finalScoreElement.textContent = score;
    
    let messageIndex, giftIndex;
    
    if (percentage < 40) {
        messageIndex = 0; giftIndex = 0;
    } else if (percentage < 60) {
        messageIndex = 1; giftIndex = 1;
    } else if (percentage < 80) {
        messageIndex = 2; giftIndex = 2;
    } else if (percentage < 95) {
        messageIndex = 3; giftIndex = 3;
    } else {
        messageIndex = 4; giftIndex = 4;
    }
    
    const messages = [
        "Ой... Кажется, ты не знаешь меня! Но я люблю тебя все равно! 💕",
        "Неплохо! Ты кое-что помнишь! За остальное я тебя прощаю! 😉",
        "Отлично! Ты действительно внимателен ко мне! 💖",
        "Вау! Ты знаешь меня почти идеально! 💘",
        "ИДЕАЛЬНО! Ты знаешь абсолютно всё! 💞"
    ];
    
    const gifts = [
        "Мои объятия и поцелуй 😘",
        "Романтический ужин 🕯️",
        "Свидание в компьютерном клубе 🎮",
        "Свидание на катке ⛸️",
        "Сюрприз, о котором ты уже знаешь! 🎁"
    ];
    
    resultMessageElement.textContent = messages[messageIndex];
    giftElement.textContent = gifts[giftIndex];
}

restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    userAnswers = [];
    scoreHistory = [];
    scoreElement.textContent = '0';
    switchScreen(resultScreen, quizScreen);
    loadQuestion();
});

toStartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    userAnswers = [];
    scoreHistory = [];
    scoreElement.textContent = '0';
    switchScreen(resultScreen, startScreen);
});

toBonusBtn.addEventListener('click', () => {
    switchScreen(resultScreen, bonusScreen);
    createBonusHearts();
});

backToStart.addEventListener('click', () => {
    switchScreen(bonusScreen, startScreen);
});

backToQuiz.addEventListener('click', () => {
    switchScreen(bonusScreen, quizScreen);
    loadQuestion();
});

// ==================== БОНУС ====================

function createBonusHearts() {
    heartsContainer.innerHTML = '';
    foundHearts = 0;
    foundHeartsElement.textContent = foundHearts;
    totalHeartsElement.textContent = compliments.length;
    
    compliments.forEach((compliment, index) => {
        const heart = document.createElement('div');
        heart.className = 'interactive-heart';
        heart.innerHTML = '❤️';
        heart.dataset.compliment = compliment;
        heart.dataset.index = index;
        
        const x = Math.random() * 85 + 5;
        const y = Math.random() * 85 + 5;
        const size = Math.random() * 20 + 30;
        const rotation = Math.random() * 30 - 15;
        
        heart.style.left = `${x}%`;
        heart.style.top = `${y}%`;
        heart.style.fontSize = `${size}px`;
        heart.style.transform = `rotate(${rotation}deg)`;
        
        heartsContainer.appendChild(heart);
        
        heart.addEventListener('click', function() {
            if (this.classList.contains('collected')) return;
            
            this.classList.add('collected');
            this.style.transition = 'all 0.5s ease';
            this.style.transform = `rotate(${rotation}deg) scale(0)`;
            this.style.opacity = '0';
            
            foundHearts++;
            foundHeartsElement.textContent = foundHearts;
            
            showHeartPopup(compliment);
            
            if (foundHearts >= compliments.length) {
                setTimeout(() => {
                    showAllHeartsCollectedMessage();
                }, 1000);
            }
        });
    });
}

function showHeartPopup(compliment) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 20px;
    `;
    
    const popupContent = document.createElement('div');
    popupContent.style.cssText = `
        background: linear-gradient(135deg, #fff0f3, #ffe4ec);
        border-radius: 25px;
        padding: 30px;
        max-width: 450px;
        width: 100%;
        text-align: center;
        box-shadow: 0 15px 35px rgba(255, 77, 109, 0.3);
        border: 3px solid #ff4d6d;
        position: relative;
        transform: scale(0.9);
        transition: transform 0.3s ease;
    `;
    
    popupContent.innerHTML = `
        <div style="font-size: 50px; color: #ff4d6d; margin-bottom: 20px; animation: heartbeat 1.5s infinite;">
            💖
        </div>
        <h2 style="color: #ff4d6d; margin-bottom: 15px; font-size: 1.8rem;">
            Найдено сердечко!
        </h2>
        <div style="
            background: white;
            padding: 20px;
            border-radius: 15px;
            margin: 20px 0;
            border-left: 5px solid #ff4d6d;
            font-size: 1.2rem;
            color: #590d22;
            line-height: 1.6;
            min-height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
        ">
            "${compliment}"
        </div>
        <div style="
            background: #ff4d6d;
            color: white;
            padding: 12px 25px;
            border-radius: 50px;
            display: inline-block;
            font-size: 1.1rem;
            font-weight: bold;
            margin-top: 10px;
            box-shadow: 0 4px 10px rgba(255, 77, 109, 0.4);
        ">
            Найдено сердечек: ${foundHearts} из ${compliments.length}
        </div>
        <button id="close-popup-btn" style="
            margin-top: 25px;
            background: transparent;
            border: 2px solid #ff4d6d;
            color: #ff4d6d;
            padding: 12px 35px;
            font-size: 1.1rem;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: bold;
        ">
            Продолжить
        </button>
    `;
    
    overlay.appendChild(popupContent);
    document.body.appendChild(overlay);
    
    setTimeout(() => {
        overlay.style.opacity = '1';
        popupContent.style.transform = 'scale(1)';
    }, 10);
    
    const closeBtn = popupContent.querySelector('#close-popup-btn');
    closeBtn.addEventListener('click', closePopup);
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closePopup();
        }
    });
    
    function handleEscape(e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    }
    document.addEventListener('keydown', handleEscape);
    
    function closePopup() {
        overlay.style.opacity = '0';
        popupContent.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
                document.removeEventListener('keydown', handleEscape);
            }
        }, 300);
    }
    
    setTimeout(() => {
        closeBtn.focus();
    }, 100);
}

function showAllHeartsCollectedMessage() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.zIndex = '10000';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'flex-start';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.5s ease';
    overlay.style.padding = '20px';
    overlay.style.overflowY = 'auto';
    overlay.style.WebkitOverflowScrolling = 'touch';
    
    const messageContent = document.createElement('div');
    messageContent.style.backgroundColor = '#fff0f3';
    messageContent.style.padding = '30px 20px';
    messageContent.style.borderRadius = '25px';
    messageContent.style.textAlign = 'center';
    messageContent.style.maxWidth = '600px';
    messageContent.style.width = '100%';
    messageContent.style.boxShadow = '0 15px 35px rgba(255, 77, 109, 0.3)';
    messageContent.style.border = '3px solid #ff4d6d';
    messageContent.style.transform = 'scale(0.8)';
    messageContent.style.transition = 'transform 0.5s ease';
    messageContent.style.margin = '20px auto';
    messageContent.style.boxSizing = 'border-box';
    
    messageContent.innerHTML = `
        <div style="font-size: 50px; color: #ff4d6d; margin-bottom: 15px; animation: heartbeat 1.5s infinite;">
            💝🎉💝
        </div>
        <h2 style="color: #ff4d6d; margin-bottom: 15px; font-size: 1.8rem; line-height: 1.3;">
            Поздравляю, любовь моя! 💖
        </h2>
        <p style="font-size: 1.2rem; color: #800f2f; margin-bottom: 15px; line-height: 1.4;">
            Ты собрал все ${compliments.length} причин моей любви к тебе!
        </p>
        <div style="background: #fff; padding: 15px; border-radius: 15px; margin: 15px 0; border-left: 5px solid #ff4d6d;">
            <p style="font-size: 1.1rem; color: #590d22; font-style: italic; line-height: 1.4;">
                "За каждым сердечком скрывалась ещё одна причина, почему ты - самый лучший человек в моей жизни. 
                Я люблю тебя больше, чем все эти сердечки вместе взятые! 💕"
            </p>
        </div>
        <p style="font-size: 1rem; color: #590d22; margin-bottom: 20px; line-height: 1.4;">
            Спасибо, что ты есть в моей жизни!<br>
            Я бесконечно благодарна за каждый день с тобой! 💘
        </p>
        <button id="close-message-btn" style="
            background: linear-gradient(135deg, #ff4d6d, #ff758f);
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 1.1rem;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(255, 77, 109, 0.4);
            margin-top: 10px;
            width: 100%;
            max-width: 300px;
            outline: none; /* Убираем стандартный outline */
        ">
            💖 Спасибо, зай! 💖
        </button>
        
        <style>
            @keyframes heartbeat {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
            #close-message-btn:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 20px rgba(255, 77, 109, 0.6);
                background: linear-gradient(135deg, #ff758f, #ff4d6d);
            }
            
            /* Стиль для фокуса (вместо стандартного outline) */
            #close-message-btn:focus {
                outline: none;
                box-shadow: 0 0 0 3px rgba(255, 77, 109, 0.4), 0 5px 15px rgba(255, 77, 109, 0.4);
            }
            
            /* Медиа-запросы для мобильных устройств */
            @media (max-width: 768px) {
                #close-message-btn {
                    padding: 12px 25px;
                    font-size: 1rem;
                    position: sticky;
                    bottom: 10px;
                }
                
                /* Чтобы контент не выходил за пределы экрана */
                .popup-content-mobile {
                    max-height: 85vh;
                    overflow-y: auto;
                    -webkit-overflow-scrolling: touch;
                }
            }
        </style>
    `;
    
    // Добавляем класс для мобильной адаптации
    messageContent.classList.add('popup-content-mobile');
    
    overlay.appendChild(messageContent);
    document.body.appendChild(overlay);
    
    // Блокируем прокрутку страницы под оверлеем
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        overlay.style.opacity = '1';
        messageContent.style.transform = 'scale(1)';
    }, 100);
    
    const closeBtn = messageContent.querySelector('#close-message-btn');
    
    // Убираем стандартный outline при фокусе
    closeBtn.addEventListener('focus', function() {
        this.style.outline = 'none';
    });
    
    closeBtn.addEventListener('click', () => {
        overlay.style.opacity = '0';
        messageContent.style.transform = 'scale(0.8)';
        setTimeout(() => {
            document.body.removeChild(overlay);
            // Разблокируем прокрутку страницы
            document.body.style.overflow = '';
        }, 500);
    });
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.opacity = '0';
            messageContent.style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.body.removeChild(overlay);
                // Разблокируем прокрутку страницы
                document.body.style.overflow = '';
            }, 500);
        }
    });
    
    // Также закрытие по клавише Escape
    function handleEscape(e) {
        if (e.key === 'Escape') {
            overlay.style.opacity = '0';
            messageContent.style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.body.removeChild(overlay);
                document.removeEventListener('keydown', handleEscape);
                // Разблокируем прокрутку страницы
                document.body.style.overflow = '';
            }, 500);
        }
    }
    document.addEventListener('keydown', handleEscape);
    
    // Фокус на кнопке для доступности (но без outline)
    setTimeout(() => {
        closeBtn.focus();
        // Добавляем красивый фокус-стиль
        closeBtn.style.boxShadow = '0 0 0 3px rgba(255, 77, 109, 0.4), 0 5px 15px rgba(255, 77, 109, 0.4)';
        
        // Через секунду убираем фокус-стиль
        setTimeout(() => {
            closeBtn.style.boxShadow = '0 5px 15px rgba(255, 77, 109, 0.4)';
        }, 1000);
    }, 100);
    
    // Убираем фокус при клике в другое место
    overlay.addEventListener('click', function(e) {
        if (e.target !== closeBtn) {
            closeBtn.style.boxShadow = '0 5px 15px rgba(255, 77, 109, 0.4)';
        }
    });
}

// ==================== ФОН ====================

function createBackgroundHearts() {
    const container = document.querySelector('.hearts-background');
    const hearts = ['❤️', '💖', '💕', '💘', '💓', '💗', '💞'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.opacity = Math.random() * 0.3 + 0.2;
        heart.style.zIndex = '1';
        heart.style.pointerEvents = 'none';
        heart.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        heart.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(heart);
    }
}

// ==================== ЗАГРУЗКА ====================

window.addEventListener('load', () => {
    console.log('Викторина загружена!');
    createBackgroundHearts();
});