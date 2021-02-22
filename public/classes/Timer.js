var Timer = /** @class */ (function () {
    function Timer(delay) {
        this.delay = delay !== null && delay !== void 0 ? delay : 60;
        this.isRunning = false;
        this.isFinished = false;
        this.timeLeft = this.delay;
    }
    Timer.prototype.countTime = function () {
        var _this = this;
        setInterval(function () {
            if (_this.isRunning) {
                _this.timeLeft--;
                console.log(_this.timeLeft);
            }
        }, 1000);
    };
    Timer.prototype.pause = function () {
        this.isRunning = false;
        this.isFinished = false;
    };
    Timer.prototype.start = function () {
        this.isRunning = true;
        this.isFinished = false;
        this.countTime();
    };
    Timer.prototype.reset = function () {
        this.isRunning = false;
        this.isFinished = false;
        this.timeLeft = this.delay;
    };
    Timer.prototype.getTime = function () {
        return this.timeLeft;
    };
    return Timer;
}());
export default Timer;
