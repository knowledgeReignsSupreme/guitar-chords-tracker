import Record from '../interfaces/Record.js';

class ChangesRecord implements Record {
  sortedChords: string[];
  date: string;
  times: string;

  constructor(sc: string[], t: string, d: string) {
    this.sortedChords = sc;
    this.times = t;
    this.date = d;
  }

  format(): string[] {
    const buildFormat = [];
    buildFormat[0] = this.sortedChords[0];
    buildFormat[1] = this.sortedChords[1];
    buildFormat[2] = this.times;
    buildFormat[3] = this.date;

    return buildFormat;
  }
}

export default ChangesRecord;
