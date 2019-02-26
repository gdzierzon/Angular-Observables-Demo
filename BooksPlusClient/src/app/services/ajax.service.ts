import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor() { }


  getBooks(url, done)
  {
    let xhttp;
    if ((window as any).XMLHttpRequest) {
      // code for modern browsers
      xhttp = new XMLHttpRequest();
    } else {
      // code for IE6, IE5
      // @ts-ignore
      xhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }

    // xhttp.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200) {
    //     this.books = JSON.parse(this.responseText);
    //   }
    // };

    xhttp.open('GET', url, true);
    xhttp.onload = () => {
      done(null, JSON.parse(xhttp.response));
    };
    xhttp.onerror = () => {
      done(xhttp.response);
    };
    xhttp.send();
  }

}
