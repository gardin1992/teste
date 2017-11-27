export class EndBattleState {
    private game;
    private images = {
        'background': 'assets/home/bigdata.jpg',
        'player': 'assets/home/user.png',
        'exit': 'assets/home/exit.jpg',
        'start': 'assets/home/start.png',
    };

    private preload() {
        this.game.load.image('background', this.images.background);
        this.game.load.spritesheet('start', this.images.start, 100, 50);
        this.game.load.spritesheet('exit', this.images.exit, 100, 50);
        this.game.load.spritesheet('player', this.images.player, 100, 100);
    }

    private create() {

        this.game.stage.backgroundColor = '#989898';

        this.game.add.button(250, 200, 'player', this.onSelectPlayer, this, 2, 1, 0);
        this.game.add.button(450, 200, 'player', this.onSelectPlayer, this, 2, 1, 0);
        this.game.add.button(250, 200, 'player', this.onSelectPlayer, this, 2, 1, 0);
        this.game.add.button(450, 200, 'player', this.onSelectPlayer, this, 2, 1, 0);
        this.game.add.button(450, 200, 'player', this.onGoHome, this, 2, 1, 0);
        this.game.add.button(450, 200, 'player', this.onConfirm, this, 2, 1, 0);
    }

    private onSelectPlayer() {
    }

    private onConfirm() {
        this.game.state.start('PlayerState');
    }

    private onGoHome() {
    }

}
