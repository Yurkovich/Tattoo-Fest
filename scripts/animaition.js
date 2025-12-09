gsap.registerPlugin(ScrollTrigger)

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
    y: 100,
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
    y: 100,
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
    y: 100,
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
    y: 100,
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
    y: 100,
    opacity: 0,

    scrollTrigger: {
        trigger: ".judges__title",
        start: "top 85%"
    }
});



gsap.from(".judges__card", {
    x: 0,
    y: 100,
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
    y: 100,
    opacity: 0,

    scrollTrigger: {
        trigger: ".buy__title",
        start: "top 85%"
    }
});

gsap.from(".buy__content, .buy__content, .buy__location, .buy__wrapper", {
    x: 0,
    y: 100,
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
    y: 100,
    opacity: 0,

    scrollTrigger: {
        trigger: ".presenters__title",
        start: "top 85%"
    }
});

gsap.from(".presenters__description", {
    x: 0,
    y: 100,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: ".presenters__description",
        start: "top 85%"
    }
});

gsap.from(".presenters__presenter--1", {
    x: 100,
    y: 0,
    opacity: 0,
    duration: 2,

    scrollTrigger: {
        trigger: ".presenters__presenter--1",
        start: "top 85%"
    }
});

gsap.from(".presenters__presenter--2", {
    x: 100,
    y: 0,
    opacity: 0,
    duration: 4,

    scrollTrigger: {
        trigger: ".presenters__presenter",
        start: "top 85%"
    }
});

gsap.from(".accordion__title", {
    x: 0,
    y: 100,
    opacity: 0,

    scrollTrigger: {
        trigger: ".accordion__title",
        start: "top 85%"
    }
});

gsap.from(".accordion__subtitle", {
    x: 0,
    y: 100,
    opacity: 0,
    duration: 1.5,

    scrollTrigger: {
        trigger: ".accordion__subtitle",
        start: "top 85%"
    }
});



gsap.from(".contacts__title", {
    x: 0,
    y: 100,
    opacity: 0,
    duration: 0.5,

    scrollTrigger: {
        trigger: ".contacts__title",
        start: "top 85%"
    }
});

gsap.from(".contacts__map", {
    x: -100,
    y: 0,
    opacity: 0,
    duration: 1.5,

    scrollTrigger: {
        trigger: ".contacts__map",
        start: "top 85%"
    }
});

gsap.from(".contacts__item", {
    x: 0,
    y: 100,
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
    y: 100,
    opacity: 0,

    scrollTrigger: {
        trigger: ".footer__content",
        start: "top 85%"
    }
});





// 

gsap.from(".healed__header", {
    x: 0,
    y: 100,
    opacity: 0,

    scrollTrigger: {
        trigger: ".healed__header",
        start: "top 85%"
    }
});



gsap.from(".healed-slider", {
    x: 0,
    y: 100,
    opacity: 0,
    delay: 0.4,

    scrollTrigger: {
        trigger: ".healed-slider",
        start: "top 85%"
    }
});



gsap.from(".accordion__wrapper", {
    x: 0,
    y: 100,
    opacity: 0,
    delay: 0.4,

    scrollTrigger: {
        trigger: ".accordion__wrapper",
        start: "top 85%"
    }
});



gsap.from(".best-box__title", {
    x: 0,
    y: 100,
    opacity: 0,

    scrollTrigger: {
        trigger: ".best-box__title",
        start: "top 85%"
    }
});

gsap.from(".best-box__wrapper", {
    opacity: 0,
    y: 100,
    visibility: "hidden"
});

gsap.from(".best-box__description, .best-box__info, .best-box__buttons", {
    x: 0,
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.4, // ← 0.2 секунды между элементами

    scrollTrigger: {
        trigger: ".best-box__wrapper",
        start: "top 85%"
    }
});




gsap.from(".nomination__title, .nomination__description, .nomination__info", {
    x: 0,
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.4, // ← 0.2 секунды между элементами

    scrollTrigger: {
        trigger: ".nomination__inner",
        start: "top 85%"
    }
});

gsap.from(".nomination__img", {
    x: 100,
    y: 0,
    opacity: 0,
    duration: 1,
    delay: 0.4,

    scrollTrigger: {
        trigger: ".nomination__img",
        start: "top 85%"
    }
});

gsap.from(".rewards__title", {
    x: 0,
    y: 100,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: ".rewards__title",
        start: "top 85%"
    }
});

gsap.from(".rewards__item-2", {
    x: 0,
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.2,

    scrollTrigger: {
        trigger: ".rewards__item-2",
        start: "top 85%"
    }
});


gsap.from(".rewards__item-1", {
    x: 100,
    y: 0,
    opacity: 0,
    duration: 1.4,
    delay: 0.4,

    scrollTrigger: {
        trigger: ".rewards__item-2",
        start: "top 85%"
    }
});

gsap.from(".rewards__item-3", {
    x: -100,
    y: 0,
    opacity: 0,
    duration: 1.4,
    delay: 0.4,

    scrollTrigger: {
        trigger: ".rewards__item-2",
        start: "top 85%"
    }
});