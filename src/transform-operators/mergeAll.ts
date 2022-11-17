//mergeAll es para tratar observable que devuelven otro observable

import {
  debounceTime,
  fromEvent,
  map,
  mergeAll,
  Observable,
  pluck,
} from "rxjs";
import { ajax } from "rxjs/ajax";

const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

//streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$
  .pipe(
    debounceTime<KeyboardEvent>(1000),
    map<KeyboardEvent, string>((resp) => resp.target["value"]),
    map<string, Observable<any>>((text) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
    ),
    mergeAll(),
    pluck("items")
  )
  .subscribe((resp) => {
    console.log(resp);
  });
