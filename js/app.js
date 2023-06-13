gsap.set("#dotGroup > *", { opacity: 0 });
gsap.set("#dotGroupTwo > *", { opacity: 0 });
gsap.set("#dotGroupThree > *", { opacity: 0 });
gsap.set("#dotGroupFour > *", { opacity: 0 });
gsap.set("#dotGroupFive > *", { opacity: 0 });



gsap.to("#letterOne", { opacity: 0});
gsap.to("#letterTwo", { opacity: 0});
gsap.to("#letterThree", { opacity: 0});
gsap.to("#bgItemOne", { x:5, y: 5, duration: 4, repeat:-1, yoyo: true});
gsap.to("#bgItemTwo", { x:-5, y: -5, duration: 4, repeat:-1, yoyo: true});
gsap.to("#bgItemThree", { x:5, y: -5, duration: 4, repeat:-1, yoyo: true});
gsap.timeline({ repeat: -1 })
  .to("#eyeLeft, #eyeRight", { duration: 0.2, scaleY: 1, ease: "power1.inOut"})
  .to("#eyeLeft, #eyeRight", { duration: 0.2, scaleY: 0.1, ease: "power1.inOut", delay: 2 });

gsap.to("#hand", {duration: 2, rotate: 5, transformOrigin: "50% 50%", ease: "linear", repeat: -1, yoyo: true});
gsap.to("#wave", { opasity: 0, duration: 1, repeat: -1, yoyo:true});
gsap.to("#lips", { x: 2, y: 1, duration: 4, repeat: -1, yoyo:true});

gsap.fromTo( "#wave",{ opacity: 1 }, { opacity: 0, duration: 2, repeat: -1, yoyo:true});


const elements = gsap.utils.toArray("#dotGroup > *, #dotGroupTwo > *, #dotGroupThree > *, #dotGroupFour > *, #dotGroupFive > *");
const timeline = gsap.timeline({  });
timeline

.from("#letter", {y: 200, duration: 2, delay:1})

.fromTo(elements, { opacity: 0 }, { opacity: 1, stagger: 0.01 })

.from("#letterOne", { x: 200, y: 200, opacity: 1})
.from("#letterTwo", { x: -200, y: 200, opacity: 1} )
.from("#letterThree", { x: -300, y: 170, opacity: 1})

.to("#letterOne", { x:5, y: 5, duration: 4, repeat:-1, yoyo: true})
.to("#letterTwo", { x:5, y: 5, duration: 4, repeat:-1, yoyo: true})
.to("#letterThree", { x:5, y: 5, duration: 4, repeat:-1, yoyo: true})










