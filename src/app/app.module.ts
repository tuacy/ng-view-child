import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestDirective } from './test.directive';
import { ChildComponent } from './child.component';
import {StringTokenService} from './string-token-service';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
