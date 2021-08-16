import { Component, OnInit } from '@angular/core';
import { ColorService } from '../shared/color.service';
import { RGB } from '../shared/rgb.model';

@Component({
  selector: 'app-hard-mode',
  templateUrl: './hard-mode.component.html',
  styleUrls: ['./hard-mode.component.css']
})
export class HardModeComponent implements OnInit {
  chosenRGB = new RGB(0, 0, 0);
  rgb1 = new RGB(0, 0, 0);
  rgb2 = new RGB(0, 0, 0);
  rgb3 = new RGB(0, 0, 0);
  rgb4 = new RGB(0, 0, 0);
  rgb5 = new RGB(0, 0, 0);
  rgb6 = new RGB(0, 0, 0);
  showRGB1 = true;
  showRGB2 = true;
  showRGB3 = true;
  showRGB4 = true;
  showRGB5 = true;
  showRGB6 = true;
  streak = 0;
  constructor(private color: ColorService) { }

  ngOnInit(): void {
    if (this.color.getCookie("hardStreak") === null || this.color.getCookie("hardStreak") === undefined || parseInt(this.color.getCookie("hardStreak")) === 0) {
      this.color.setCookie("hardStreak", this.streak, 1);
    } else if (parseInt(this.color.getCookie("hardStreak")) > 0) {
      this.streak = parseInt(this.color.getCookie("hardStreak"));
    }
    this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
  }
  onRGB1() {
    if (this.chosenRGB.red === this.rgb1.red && this.chosenRGB.green === this.rgb1.green && this.chosenRGB.blue === this.rgb1.blue) {
      this.streak += 1;
      this.color.setCookie("hardStreak", this.streak, 1);
      this.color.generateEasyRGB(this.rgb1, this.rgb2, this.rgb3, this.chosenRGB);
    } else if (this.chosenRGB.red === this.rgb2.red && this.chosenRGB.green === this.rgb2.green && this.chosenRGB.blue === this.rgb2.blue) {
      this.showRGB1 = false;
      this.showRGB3 = false;
      this.showRGB4 = false;
      this.showRGB5 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB3 = true;
        this.showRGB4 = true;
        this.showRGB5 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb3.red && this.chosenRGB.green === this.rgb3.green && this.chosenRGB.blue === this.rgb3.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB5 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB5 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb4.red && this.chosenRGB.green === this.rgb4.green && this.chosenRGB.blue === this.rgb4.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB3 = false;
      this.showRGB5 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB3 = true;
        this.showRGB5 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb5.red && this.chosenRGB.green === this.rgb5.green && this.chosenRGB.blue === this.rgb5.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB3 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB3 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb6.red && this.chosenRGB.green === this.rgb6.green && this.chosenRGB.blue === this.rgb6.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB3 = false;
      this.showRGB5 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB3 = true;
        this.showRGB5 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    }
  }
  onRGB2() {
    if (this.chosenRGB.red === this.rgb2.red && this.chosenRGB.green === this.rgb2.green && this.chosenRGB.blue === this.rgb2.blue) {
      this.streak += 1;
      this.color.setCookie("hardStreak", this.streak, 1);
      this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
    } else if (this.chosenRGB.red === this.rgb1.red && this.chosenRGB.green === this.rgb1.green && this.chosenRGB.blue === this.rgb1.blue) {
      this.showRGB5 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB3 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB5 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB3 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb3.red && this.chosenRGB.green === this.rgb3.green && this.chosenRGB.blue === this.rgb3.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB5 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB5 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb4.red && this.chosenRGB.green === this.rgb4.green && this.chosenRGB.blue === this.rgb4.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB3 = false;
      this.showRGB5 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB3 = true;
        this.showRGB5 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb5.red && this.chosenRGB.green === this.rgb5.green && this.chosenRGB.blue === this.rgb5.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB3 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB3 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb6.red && this.chosenRGB.green === this.rgb6.green && this.chosenRGB.blue === this.rgb6.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB3 = false;
      this.showRGB5 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB3 = true;
        this.showRGB5 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    }
  }
  onRGB3() {
    if (this.chosenRGB.red === this.rgb3.red && this.chosenRGB.green === this.rgb3.green && this.chosenRGB.blue === this.rgb3.blue) {
      this.streak += 1;
      this.color.setCookie("hardStreak", this.streak, 1);
      this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
    } else if (this.chosenRGB.red === this.rgb1.red && this.chosenRGB.green === this.rgb1.green && this.chosenRGB.blue === this.rgb1.blue) {
      this.showRGB5 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB3 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB5 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB3 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb2.red && this.chosenRGB.green === this.rgb2.green && this.chosenRGB.blue === this.rgb2.blue) {
      this.showRGB1 = false;
      this.showRGB3 = false;
      this.showRGB4 = false;
      this.showRGB5 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB3 = true;
        this.showRGB4 = true;
        this.showRGB5 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb4.red && this.chosenRGB.green === this.rgb4.green && this.chosenRGB.blue === this.rgb4.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB3 = false;
      this.showRGB5 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB3 = true;
        this.showRGB5 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb5.red && this.chosenRGB.green === this.rgb5.green && this.chosenRGB.blue === this.rgb5.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB3 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB3 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb6.red && this.chosenRGB.green === this.rgb6.green && this.chosenRGB.blue === this.rgb6.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB3 = false;
      this.showRGB5 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB3 = true;
        this.showRGB5 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    }
  }
  onRGB4() {
    if (this.chosenRGB.red === this.rgb4.red && this.chosenRGB.green === this.rgb4.green && this.chosenRGB.blue === this.rgb4.blue) {
      this.streak += 1;
      this.color.setCookie("hardStreak", this.streak, 1);
      this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
    } else if (this.chosenRGB.red === this.rgb1.red && this.chosenRGB.green === this.rgb1.green && this.chosenRGB.blue === this.rgb1.blue) {
      this.showRGB5 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB3 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB5 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB3 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb2.red && this.chosenRGB.green === this.rgb2.green && this.chosenRGB.blue === this.rgb2.blue) {
      this.showRGB1 = false;
      this.showRGB3 = false;
      this.showRGB4 = false;
      this.showRGB5 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB3 = true;
        this.showRGB4 = true;
        this.showRGB5 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb3.red && this.chosenRGB.green === this.rgb3.green && this.chosenRGB.blue === this.rgb3.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB5 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB5 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb5.red && this.chosenRGB.green === this.rgb5.green && this.chosenRGB.blue === this.rgb5.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB3 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB3 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb6.red && this.chosenRGB.green === this.rgb6.green && this.chosenRGB.blue === this.rgb6.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB3 = false;
      this.showRGB5 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB3 = true;
        this.showRGB5 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    }
  }
  onRGB5() {
    if (this.chosenRGB.red === this.rgb5.red && this.chosenRGB.green === this.rgb5.green && this.chosenRGB.blue === this.rgb5.blue) {
      this.streak += 1;
      this.color.setCookie("hardStreak", this.streak, 1);
      this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
    } else if (this.chosenRGB.red === this.rgb1.red && this.chosenRGB.green === this.rgb1.green && this.chosenRGB.blue === this.rgb1.blue) {
      this.showRGB5 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB3 = false;
      this.showRGB6 = false;
      this.color.setCookie("hardStreak", this.streak, 1);
      this.streak = 0;
      setTimeout(() => {
        this.showRGB5 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB3 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb2.red && this.chosenRGB.green === this.rgb2.green && this.chosenRGB.blue === this.rgb2.blue) {
      this.showRGB1 = false;
      this.showRGB3 = false;
      this.showRGB4 = false;
      this.showRGB5 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB3 = true;
        this.showRGB4 = true;
        this.showRGB5 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb3.red && this.chosenRGB.green === this.rgb3.green && this.chosenRGB.blue === this.rgb3.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB5 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB5 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb4.red && this.chosenRGB.green === this.rgb4.green && this.chosenRGB.blue === this.rgb4.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB5 = false;
      this.showRGB3 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB5 = true;
        this.showRGB3 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb6.red && this.chosenRGB.green === this.rgb6.green && this.chosenRGB.blue === this.rgb6.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB3 = false;
      this.showRGB5 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB3 = true;
        this.showRGB5 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    }
  }
  onRGB6() {
    if (this.chosenRGB.red === this.rgb6.red && this.chosenRGB.green === this.rgb6.green && this.chosenRGB.blue === this.rgb6.blue) {
      this.streak += 1;
      this.color.setCookie("hardStreak", this.streak, 1);
      this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
    } else if (this.chosenRGB.red === this.rgb1.red && this.chosenRGB.green === this.rgb1.green && this.chosenRGB.blue === this.rgb1.blue) {
      this.showRGB5 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB3 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB5 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB3 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb2.red && this.chosenRGB.green === this.rgb2.green && this.chosenRGB.blue === this.rgb2.blue) {
      this.showRGB1 = false;
      this.showRGB3 = false;
      this.showRGB4 = false;
      this.showRGB5 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB3 = true;
        this.showRGB4 = true;
        this.showRGB5 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb3.red && this.chosenRGB.green === this.rgb3.green && this.chosenRGB.blue === this.rgb3.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB5 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB5 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb4.red && this.chosenRGB.green === this.rgb4.green && this.chosenRGB.blue === this.rgb4.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB5 = false;
      this.showRGB3 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB5 = true;
        this.showRGB3 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    } else if (this.chosenRGB.red === this.rgb5.red && this.chosenRGB.green === this.rgb5.green && this.chosenRGB.blue === this.rgb5.blue) {
      this.showRGB1 = false;
      this.showRGB2 = false;
      this.showRGB4 = false;
      this.showRGB3 = false;
      this.showRGB6 = false;
      this.streak = 0;
      this.color.setCookie("hardStreak", this.streak, 1);
      setTimeout(() => {
        this.showRGB1 = true;
        this.showRGB2 = true;
        this.showRGB4 = true;
        this.showRGB3 = true;
        this.showRGB6 = true;
        this.color.generateHardRGB(this.rgb1, this.rgb2, this.rgb3, this.rgb4, this.rgb5, this.rgb6, this.chosenRGB);
      }, 1500);
    }
  }
}
