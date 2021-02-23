import ChangesRecord from './ChangesRecord.js';
import Record from '../interfaces/Record.js';

class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: ChangesRecord) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    p.textContent = `${item.sortedChords[0]} + ${item.sortedChords[1]}`;
    p2.textContent = item.times;
    p3.textContent = item.date;

    li.append(p);
    li.append(p2);
    li.append(p3);
    this.container.append(li);
  }

  renderStoredRecords(records: Record[]) {
    records.forEach((record) => {
      let renderRecord: ChangesRecord = new ChangesRecord(
        record.sortedChords,
        record.times,
        record.date
      );

      const li = document.createElement('li');
      const p = document.createElement('p');
      const p2 = document.createElement('p');
      const p3 = document.createElement('p');

      p.textContent = `${renderRecord.sortedChords[0]} + ${renderRecord.sortedChords[1]}`;
      p2.textContent = renderRecord.times;
      p3.textContent = renderRecord.date;

      li.append(p);
      li.append(p2);
      li.append(p3);
      this.container.append(li);
    });
  }
}

export default ListTemplate;
