import { fromEvent, interval, skip, takeUntil } from "rxjs";

const button = document.createElement("button");
button.innerHTML = "Stop";

document.querySelector("body").append(button);

const clickbtn$ = fromEvent(button, "click").pipe(skip(2));
// skip: no emite hasta el numero del parametro
const counter$ = interval(1000).pipe(takeUntil(clickbtn$));
//takeUntil: se detiene cuando el otro observable emita el primer valor

counter$.subscribe({
  next: (val) => console.log("val", val),
  complete: () => console.log("Completed"),
});
