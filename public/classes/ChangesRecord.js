var ChangesRecord = /** @class */ (function () {
    function ChangesRecord(sc, t, d) {
        this.sortedChords = sc;
        this.times = t;
        this.date = d;
    }
    ChangesRecord.prototype.format = function () {
        var buildFormat = [];
        buildFormat[0] = this.sortedChords[0];
        buildFormat[1] = this.sortedChords[1];
        buildFormat[2] = this.times;
        buildFormat[3] = this.date;
        return buildFormat;
    };
    return ChangesRecord;
}());
export default ChangesRecord;
