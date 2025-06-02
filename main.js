document.addEventListener('DOMContentLoaded', () => {
    let listElements = document.querySelectorAll('.list__button--click');

    listElements.forEach(listElement => {
        listElement.addEventListener('click', () => {
            listElement.classList.toggle('arrow');
            let height = 0;
            let menu = listElement.nextElementSibling;
            if (menu.clientHeight === 0) {
                height = menu.scrollHeight;
            }
            menu.style.height = `${height}px`;
        });
    });

    document.querySelectorAll('.carousel').forEach(carousel => {
        const track = carousel.querySelector('.carousel__track');
        const nextButton = carousel.querySelector('.carousel__button--next');
        const prevButton = carousel.querySelector('.carousel__button--prev');
        const images = track.querySelectorAll('.carousel__image');
    
        let currentIndex = 0;
    
        function updateCarousel() {
            const offset = -currentIndex * 100;
            track.style.transform = `translateX(${offset}%)`;
        }
    
        // Botones manuales
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    // Autoplay cada 4 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }, 4000);

    })});