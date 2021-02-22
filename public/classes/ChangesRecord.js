var ChangesRecord = /** @class */ (function () {
    function ChangesRecord(sc, t, d) {
        this.sortedChords = sc;
        this.times = t;
        this.date = d;
    }
    ChangesRecord.prototype.format = function () {
        return this.sortedChords[0] + " + " + this.sortedChords[1] + " for " + this.times + " on " + this.date;
    };
    return ChangesRecord;
}());
export default ChangesRecord;
