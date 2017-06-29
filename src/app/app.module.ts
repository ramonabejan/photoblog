import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppComponent} from './app.component';
import {EntryListComponent,EntryComponent, EntryService} from './entries';
import {InMemoryEntryService} from './backend';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryEntryService)
    ],

    providers: [EntryService],

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