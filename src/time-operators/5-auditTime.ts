//auditTime(observable) cuando emite espera el tiempo t y muestra lo mas reciente que se haya emitido
import { auditTime, fromEvent, interval, map, sample, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x }) => x),
    tap((val) => console.log("tap", val)),
    auditTime(2000)
  )
  .subscribe(console.log);
