class Timer {
  isRunning: boolean;
  timeLeft: number;
  delay: number;
  uiTime: HTMLParagraphElement;
  constructor(delay: number, paragraph: HTMLParagraphElement) {
    this.delay = delay ?? 60;
    this.isRunning = false;
    this.timeLeft = this.delay;
    this.uiTime = paragraph;
  }

  timeCountdown(): void {
    const count = setInterval(() => {
      if (this.isRunning) {
        this.timeLeft--;
        this.uiTime.textContent = `${this.timeLeft}`;
        if (this.timeLeft === -1) {
          const endSound = new Audio('../../timer-end.mp3');
          endSound.play();
          this.reset();
          clearInterval(count);
        }
      }
    }, 1000);
  }

  prepareUser(): void {
    this.uiTime.textContent = `Ready..`;
    setTimeout(() => {
      this.uiTime.textContent = 'Set..';
    }, 2000);

    setTimeout(() => {
      this.uiTime.textContent = 'GO!!';
    }, 4500);

    setTimeout(() => {
      this.isRunning = true;
      this.timeCountdown();
      this.uiTime.textContent = `${this.timeLeft}`;
    }, 5000);
  }

  start(): void {
    if (!this.isRunning) {
      this.prepareUser();
    }
  }

  reset(): void {
    if (this.isRunning) {
      this.isRunning = false;
      this.timeLeft = this.delay;
      this.uiTime.textContent = `Timer`;
    }
  }
}

export default Timer;
