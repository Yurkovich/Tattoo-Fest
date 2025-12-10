gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

gsap.fromTo('.hero__title', {
  opacity: 0,
},
{
  opacity: 1,
  duration: 1
})

gsap.fromTo('.hero__links', {
  y: 100
},
{
  y: 0
})

gsap.fromTo('.equipment', 
  { 
    opacity: 0, 
    y: 100 
  }, 
  { 
    opacity: 1, 
    y: 0,
    scrollTrigger: {
      trigger: '.equipment',
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none none',
    },
    duration: 1
  }
);