// Wrap every letter in a span
var textWrapper = document.querySelector(".ali");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".ali .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 2250,
  delay: (el, i) => 150 * (i + 1),
});

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 2250, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

window.addEventListener("click", () => {
  confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      // since they fall down, start a bit higher than random
      y: Math.random() - 0.2,
    },
  });
});

function genReason() {
  var randNum = Math.floor(Math.random() * reasons.length);
  document.getElementById('reason').innerHTML = reasons[randNum];
}

var reasons = [
  "you do the dishes for us 😇",
  "you always buy me a croissant when you go to the city",
  "you're so easy to talk to",
  "you always drive for us",
  "the way you love the cats as much as me",
  "your willingness to try new things 😉",
  "you're always there for me",
  "you're a good friend",
  "your smile",
  "your kisses",
  "your cuddles",
  "you give good massages",
  "how sweet you are",
  "how sensitive and empathetic you are",
  "your competitiveness (most of the time lol)",
  "how much you love mario kart",
  "how considerate you are",
  "how much of a hard worker you are",
  "how you're always trying to grow",
  "how open-minded you are",
  "you're baby",
  "your back scratches",
  "how much you love your family",
  "your silliness",
  "your kindness",
  "your thoughtfulness",
  "how smart you are",
  "you're a really good singer",
  "how soft your hair is",
  "you always remind me to put on sunscreen",
  "you always say good night",
  "you're funny",
  "watching reality TV and judging everyone together",
  "going on trips with just the 2 of us",
  "cooking dinner with you",
  "you're hot",
  "our date nights",
  "how you always bake me a cake on my birthday",
  "how you get along with my family",
  "your patience",
  "your nose",
  "how cute you look in your glasses",
  "how much you know about vietnamese food",
  "skiing/snowboarding together",
  "how romantic you are",
  "you buy me flowers",
  "your style",
  "we spend so much time together but there's still so much to talk about",
  "how much we both love TEA",
  "hearing you play the piano",
];
