import ChangesRecord from './classes/ChangesRecord.js';
import Timer from './classes/Timer.js';
import ListTemplate from './classes/ListTemplate.js';
import Store from './classes/Store.js';
import Record from './interfaces/Record.js';

const form = document.querySelector('#newRecordForm') as HTMLFormElement;
const timerWrapper = document.querySelector('.timer') as HTMLDivElement;
const chordASelection = form.querySelector(
  '#chordASelection'
) as HTMLSelectElement;
const chordBSelection = form.querySelector(
  '#chordBSelection'
) as HTMLSelectElement;
const recordNumber = form.querySelector('#chordChanges') as HTMLInputElement;
const list = document.querySelector('ul')!;
const countdownParagraph = timerWrapper.querySelector(
  '.timer__count__paragraph'
) as HTMLParagraphElement;
const startButton = timerWrapper.querySelector(
  '#startCountdown'
) as HTMLButtonElement;
const resetButton = timerWrapper.querySelector(
  '#resetCountdown'
) as HTMLButtonElement;

const recordsList = new ListTemplate(list);
const storage = new Store(localStorage);

recordsList.renderStoredRecords(storage.getAllRecords());

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const date = new Date();

  const chordA = chordASelection.value;
  const chordB = chordBSelection.value;
  const numberOfChanges = recordNumber.value;

  if (storage.isNewRecord(chordA, chordB, numberOfChanges)) {
    const sortedChords: string[] = [chordA, chordB].sort();
    const newRecord: ChangesRecord = new ChangesRecord(
      sortedChords,
      numberOfChanges,
      `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    );
    recordsList.render(newRecord);
    storage.setRecord(newRecord);
    form.reset();
  }
});

const timer = new Timer(2, countdownParagraph);
startButton.addEventListener('click', () => {
  timer.start();
});

resetButton.addEventListener('click', () => {
  timer.reset();
});
