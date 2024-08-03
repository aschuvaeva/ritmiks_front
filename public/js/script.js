function setupQuestions() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        const plus = question.querySelector('.plus');
        const answer = question.nextElementSibling;
        answer.classList.add('answer');

        plus.addEventListener('click', () => {
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                plus.innerText = '+';
            } else {
                answer.style.display = 'block';
                plus.innerText = '-';
            }
        });
    });
}

setupQuestions();


function setupQuestionInfo() {
    const questionInfoElements = document.querySelectorAll(".question_info");

    questionInfoElements.forEach(function(questionInfo) {
        questionInfo.addEventListener("click", function() {
            const answerInfo = questionInfo.nextElementSibling;
            
            if (answerInfo.style.display === "none" || answerInfo.style.display === "") {
                answerInfo.style.display = "block";
            } else {
                answerInfo.style.display = "none";
            }
        });
    });
}

setupQuestionInfo();



function openVideo() {
    document.getElementById("videoModal").style.display = "block";
}

function closeVideo() {
    document.getElementById("videoModal").style.display = "none";
}

function setupNewsButtons() {
    const buttons = document.querySelectorAll('.but_news');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Получение категории карточки
        const category = this.getAttribute('data-category');
    
        // Скрытие всех карточек
        const news = document.querySelectorAll('.new');
        news.forEach(newItem => {
            newItem.style.display = 'none';
        });
    
        // Получение карточек нужной категории
        const newsByCategory = document.querySelectorAll(`.new[data-categories*="${category}"]`);
    
        // Показ карточек нужной категории
        newsByCategory.forEach(newItem => {
            newItem.style.display = 'block';
    
        buttons.forEach(btn => {
          btn.classList.remove('active');
        });
    
        // Добавление класса "active" к нажатой кнопке
        this.classList.add('active');
        });
      });
    });
}

setupNewsButtons()

const activeAnimations = {};

function animateNumbers() {
    const numbers = document.querySelectorAll('.number_name');

    numbers.forEach((numElement) => {
        const id = numElement.id;
        const finalNumber = parseInt(numElement.dataset.finalNumber); // Получаем число из data-атрибута

        if (activeAnimations[id]) {
            clearInterval(activeAnimations[id]);
            activeAnimations[id] = false;
        }

        let currentNumber = 0;
        activeAnimations[id] = true;

        const interval = setInterval(() => {
            currentNumber++;
            numElement.innerText = currentNumber;
            if (currentNumber === finalNumber) {
                clearInterval(interval);
                activeAnimations[id] = false;
            }
        }, 50); // Скорость анимации (50 миллисекунд)
    });
}

animateNumbers()


function setupModal(modalId, openButtonId, closeButtonClass) {
    const openModalButton = document.getElementById(openButtonId);
    const modal = document.getElementById(modalId);
    const closeButton = modal.querySelector(closeButtonClass);

    modal.style.display = 'block';


    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}

function setupResButtons() {
    const buttons = document.querySelectorAll('.but_res');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Получение категории карточки
        const category = this.getAttribute('filt');
    
        // Скрытие всех карточек
        const news = document.querySelectorAll('.year');
        news.forEach(newItem => {
            newItem.style.display = 'none';
        });
    
        // Получение карточек нужной категории
        const newsByCategory = document.querySelectorAll(`.year[filtres*="${category}"]`);
    
        // Показ карточек нужной категории
        newsByCategory.forEach(newItem => {
            newItem.style.display = 'block';
    
        buttons.forEach(btn => {
          btn.classList.remove('active');
        });
    
        // Добавление класса "active" к нажатой кнопке
        this.classList.add('active');
        animateNumbers();

        });
      });
    });

    // Вызов обработчика события нажатия для второй кнопки при загрузке страницы
    buttons[1].click();
}

setupResButtons();
