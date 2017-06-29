import { Component } from '@angular/core';

@Component ({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
    title: string='1st photo';
    photo: string='http://placehold.it/800X500?text=Angular Basics';
    description: string = 'A description of my 1st photo';
    comments: any[]= [
        {name: "John", comment: "A comment"},
        {name: "Jim", comment: "A comment"},
        {name: "Jen", comment: "A comment"}
    ]
}