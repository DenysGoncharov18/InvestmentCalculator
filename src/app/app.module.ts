
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import {UserInputModule} from "./user-input/input.module"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    InvestmentResultsComponent],
  imports: [BrowserModule, UserInputModule],
    bootstrap: [AppComponent]
})
export class AppModule{

}
