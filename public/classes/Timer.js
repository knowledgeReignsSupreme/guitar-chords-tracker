var Timer = /** @class */ (function () {
    function Timer(delay, paragraph) {
        this.delay = delay !== null && delay !== void 0 ? delay : 60;
        this.isRunning = false;
        this.timeLeft = this.delay;
        this.uiTime = paragraph;
    }
    Timer.prototype.timeCountdown = function () {
        var _this = this;
        var count = setInterval(function () {
            if (_this.isRunning) {
                _this.timeLeft--;
                _this.uiTime.textContent = "" + _this.timeLeft;
                if (_this.timeLeft === -1) {
                    var endSound = new Audio('../../timer-end.mp3');
                    endSound.play();
                    _this.reset();
                    clearInterval(count);
                }
            }
        }, 1000);
    };
    Timer.prototype.prepareUser = function () {
        var _this = this;
        this.uiTime.textContent = "Ready..";
        setTimeout(function () {
            _this.uiTime.textContent = 'Set..';
        }, 2000);
        setTimeout(function () {
            _this.uiTime.textContent = 'GO!!';
        }, 4500);
        setTimeout(function () {
            _this.isRunning = true;
            _this.timeCountdown();
            _this.uiTime.textContent = "" + _this.timeLeft;
        }, 5000);
    };
    Timer.prototype.start = function () {
        if (!this.isRunning) {
            this.prepareUser();
        }
    };
    Timer.prototype.reset = function () {
        if (this.isRunning) {
            this.isRunning = false;
            this.timeLeft = this.delay;
            this.uiTime.textContent = "Timer";
        }
    };
    return Timer;
}());
export default Timer;
