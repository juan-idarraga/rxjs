import { catchError, map, of, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";

const url = "https://api.github.com/users?per_page=5";

const errorManage = (err) => {
  console.warn(err);
  return of([]);
};
// fetchPromise
//   .then((resp) => resp.json())
//   .then(console.log)
//   .catch();

ajax(url)
  .pipe(pluck("response"), catchError(errorManage))
  .subscribe((users) => console.log("users:", users));
