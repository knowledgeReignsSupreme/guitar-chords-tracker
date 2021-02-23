import Record from '../interfaces/Record.js';

class Store {
  constructor(private storage: Storage) {}

  setRecord(item: Record): void {
    this.storage.setItem(`${item.sortedChords}`, JSON.stringify(item));
  }

  getAllRecords(): Record[] {
    let recordsArray: Record[] = [];
    let currentData: Storage = JSON.parse(JSON.stringify(localStorage));

    for (let record in currentData) {
      recordsArray.push(JSON.parse(currentData[record]));
    }

    return recordsArray;
  }

  isNewRecord(chordA: string, chordB: string, changes: string): boolean {
    const doesRecordExist = this.getAllRecords().filter(
      (rec) =>
        rec.sortedChords.includes(chordA) && rec.sortedChords.includes(chordB)
    );

    if (!doesRecordExist[0]) {
      return true;
    } else if (changes > doesRecordExist[0].times) {
      return true;
    }

    return false;
  }
}

export default Store;
