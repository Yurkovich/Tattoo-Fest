gsap.registerPlugin(ScrollTrigger)

document.addEventListener("DOMContentLoaded", function () {
  const cards = gsap.utils.toArray(".studio-card")
  const isMobile = window.innerWidth < 768

  cards.forEach((card, index) => {
    const cardInner = card.querySelector(".card-inner")

    if (isMobile) {
      // На мобилке - появляются очень рано
      gsap.set(cardInner, {
        rotationX: 85,
        y: 80,
      })

      gsap.set(card, {
        opacity: 0,
      })

      // Анимация для мобилки - начинается раньше
      gsap.to(card, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 110%", // Было "top 85%" - теперь появляются раньше
          end: "top 70%",
          scrub: 1,
        },
      })

      gsap.to(cardInner, {
        rotationX: 0,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%", // Было "top 80%" - теперь переворачиваются раньше
          end: "top 40%",
          scrub: 1,
        },
      })
    } else {
      // На десктопе - тоже появляются раньше
      const isLeft = card.classList.contains("card-left")

      gsap.set(cardInner, {
        rotationX: 85,
        y: 150,
      })

      gsap.set(card, {
        opacity: 0,
        x: isLeft ? -100 : 100,
      })

      gsap.to(card, {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 110%", // Было "top 90%" - появляются раньше
          end: "top 60%",
          scrub: 1,
        },
      })

      gsap.to(cardInner, {
        rotationX: 0,
        y: 0,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%", // Было "top 80%" - переворачиваются раньше
          end: "top 30%",
          scrub: 1,
        },
      })
    }
  })
})



// анимации //

gsap.from(".hero__title", {
  y: 100, 
  opacity: 0, 
  duration: 1,
  delay: 2.5, 
  scrollTrigger: {
      trigger: ".hero__title", 
      start: "top 80%"
  }
});

gsap.from(".hero__links", {
  y: 100, 
  opacity: 0, 
  duration: 1,
  delay: 2.8, 
  scrollTrigger: {
      trigger: ".hero__title", 
      start: "top 80%"
  }
});

gsap.set(".about__header", {
  opacity: 0,
  y:100,
  visibility: "hidden"
});


gsap.to(".about__header", {
  opacity: 1,
  y: 0,
  visibility: "visible",
  duration: 1,
  
  scrollTrigger: {
      trigger: ".about__header",
      start: "top 80%"
  }
});

gsap.from(".about__item", {
  x: 0,
  y:100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.4, // ← 0.2 секунды между элементами
  
  scrollTrigger: {
      trigger: ".about__content",
      start: "top 85%"
  }
});

gsap.from(".partners__inner", {
  x: 0,
  y:100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.4, // ← 0.2 секунды между элементами
  
  scrollTrigger: {
      trigger: ".partners__inner",
      start: "top 85%"
  }
});



gsap.set(".events-title", {
  opacity: 0,
  y:100,
  visibility: "hidden"
});


gsap.to(".events-title", {
  opacity: 1,
  y: 0,
  visibility: "visible",
  duration: 1,
  
  scrollTrigger: {
      trigger: ".events-title",
      start: "top 80%"
  }
});


gsap.from(".judges__title", {
  x: 0,
  y:100,
  opacity: 0,
  
  scrollTrigger: {
      trigger: ".judges__title",
      start: "top 85%"
  }
});



gsap.from(".judges__card", {
  x: 0,
  y:100,
  opacity: 0,
  duration: 1,
  stagger: 0.4, // ← 0.2 секунды между элементами
  
  scrollTrigger: {
      trigger: ".judges__inner",
      start: "top 85%"
  }
});

gsap.from(".buy__title", {
  x: 0,
  y:100,
  opacity: 0,
  
  scrollTrigger: {
      trigger: ".buy__title",
      start: "top 85%"
  }
});

gsap.from(".buy__content, .buy__content, .buy__location, .buy__wrapper", {
  x: 0,
  y:100,
  opacity: 0,
  duration: 1,
  stagger: 0.4, // ← 0.2 секунды между элементами
  
  scrollTrigger: {
      trigger: ".buy__content",
      start: "top 85%"
  }
});

gsap.from(".presenters__title", {
  x: 0,
  y:100,
  opacity: 0,
  
  scrollTrigger: {
      trigger: ".presenters__title",
      start: "top 85%"
  }
});

gsap.from(".presenters__description", {
  x: 0,
  y:100,
  opacity: 0,
  duration: 1,
  
  scrollTrigger: {
      trigger: ".presenters__description",
      start: "top 85%"
  }
});

gsap.from(".presenters__presenter--1", {
  x: 100,
  y:0,
  opacity: 0,
  duration: 2,
  
  scrollTrigger: {
      trigger: ".presenters__presenter--1",
      start: "top 85%"
  }
});

gsap.from(".presenters__presenter--2", {
  x: 100,
  y:0,
  opacity: 0,
  duration: 4,
  
  scrollTrigger: {
      trigger: ".presenters__presenter",
      start: "top 85%"
  }
});

gsap.from(".accordion__title", {
  x: 0,
  y:100,
  opacity: 0,
  
  scrollTrigger: {
      trigger: ".accordion__title",
      start: "top 85%"
  }
});

gsap.from(".accordion__subtitle", {
  x: 0,
  y:100,
  opacity: 0,
  duration: 1.5,
  
  scrollTrigger: {
      trigger: ".accordion__subtitle",
      start: "top 85%"
  }
});

gsap.from(".accordion__item", {
  x: 0,
  y:100,
  opacity: 0,
  duration: 1,
  stagger: 0.4, // ← 0.2 секунды между элементами
  
  scrollTrigger: {
      trigger: ".accordion__list",
      start: "top 85%"
  }
});

gsap.from(".contacts__title", {
  x: 0,
  y:100,
  opacity: 0,
  duration: 0.5,
  
  scrollTrigger: {
      trigger: ".contacts__title",
      start: "top 85%"
  }
});

gsap.from(".contacts__map", {
  x: -100,
  y:0,
  opacity: 0,
  duration: 1.5,
  
  scrollTrigger: {
      trigger: ".contacts__map",
      start: "top 85%"
  }
});

gsap.from(".contacts__item", {
  x: 0,
  y:100,
  opacity: 0,
  duration: 1,
  stagger: 0.4, // ← 0.2 секунды между элементами
  
  scrollTrigger: {
      trigger: ".contacts__list",
      start: "top 85%"
  }
});

gsap.from(".footer__content", {
  x: 0,
  y:100,
  opacity: 0,
  
  scrollTrigger: {
      trigger: ".footer__content",
      start: "top 85%"
  }
});









