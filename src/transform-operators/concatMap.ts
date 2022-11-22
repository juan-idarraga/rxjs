import {
  concatMap,
  fromEvent,
  interval,
  mergeMap,
  switchMap,
  take,
} from "rxjs";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");
click$
  .pipe(
    //switchMap(() => interval$) //sigue emitiendo solo el utimo
    concatMap(() => interval$) // encola la ejecuciòn de los observables
  )
  .subscribe(console.log);
