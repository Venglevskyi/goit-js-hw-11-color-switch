const ChangeTheme = {
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    } else {
      this.isActive = true;
      this.colorsThemeId = setInterval(() => {
        const randomIntegerFromInterval = (min, max) => {
          return Math.floor(Math.random() * (max - min + 1) + min);
        };
        const result = randomIntegerFromInterval(6, -1);
        refs.body.style.backgroundColor = colors[result];
      }, 1000);
    }
  },

  stop() {
    clearInterval(this.colorsThemeId);
    this.isActive = false;
  }
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const refs = {
  BtnStart: document.querySelector('[data-action="start"]'),
  BtnStop: document.querySelector('[data-action="stop"]'),
  body: document.body
};

refs.BtnStart.addEventListener("click", ChangeTheme.start.bind(ChangeTheme));
refs.BtnStop.addEventListener("click", ChangeTheme.stop.bind(ChangeTheme));
