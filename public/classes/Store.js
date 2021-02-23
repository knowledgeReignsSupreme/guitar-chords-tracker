var Store = /** @class */ (function () {
    function Store(storage) {
        this.storage = storage;
    }
    Store.prototype.setRecord = function (item) {
        this.storage.setItem("" + item.sortedChords, JSON.stringify(item));
    };
    Store.prototype.getAllRecords = function () {
        var recordsArray = [];
        var currentData = JSON.parse(JSON.stringify(localStorage));
        for (var record in currentData) {
            recordsArray.push(JSON.parse(currentData[record]));
        }
        return recordsArray;
    };
    Store.prototype.isNewRecord = function (chordA, chordB, changes) {
        var doesRecordExist = this.getAllRecords().filter(function (rec) {
            return rec.sortedChords.includes(chordA) && rec.sortedChords.includes(chordB);
        });
        if (!doesRecordExist[0]) {
            return true;
        }
        else if (changes > doesRecordExist[0].times) {
            return true;
        }
        return false;
    };
    return Store;
}());
export default Store;
