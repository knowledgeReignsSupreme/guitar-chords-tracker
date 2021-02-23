import ChangesRecord from './ChangesRecord.js';
import Record from '../interfaces/Record.js';

class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: ChangesRecord) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    p.textContent = `${item.format()[0]} + ${item.format()[1]}`;
    p2.textContent = item.format()[2];
    p3.textContent = item.format()[3];

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

      p.textContent = `${renderRecord.format()[0]} + ${
        renderRecord.format()[1]
      }`;
      p2.textContent = renderRecord.format()[2];
      p3.textContent = renderRecord.format()[3];

      li.append(p);
      li.append(p2);
      li.append(p3);
      this.container.append(li);
    });
  }
}

export default ListTemplate;
