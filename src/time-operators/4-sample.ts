//sample(observable) emite cuando el otro observable que pasó como parametro emite algo

import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(2000);
const click$ = fromEvent(document, "click");

interval$.pipe(sample(click$)).subscribe(console.log);
