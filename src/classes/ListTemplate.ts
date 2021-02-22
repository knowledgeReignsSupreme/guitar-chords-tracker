import ChangesRecord from './ChangesRecord.js';
import Record from '../interfaces/Record.js';

class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: ChangesRecord) {
    const li = document.createElement('li');
    const p = document.createElement('p');

    p.innerHTML = item.format();
    li.append(p);
    this.container.prepend(li);
  }

  renderStoredRecords(records: Record[]) {
    records.forEach((record) => {
      let renderRecord = new ChangesRecord(
        record.sortedChords,
        record.times,
        record.date
      );
      const li = document.createElement('li');
      const p = document.createElement('p');

      p.innerHTML = renderRecord.format();
      li.append(p);
      this.container.append(li);
    });
  }
}

export default ListTemplate;
