import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EasyModeComponent } from './easy-mode/easy-mode.component';
import { HardModeComponent } from './hard-mode/hard-mode.component';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "easy-mode", component: EasyModeComponent},
  {path: "hard-mode", component: HardModeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EasyModeComponent,
    HardModeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
