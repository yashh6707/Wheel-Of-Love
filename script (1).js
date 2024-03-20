 const febHolidays = [
    "Dear Baby,",
    "First of all, I Love You💕",
    "You're my everything",
    "You are my soulmate",
    "And of course...",
    "My future wife🤭",
    "I will always be there for you",
    "No matter how far we are🥰",
    "You're the prettiest, cutest, funniest,",
    "sweetest girl ever.",
    "In one word, you're just perfect.😍",
    "I'm the happiest man alive🥰",
    "I'm so grateful I met you💕",
    "I'll always do my best to keep you happy🥺",
    "You are the most special person in my life🥰",
    "I don't want to lose you",
    "And trust me I dont want anyone else",
    "There's no one better than you💕",
    "You're the best Baby!!",
    "Or should I say, You are my lucky charm ",
    "We've been connected since we met online",
    "There's some hardships,",
    "but we overcame most of them",
    "and it made me realised how important you are in my life💕",
    "This one is only for you,",
    "Baby",
    "Tujhe jhumke pasand hai",
    "Aur mujhe jhumko me tum💕✨",
    "But anyways,You are my sweet little girlfriend(wife🤭)",
    "You're the love of my life,",
    "I Love You So much💕"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
