import ChangesRecord from './ChangesRecord.js';
var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (item) {
        var li = document.createElement('li');
        var p = document.createElement('p');
        p.innerHTML = item.format();
        li.append(p);
        this.container.prepend(li);
    };
    ListTemplate.prototype.renderStoredRecords = function (records) {
        var _this = this;
        records.forEach(function (record) {
            var renderRecord = new ChangesRecord(record.sortedChords, record.times, record.date);
            var li = document.createElement('li');
            var p = document.createElement('p');
            p.innerHTML = renderRecord.format();
            li.append(p);
            _this.container.append(li);
        });
    };
    return ListTemplate;
}());
export default ListTemplate;
