class Timer {
  isRunning: boolean;
  isFinished: boolean;
  timeLeft: number;
  delay: number;
  constructor(delay: number) {
    this.delay = delay ?? 60;
    this.isRunning = false;
    this.isFinished = false;
    this.timeLeft = this.delay;
  }

  countTime(): void {
    setInterval(() => {
      if (this.isRunning) {
        this.timeLeft--;
        console.log(this.timeLeft);
      }
    }, 1000);
  }

  pause(): void {
    this.isRunning = false;
    this.isFinished = false;
  }

  start(): void {
    this.isRunning = true;
    this.isFinished = false;
    this.countTime();
  }

  reset(): void {
    this.isRunning = false;
    this.isFinished = false;
    this.timeLeft = this.delay;
  }

  getTime(): number {
    return this.timeLeft;
  }
}

export default Timer;
