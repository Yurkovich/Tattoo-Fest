gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (!window.innerWidth < 768) {
  gsap.fromTo('.hero__title', { opacity: 0 },
  {
  opacity: 1,
  duration: 1
  })

  gsap.fromTo('.hero__links', { y: 100 },
  {
    y: 0
  })

  gsap.fromTo('.equipment', { opacity: 0, y: 100 }, 
  { 
    opacity: 1, 
    y: 0,
    scrollTrigger: {
      trigger: '.equipment',
      start: 'top 90%',
      end: 'bottom 10%',
      toggleActions: "play reverse play reverse",
    },
    duration: 1
  }
);
}

