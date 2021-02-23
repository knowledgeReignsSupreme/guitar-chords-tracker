var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var ChangesRecord = /** @class */ (function () {
    function ChangesRecord(sc, t, d) {
        this.sortedChords = sc;
        this.times = t;
        this.date = d;
    }
    ChangesRecord.prototype.format = function () {
        return __spreadArrays(this.sortedChords, [this.times, this.date]);
    };
    return ChangesRecord;
}());
export default ChangesRecord;
