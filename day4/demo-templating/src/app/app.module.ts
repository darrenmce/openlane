import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { StringListComponent } from './string-list/string-list.component';
import { ToUpperCasePipe } from './to-upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    StringListComponent,
    ToUpperCasePipe,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
