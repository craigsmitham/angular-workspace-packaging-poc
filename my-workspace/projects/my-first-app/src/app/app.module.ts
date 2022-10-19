import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooModule } from 'projects/my-lib/foo/src/foo.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FooModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
