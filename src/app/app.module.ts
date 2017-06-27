import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';

@NgModule({
    imports: [BrowserModule],

    //register components
    declarations: [AppComponent],

    //top-level components = root of the application 
    bootstrap: [AppComponent]
})

export class AppModule {

}