import { Component, OnInit } from '@angular/core';
import { ColorService } from '../shared/color.service';
import { RGB } from '../shared/rgb.model';

@Component({
  selector: 'app-easy-mode',
  templateUrl: './easy-mode.component.html',
  styleUrls: ['./easy-mode.component.css']
})
export class EasyModeComponent implements OnInit {
  chosenRGB = new RGB(0, 0, 0);
  rgb1 = new RGB(0, 0, 0);
  rgb2 = new RGB(0, 0, 0);
  rgb3 = new RGB(0, 0, 0);
  showRGB1 = true;
  showRGB2 = true;
  showRGB3 = true;
  streak = 0;
  constructor(private color: ColorService) { }

  ngOnInit(): void {
    if (this.color.getCookie("easyStreak") === null || this.color.getCookie("easyStreak") === undefined || parseInt(this.color.getCookie("easyStreak")) === 0) {
      this.color.setCookie("easyStreak", this.streak, 1);
    } else if (parseInt(this.color.getCookie("easyStreak")) > 0) {
      this.streak = parseInt(this.color.getCookie("easyStreak"));
    }
    this.color.generateEasyRGB(this.rgb1, this.rgb2, this.rgb3, this.chosenRGB);
  }
  onRGB1() {
    if (this.chosenRGB.red === this.rgb1.red && this.chosenRGB.green === this.rgb1.green && this.chosenRGB.blue === this.rgb1.blue) {
      this.streak += 1;
      this.color.setCookie("easyStreak", this.streak, 1);
      this.color.generateEasyRGB(this.rgb1, this.rgb2, this.rgb3, this.chosenRGB);
    } else if (this.chosenRGB.red === this.rgb2.red && this.chosenRGB.green === this.rgb2.green && this.chosenRGB.blue === this.rgb2.blue) {
      this.showRGB1 = false;
      this.showRGB3 = false;
      this.streak = 0;
      this.color.setCookie("easyStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB3 = true;
        this.color.generateEasyRGB(this.rgb1, this.rgb2, this.rgb3, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb3.red && this.chosenRGB.green === this.rgb3.green && this.chosenRGB.blue === this.rgb3.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.streak = 0;
      this.color.setCookie("easyStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.color.generateEasyRGB(this.rgb1, this.rgb2, this.rgb3, this.chosenRGB);
      }, 1500);
    }
  }
  onRGB2() {
    if (this.chosenRGB.red === this.rgb2.red && this.chosenRGB.green === this.rgb2.green && this.chosenRGB.blue === this.rgb2.blue) {
      this.streak += 1;
      this.color.setCookie("easyStreak", this.streak, 1);
      this.color.generateEasyRGB(this.rgb1, this.rgb2, this.rgb3, this.chosenRGB);
    } else if (this.chosenRGB.red === this.rgb1.red && this.chosenRGB.green === this.rgb1.green && this.chosenRGB.blue === this.rgb1.blue) {
      this.showRGB2 = false;
      this.showRGB3 = false;
      this.streak = 0;
      this.color.setCookie("easyStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB2 = true;
        this.showRGB3 = true;
        this.color.generateEasyRGB(this.rgb1, this.rgb2, this.rgb3, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb3.red && this.chosenRGB.green === this.rgb3.green && this.chosenRGB.blue === this.rgb3.blue) {
      this.showRGB2 = false;
      this.showRGB1 = false;
      this.streak = 0;
      this.color.setCookie("easyStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB2 = true;
        this.showRGB1 = true;
        this.color.generateEasyRGB(this.rgb1, this.rgb2, this.rgb3, this.chosenRGB);
      }, 1500);
    }
  }
  onRGB3() {
    if (this.chosenRGB.red === this.rgb3.red && this.chosenRGB.green === this.rgb3.green && this.chosenRGB.blue === this.rgb3.blue) {
      this.streak += 1;
      this.color.setCookie("easyStreak", this.streak, 1);
      this.color.generateEasyRGB(this.rgb1, this.rgb2, this.rgb3, this.chosenRGB);
    } else if (this.chosenRGB.red === this.rgb1.red && this.chosenRGB.green === this.rgb1.green && this.chosenRGB.blue === this.rgb1.blue) {
      this.showRGB3 = false;
      this.showRGB2 = false;
      this.streak = 0;
      this.color.setCookie("easyStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB3 = true;
        this.showRGB2 = true;
        this.color.generateEasyRGB(this.rgb1, this.rgb2, this.rgb3, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb2.red && this.chosenRGB.green === this.rgb2.green && this.chosenRGB.blue === this.rgb2.blue) {
      this.showRGB3 = false;
      this.showRGB1 = false;
      this.streak = 0;
      this.color.setCookie("easyStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB3 = true;
        this.showRGB1 = true;
        this.color.generateEasyRGB(this.rgb1, this.rgb2, this.rgb3, this.chosenRGB);
      }, 1500);
    }
  }
}
