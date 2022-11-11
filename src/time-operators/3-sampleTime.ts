//SampleTime(t) emite cada t la ultma emición en ese t

import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    sampleTime(3000),
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);

const input = document.createElement("input");
document.querySelector("body").append(input);
