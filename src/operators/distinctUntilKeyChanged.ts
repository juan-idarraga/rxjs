import {
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  from,
  of,
} from "rxjs";

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
  .pipe(distinctUntilKeyChanged("name")) // si la propiedad no ha cambiado de valor no se emite
  .subscribe(console.log);
