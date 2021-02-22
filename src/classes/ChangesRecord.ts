import Record from '../interfaces/Record.js';

class ChangesRecord {
  sortedChords: string[];
  date: string;
  times: string;

  constructor(sc: string[], t: string, d: string) {
    this.sortedChords = sc;
    this.times = t;
    this.date = d;
  }

  format(): string {
    return `${this.sortedChords[0]} + ${this.sortedChords[1]} for ${this.times} on ${this.date}`;
  }
}

export default ChangesRecord;
