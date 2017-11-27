import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Game} from '../game/run';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'app';

    ngOnInit(): void {
        Game.run();
    }
}
