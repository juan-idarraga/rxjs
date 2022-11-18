//switchMap los observables hijos se van completando y si hay nueva emision interrumpe las anteriores
import {
  debounceTime,
  fromEvent,
  map,
  mergeAll,
  mergeMap,
  Observable,
  pluck,
  switchMap,
} from "rxjs";
import { ajax } from "rxjs/ajax";

const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

//streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$.pipe(
  debounceTime<KeyboardEvent>(1000),
  map<KeyboardEvent, string>((resp) => resp.target["value"]),
  mergeMap<string, Observable<any>>((text) =>
    ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
  ),
  pluck("items")
);
//   .subscribe((resp) => {
//     console.log(resp);
//   });

const url = "https://httpbin.org/delay/1?arg=";
input$
  .pipe(
    pluck("target", "value"),
    switchMap((text) => ajax.getJSON(url + text))
  )
  .subscribe(console.log);
