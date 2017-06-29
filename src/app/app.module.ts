import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {EntryListComponent,EntryComponent} from './entries';

@NgModule({
    imports: [BrowserModule],

    //register components
    declarations: [
        AppComponent,
        EntryComponent,
        EntryListComponent    
        ],

    //top-level components = root of the application 
    bootstrap: [AppComponent]
})

export class AppModule {

}