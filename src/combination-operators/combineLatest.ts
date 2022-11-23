import { combineLatest, from, fromEvent, merge, pluck } from "rxjs";

//combineLatest: solo emite cuando todos los observables han emitido al menos un valor
const keyup$ = fromEvent(document, "keyup");
const click$ = fromEvent(document, "click");

combineLatest(
  keyup$.pipe(pluck("target", "value")),
  click$.pipe(pluck("target", "value"))
).subscribe(console.log);
