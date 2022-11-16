import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://api.github.com/users?per_page=5";
//const url = "https://httpbin.org/delay/1";
const errorManage = (resp: AjaxError) => {
  console.warn("error", resp.message);
  return of({
    ok: false,
  });
};

const obs$ = ajax.getJSON(url).pipe(catchError(errorManage));
const obs2$ = ajax(url).pipe(catchError(errorManage));
obs$.subscribe((data) => console.log("getJSON", data));
obs2$.subscribe((data) => console.log("ajax", data));
