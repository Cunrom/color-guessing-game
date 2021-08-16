import { Injectable } from '@angular/core';
import { RGB } from './rgb.model';
@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }
  setCookie(cname: string, cvalue, expires: number) {
    let d = new Date();
    d.setTime(d.getTime() + (1000*60*60*24*expires));
    document.cookie = cname + "=" + cvalue + ";" + "expires=" + d.toUTCString() + ";" + "path=/";
  }
  getCookie(cname) {
    let name = cname + "=";
    let cArray = document.cookie.split(";");
    for (let i = 0; i < cArray.length; i++) {
      cArray[i] = cArray[i].trim();
      if (cArray[i].indexOf(name) === 0) {
        return cArray[i].substring(name.length);
      }
    }
  }
  generateEasyRGB(rgb1: RGB, rgb2: RGB, rgb3: RGB, chosenRGB: RGB) {
    rgb1.red = Math.floor(Math.random() * 256);
    rgb1.green = Math.floor(Math.random() * 256);
    rgb1.blue = Math.floor(Math.random() * 256);
    rgb2.red = Math.floor(Math.random() * 256);
    rgb2.green = Math.floor(Math.random() * 256);
    rgb2.blue = Math.floor(Math.random() * 256);
    rgb3.red = Math.floor(Math.random() * 256);
    rgb3.green = Math.floor(Math.random() * 256);
    rgb3.blue = Math.floor(Math.random() * 256);
    let randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) {
      chosenRGB.red = rgb1.red;
      chosenRGB.green = rgb1.green;
      chosenRGB.blue = rgb1.blue;
    } else if (randomInt === 1) {
      chosenRGB.red = rgb2.red;
      chosenRGB.green = rgb2.green;
      chosenRGB.blue = rgb2.blue;
    } else if (randomInt === 2) {
      chosenRGB.red = rgb3.red;
      chosenRGB.green = rgb3.green;
      chosenRGB.blue = rgb3.blue;
    }
  }
  generateHardRGB(rgb1: RGB, rgb2: RGB, rgb3: RGB, rgb4: RGB, rgb5: RGB, rgb6: RGB, chosenRGB: RGB) {
    rgb1.red = Math.floor(Math.random() * 256);
    rgb1.green = Math.floor(Math.random() * 256);
    rgb1.blue = Math.floor(Math.random() * 256);
    rgb2.red = Math.floor(Math.random() * 256);
    rgb2.green = Math.floor(Math.random() * 256);
    rgb2.blue = Math.floor(Math.random() * 256);
    rgb3.red = Math.floor(Math.random() * 256);
    rgb3.green = Math.floor(Math.random() * 256);
    rgb3.blue = Math.floor(Math.random() * 256);
    rgb4.red = Math.floor(Math.random() * 256);
    rgb4.green = Math.floor(Math.random() * 256);
    rgb4.blue = Math.floor(Math.random() * 256);
    rgb5.red = Math.floor(Math.random() * 256);
    rgb5.green = Math.floor(Math.random() * 256);
    rgb5.blue = Math.floor(Math.random() * 256);
    rgb6.red = Math.floor(Math.random() * 256);
    rgb6.green = Math.floor(Math.random() * 256);
    rgb6.blue = Math.floor(Math.random() * 256);
    let randomInt = Math.floor(Math.random() * 6);
    if (randomInt === 0) {
      chosenRGB.red = rgb1.red;
      chosenRGB.green = rgb1.green;
      chosenRGB.blue = rgb1.blue;
    } else if (randomInt === 1) {
      chosenRGB.red = rgb2.red;
      chosenRGB.green = rgb2.green;
      chosenRGB.blue = rgb2.blue;
    } else if (randomInt === 2) {
      chosenRGB.red = rgb3.red;
      chosenRGB.green = rgb3.green;
      chosenRGB.blue = rgb3.blue;
    } else if (randomInt === 3) {
      chosenRGB.red = rgb4.red;
      chosenRGB.green = rgb4.green;
      chosenRGB.blue = rgb4.blue;
    } else if (randomInt === 4) {
      chosenRGB.red = rgb5.red;
      chosenRGB.green = rgb5.green;
      chosenRGB.blue = rgb5.blue;
    } else if (randomInt === 5) {
      chosenRGB.red = rgb6.red;
      chosenRGB.green = rgb6.green;
      chosenRGB.blue = rgb6.blue;
    }
  }
}
