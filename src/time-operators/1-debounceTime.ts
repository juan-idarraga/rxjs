//debounceTime: emite cada tiempo definido, muestra los mas reciente que se haya emitido
// es para evitar que se emita demasiado

import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  pluck,
  tap,
} from "rxjs";

const click$ = fromEvent(document, "click");

click$.pipe(debounceTime(3000)).subscribe(console.log);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup")
  .pipe(debounceTime(2000), pluck("target", "value"), distinctUntilChanged())
  .subscribe({
    next: (val) => console.log("val", val),
  });
