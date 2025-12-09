gsap.registerPlugin(ScrollTrigger)

const root = document.querySelector('.accordion');

root.addEventListener('click', e => {
  const item = e.target.closest('.accordion__item');
  if (!item || !root.contains(item)) return;

  const active = root.querySelector('.item--active');
  if (active && active !== item) active.classList.remove('item--active');

  item.classList.toggle('item--active');
});



gsap.from(".hero__title--contest", {
  y: 100, 
  opacity: 0, 
  duration: 1,
  delay: 2.5, 
  scrollTrigger: {
      trigger: ".hero__title--contest", 
      start: "top 80%"
  }
});


gsap.from(".hero__links--contest", {
  y: 100, 
  opacity: 0, 
  duration: 1,
  delay: 2.8, 
  scrollTrigger: {
      trigger: ".hero__links--contest", 
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

gsap.from(".healed__header", {
  x: 0,
  y:100,
  opacity: 0,
  
  scrollTrigger: {
      trigger: ".healed__header",
      start: "top 85%"
  }
});



gsap.from(".healed-slider", {
  x: 0,
  y:100,
  opacity: 0,
  delay: 0.4,
  
  scrollTrigger: {
      trigger: ".healed-slider",
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

gsap.from(".accordion__wrapper", {
  x: 0,
  y:100,
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
  y:100,
  visibility: "hidden"
});

gsap.from(".best-box__description, .best-box__info, .best-box__buttons", {
  x: 0,
  y:100,
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
  y:100,
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
  y:0,
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
  y:100,
  opacity: 0,
  duration: 1,
  
  scrollTrigger: {
      trigger: ".rewards__title",
      start: "top 85%"
  }
});

gsap.from(".rewards__item-2", {
  x: 0,
  y:100,
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
  y:0,
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
  y:0,
  opacity: 0,
  duration: 1.4,
  delay: 0.4,
  
  scrollTrigger: {
      trigger: ".rewards__item-2",
      start: "top 85%"
  }
});