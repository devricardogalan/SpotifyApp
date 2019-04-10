import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss']
})

export class SearchBarComponent {
    searchString: string;
    results: string[];

}


