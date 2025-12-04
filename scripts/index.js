gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    const cards = gsap.utils.toArray('.studio-card');
    const isMobile = window.innerWidth < 768;

    cards.forEach((card, index) => {
        const cardInner = card.querySelector('.card-inner');

        if (isMobile) {
            // На мобилке - появляются очень рано
            gsap.set(cardInner, {
                rotationX: 85,
                y: 80
            });

            gsap.set(card, {
                opacity: 0
            });

            // Анимация для мобилки - начинается раньше
            gsap.to(card, {
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 110%", // Было "top 85%" - теперь появляются раньше
                    end: "top 70%",
                    scrub: 1
                }
            });

            gsap.to(cardInner, {
                rotationX: 0,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%", // Было "top 80%" - теперь переворачиваются раньше
                    end: "top 40%",
                    scrub: 1
                }
            });

        } else {
            // На десктопе - тоже появляются раньше
            const isLeft = card.classList.contains('card-left');

            gsap.set(cardInner, {
                rotationX: 85,
                y: 150
            });

            gsap.set(card, {
                opacity: 0,
                x: isLeft ? -100 : 100
            });

            gsap.to(card, {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 110%", // Было "top 90%" - появляются раньше
                    end: "top 60%",
                    scrub: 1
                }
            });

            gsap.to(cardInner, {
                rotationX: 0,
                y: 0,
                duration: 1.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%", // Было "top 80%" - переворачиваются раньше
                    end: "top 30%",
                    scrub: 1
                }
            });
        }
    });
});

// Ждем загрузки всей страницы
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');

    // Добавляем небольшую задержку для плавного исчезновения
    setTimeout(function () {
        preloader.classList.add('hidden');

        // Удаляем прелоадер из DOM после анимации
        setTimeout(function () {
            preloader.style.display = 'none';
        }, 500);
    }, 2000); // 1 секунда минимальной загрузки
});

