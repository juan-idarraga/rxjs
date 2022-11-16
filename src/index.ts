import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

//const url = "https://api.github.com/users?per_page=5";
const url = "https://httpbin.org/delay/1";

//ajax.get(url, {});

ajax
  .put(
    url,
    {
      id: 1,
      name: "Juan",
    },
    {
      token: "dsdsd",
    }
  )
  .subscribe(console.log);

ajax
  .post(
    url,
    {
      id: 1,
      name: "Juan",
    },
    {
      token: "dsdsd",
    }
  )
  .subscribe(console.log);

ajax({
  url,
  method: "PUT",
  headers: {
    token: "dsds",
  },
  body: {
    id: 1,
  },
}).subscribe(console.log);
