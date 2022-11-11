//throttleTime(t) va a esperar t despues de una emision
// es para evitar que se emita demasiado

import {
  asyncScheduler,
  distinctUntilChanged,
  fromEvent,
  pluck,
  tap,
  throttleTime,
} from "rxjs";

const click$ = fromEvent(document, "click");

click$.pipe(throttleTime(3000)).subscribe(console.log);

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent<KeyboardEvent>(input, "keyup")
  .pipe(
    throttleTime(2000, asyncScheduler, {
      leading: true,
      trailing: true,
    }),
    pluck("target", "value"),
    distinctUntilChanged()
  )
  .subscribe({
    next: (val) => console.log("val", val),
  });
