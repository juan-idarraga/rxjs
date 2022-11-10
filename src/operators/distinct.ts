import { distinct, from, of } from "rxjs";

const numbers$ = of(1, 4, "5", 3, 2, 4, 1, 2, 6);

numbers$.pipe(distinct()).subscribe(console.log); // si el valor ya se emitió no se va a volver a emitir, usa el ===

interface Personaje {
  name: string;
}

const personajes: Personaje[] = [
  { name: "Flash" },
  { name: "Batman" },
  { name: "Superman" },
  { name: "Flash" },
  { name: "Aquaman" },
];

from(personajes)
  .pipe(distinct((personaje) => personaje.name)) // por usar === en objetos hay que especificar una propiedad
  .subscribe(console.log);
