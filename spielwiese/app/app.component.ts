import { Component } from '@angular/core';
import {TalkService} from './talk.service';
import {Talk} from './talk';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers: [TalkService]
})
export class AppComponent {
    constructor(private talkService: TalkService) { };
    
    talks = this.talkService.getTalks();
}
