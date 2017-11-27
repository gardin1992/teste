import * as Phaser from 'phaser-ce';
//
import {HomeState} from './states/home';
import {CharState} from './states/chart';
import {BattleState} from './states/battle';

export class Game {
    static run() {

        const game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example');
        game.state.add('HomeState', HomeState);
        game.state.add('CharState', CharState);
        game.state.add('BattleState', BattleState);
        game.state.start('CharState');
    }

}
