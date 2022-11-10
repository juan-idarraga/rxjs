import { first, fromEvent, take, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    tap(() => console.log("tap")),
    first<MouseEvent>((event) => event.clientY >= 150) // cuando se cumple la condición hace completesd
  )
  .subscribe({
    next: (val) => console.log("val:", val),
    complete: () => console.log("Completed"),
  });
