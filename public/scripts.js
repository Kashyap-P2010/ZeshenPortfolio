// GSAP Animations for Scroll Events
gsap.registerPlugin(ScrollTrigger);

// Wavy Line Animation
gsap.to(".wave-highlight", {
    strokeDashoffset: 0,
    scrollTrigger: {
        trigger: ".wavy-line",
        start: "top center",
        end: "bottom center",
        scrub: true
    }
});

// Section Fade-In Animation
const sections = document.querySelectorAll(".section");
sections.forEach(section => {
    gsap.to(section, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });
});

// List Items Animation for Skills, Roblox, Web Divs
const listItems = document.querySelectorAll(".section ul li");
listItems.forEach((item, i) => {
    gsap.to(item, {
        x: 0,
        opacity: 1,
        duration: 0.7,
        delay: i * 0.2,
        scrollTrigger: {
            trigger: item.parentElement,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
        }
    });
});

// Circles Light-Up Animation
gsap.to(".circle", {
    opacity: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".light-circles",
        start: "top 80%",
        end: "bottom 40%",
        scrub: true
    }
});

// Diamonds Light-Up Animation
gsap.to(".diamond", {
    opacity: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".diamonds",
        start: "top 80%",
        end: "bottom 40%",
        scrub: true
    }
});

// Typewriter Effect for Contact Info
ScrollTrigger.create({
    trigger: ".contact-info",
    start: "top 80%",
    onEnter: () => document.querySelector(".contact-info").classList.add("typewriter-text")
});
