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
        var isAlreadyExist = this.getAllRecords().filter(function (rec) {
            return rec.sortedChords.includes(chordA) && rec.sortedChords.includes(chordB);
        });
        if (!isAlreadyExist[0]) {
            return true;
        }
        else if (changes > isAlreadyExist[0].times) {
            return true;
        }
        return false;
    };
    return Store;
}());
export default Store;
