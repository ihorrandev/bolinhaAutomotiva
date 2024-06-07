document.addEventListener("DOMContentLoaded", function () {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.querySelector('.bodyContentGeneral');

    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        mainContent.style.display = 'flex';
    }, 3000); 

    splashScreen.addEventListener('transitionend', () => {
        splashScreen.style.display = 'none';
    });
});

const textContent = {
    interative1: "Na Automotiva Mecânica do Bolinha, oferecemos serviços de alta qualidade para seu veículo, garantindo segurança e desempenho.",
    interative2: "Nossa equipe experiente utiliza as melhores peças e equipamentos para cuidar do seu carro com precisão e eficiência.",
    interative3: "Com uma taxa de aprovação de aproximadamente 98% entre nossos clientes, orgulhamo-nos de proporcionar experiências automotivas que superam expectativas e geram confiança.",
    interative4: "Na Automotiva Mecânica do Bolinha, a satisfação dos nossos clientes é nossa prioridade. Garantimos serviços de qualidade que superam suas expectativas."
};

document.querySelectorAll('.img-interative-img').forEach(element => {
    element.addEventListener('mouseenter', function () {
        const overlay = document.createElement('div');
        const id = element.id;

        overlay.className = 'overlay';

        const textElement = document.createElement('div');
        textElement.textContent = textContent[id];
        textElement.className = 'hover-text';

        const linkElement = document.createElement('a');
        linkElement.href = 'https://api.whatsapp.com/send/?phone=5511985139848&text&type=phone_number&app_absent=0';
        linkElement.target = '_blank';
        linkElement.className = 'hover-button-link';

        const buttonElement = document.createElement('button');
        buttonElement.textContent = "Contate-nos";
        buttonElement.className = 'hover-button';

        linkElement.appendChild(buttonElement);
        overlay.appendChild(textElement);
        overlay.appendChild(linkElement);
        element.appendChild(overlay);
    });

    element.addEventListener('mouseleave', function () {
        const overlay = element.querySelector('.overlay');
        if (overlay) {
            element.removeChild(overlay);
        }
    });
});


const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const answer = question.querySelector('.answer');

    question.addEventListener('click', () => {
        answer.classList.toggle('visible');

        questions.forEach((otherQuestion) => {
            if (otherQuestion !== question) {
                otherQuestion.querySelector('.answer').classList.remove('visible');
            }
        });
    });
});

function startCarousel() {
    const carrossel = document.getElementById('carrossel');
    const items = carrossel.querySelectorAll('.carrossel-item');
    const totalItems = items.length;
    let currentItem = 0;

    const bolinhasContainer = document.getElementById('bolinhas');
    for (let i = 0; i < totalItems; i++) {
        const bolinha = document.createElement('span');
        bolinha.classList.add('bolinha');
        bolinhasContainer.appendChild(bolinha);
    }

    const bolinhas = bolinhasContainer.querySelectorAll('.bolinha');

    function showNextItem() {
        items[currentItem].classList.remove('visible');
        bolinhas[currentItem].classList.remove('active');
        currentItem = (currentItem + 1) % totalItems;
        items[currentItem].classList.add('visible');
        bolinhas[currentItem].classList.add('active');
    }

    items[currentItem].classList.add('visible');
    bolinhas[currentItem].classList.add('active');

    setInterval(showNextItem, 10000);

    bolinhas.forEach((bolinha, index) => {
        bolinha.addEventListener('click', () => {
            items[currentItem].classList.remove('visible');
            bolinhas[currentItem].classList.remove('active');
            currentItem = index;
            items[currentItem].classList.add('visible');
            bolinhas[currentItem].classList.add('active');
        });
    });
}

window.addEventListener('load', startCarousel);


document.getElementById('contactForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var message = document.getElementById('message');
    var formMessage = document.getElementById('formMessage');

    formMessage.innerHTML = '';
    formMessage.style.display = 'none';
    email.classList.remove('error');
    phone.classList.remove('error');
    message.classList.remove('error');

    var emailValue = email.value.trim();
    var phoneValue = phone.value.trim();
    var messageValue = message.value.trim();

    var isValid = true;

    if (!emailValue && !phoneValue && !messageValue) {
        formMessage.innerHTML = 'Preencha todos os campos.';
        formMessage.style.display = 'block';
        isValid = false;
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            formMessage.innerHTML = 'Email inválido.';
            formMessage.style.display = 'block';
            email.classList.add('error');
            isValid = false;
        }

        var phoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
        if (!phoneRegex.test(phoneValue)) {
            formMessage.innerHTML = 'Telefone inválido.';
            formMessage.style.display = 'block';
            phone.classList.add('error');
            isValid = false;
        }
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        event.preventDefault();
        var modal = document.getElementById('successModal');
        var span = document.getElementsByClassName('close')[0];

        modal.style.display = 'block';
        span.onclick = function() {
            modal.style.display = 'none';
            document.getElementById('contactForm').submit();
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                document.getElementById('contactForm').submit();
            }
        };
    }
});


document.getElementById('email').addEventListener('input', function() {
    var formMessage = document.getElementById('formMessage');
    formMessage.innerHTML = '';
    formMessage.style.display = 'none';
    this.classList.remove('error');
});

document.getElementById('phone').addEventListener('input', function() {
    var formMessage = document.getElementById('formMessage');
    formMessage.innerHTML = '';
    formMessage.style.display = 'none';
    this.classList.remove('error');

    var phone = this.value.replace(/\D/g, '');
    if (phone.length > 11) {
        phone = phone.substr(0, 11);
    }
    if (phone.length > 2) {
        phone = '(' + phone.substring(0, 2) + ')' + phone.substring(2);
    }
    if (phone.length > 8) {
        phone = phone.substring(0, 9) + '-' + phone.substring(9);
    }
    this.value = phone;
});


document.getElementById('message').addEventListener('input', function() {
    var formMessage = document.getElementById('formMessage');
    formMessage.innerHTML = '';
    formMessage.style.display = 'none';
    this.classList.remove('error');
});