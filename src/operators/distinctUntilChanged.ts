import { distinct, distinctUntilChanged, from, of } from "rxjs";

const numbers$ = of(1, 4, 5, "5", 3, 2, 2, 2, 2, 6);

numbers$.pipe(distinctUntilChanged()).subscribe(console.log); //si el valor anterior es igual entonces no se emite

interface Personaje {
  name: string;
}

const personajes: Personaje[] = [
  { name: "Flash" },
  { name: "Batman" },
  { name: "Flash" },
  { name: "Flash" },
  { name: "Aquaman" },
];

from(personajes)
  .pipe(
    distinctUntilChanged((previous, current) => previous.name === current.name)
  ) // por usar === en objetos hay que especificar una propiedad
  .subscribe(console.log);
