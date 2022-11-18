//mergeMap: por cada valor que emita el primer observable se va a generar un nuevo observable

import { interval, map, mergeMap, of, take } from "rxjs";

const letters$ = of("a", "b", "c");

letters$
  .pipe(
    mergeMap((letter) =>
      interval(1000).pipe(
        map((i) => letter + i),
        take(3)
      )
    )
  )
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("completed"),
  });

//mergeMap otro ejemplo
import { fromEvent, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";

const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

//streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

const url = "https://httpbin.org/delay/1?arg=";
input$
  .pipe(
    pluck("target", "value"),
    mergeMap((text) => ajax.getJSON(url + text))
  )
  .subscribe(console.log);
