const slider = document.querySelectorAll('.slider');
const btnReturn = document.getElementById('return-button');
const btnNext = document.getElementById('next-button');
const audio = document.getElementById('audio');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    slider[currentSlide].classList.add('on');
}

function nextSlider() {
    hideSlider();
    if (currentSlide == slider.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlider();
}

function returnSlider() {
    hideSlider();
    if (currentSlide == 0) {
        currentSlide = slider.length - 1;
    } else {
        currentSlide--;
    }
    showSlider();
}

function playAudio() {
    if (audio.paused) {
        audio.play();
    }
}

// Adiciona um evento de carga para iniciar a reprodução automática quando o áudio estiver pronto
audio.addEventListener('canplaythrough', () => {
    playAudio();
});

// Adiciona eventos de clique para as setas do slider
btnNext.addEventListener('click', () => nextSlider());
btnReturn.addEventListener('click', () => returnSlider());
