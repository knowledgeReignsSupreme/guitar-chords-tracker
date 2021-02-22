import ChangesRecord from './classes/ChangesRecord.js';
import ListTemplate from './classes/ListTemplate.js';
import Store from './classes/Store.js';
var form = document.querySelector('#newRecordForm');
var chordASelection = form.querySelector('#chordASelection');
var chordBSelection = form.querySelector('#chordBSelection');
var recordNumber = form.querySelector('#chordChanges');
var list = document.querySelector('ul');
var recordsList = new ListTemplate(list);
var storage = new Store(localStorage);
recordsList.renderStoredRecords(storage.getAllRecords());
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var date = new Date();
    var chordA = chordASelection.value;
    var chordB = chordBSelection.value;
    var numberOfChanges = recordNumber.value;
    if (storage.isNewRecord(chordA, chordB, numberOfChanges)) {
        var sortedChords = [chordA, chordB].sort();
        var newRecord = new ChangesRecord(sortedChords, numberOfChanges, date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
        recordsList.render(newRecord);
        storage.setRecord(newRecord);
    }
});
