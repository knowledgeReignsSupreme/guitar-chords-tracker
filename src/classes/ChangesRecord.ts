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
}

export default ChangesRecord;
