import { fromEvent, map, mergeMap, pluck, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

const HttpRequest = (userPass) =>
  ajax
    .post("https://reqres.in/api/login?delay=1", userPass)
    .pipe(pluck("response", "token"));

//form
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const inputBtn = document.createElement("button");

inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "Password";
inputPass.value = "cityslicka";

inputBtn.innerHTML = "Login";

form.append(inputEmail, inputPass, inputBtn);

document.querySelector("body").append(form);

const submitForm$ = fromEvent<Event>(form, "submit").pipe(
  tap((ev) => ev.preventDefault()),
  map((ev) => ({
    email: ev.target[0].value,
    password: ev.target[0].value,
  })),
  //   mergeMap(HttpRequest)
  switchMap(HttpRequest)
);
