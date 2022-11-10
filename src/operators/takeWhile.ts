import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    // takeWhile(({ y }) => y <= 150) // hace complete hasta que se incumpla la condición
    takeWhile(({ y }) => y <= 150, true) // el segundo parametro es para mandar el devolver el valor que incumplió la condición
  )
  .subscribe({
    next: (val) => console.log("val:", val),
    complete: () => console.log("completed"),
  });
