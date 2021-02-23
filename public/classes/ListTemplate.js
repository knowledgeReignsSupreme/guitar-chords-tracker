import ChangesRecord from './ChangesRecord.js';
var ListTemplate = /** @class */ (function () {
  function ListTemplate(container) {
    this.container = container;
  }
  ListTemplate.prototype.render = function (item) {
    var li = document.createElement('li');
    var p = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    p.textContent = item.format()[0] + ' + ' + item.format()[1];
    p2.textContent = item.format()[2];
    p3.textContent = item.format()[3];
    li.append(p);
    li.append(p2);
    li.append(p3);
    this.container.append(li);
  };

  ListTemplate.prototype.renderStoredRecords = function (records) {
    var _this = this;
    records.forEach(function (record) {
      var renderRecord = new ChangesRecord(
        record.sortedChords,
        record.times,
        record.date
      );
      var li = document.createElement('li');
      var p = document.createElement('p');
      var p2 = document.createElement('p');
      var p3 = document.createElement('p');
      p.textContent =
        renderRecord.format()[0] + ' + ' + renderRecord.format()[1];
      p2.textContent = renderRecord.format()[2];
      p3.textContent = renderRecord.format()[3];
      li.append(p);
      li.append(p2);
      li.append(p3);
      _this.container.append(li);
    });
  };
  return ListTemplate;
})();
export default ListTemplate;
