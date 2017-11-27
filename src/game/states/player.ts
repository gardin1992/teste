import {PlayerFactory} from '../factories/player';

export class PlayerState {
    private static numPlayer = 0;
    private game: Phaser.Game;
    private images = {
        'background': '',
        'confirm': '',
        'cancel': ''
    };

    static addPlayer() {
        this.numPlayer++;
    }

    static get NumPlayers() {
        return this.numPlayer;
    }

    private preload() {
        this.game.load.spritesheet('confirm', this.images.confirm, 100, 50);
        this.game.load.spritesheet('cancel', this.images.cancel, 100, 50);
        //
    }

    private create() {

        this.game.stage.backgroundColor = '#000';
        this.game.add.button(50, 50, 'confirm', this.onConfirm, this, 2, 1, 0);
        this.game.add.button(650, 50, 'cancel', this.onCancel, this, 2, 1, 0);
    }

    private onConfirm() {

        if (PlayerState.NumPlayers < 2) {

            PlayerFactory.create('settedname');
            this.game.state.start('HomeState');
        } else {
            this.game.state.start('CharState');
        }
    }

    private onCancel() {
        this.game.state.start('HomeState');
    }
}
