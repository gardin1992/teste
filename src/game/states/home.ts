export class HomeState {
    private game;
    private images = {
        'background': 'assets/home/bg.jpg',
        'player': 'assets/home/user.png'
    };

    private preload() {
        this.game.load.image('background', this.images.background);
        this.game.load.spritesheet('player', this.images.player, 100, 100);
    }

    private create() {

        this.game.stage.backgroundColor = '#182d3b';

        this.game.add.tileSprite(0, 0, 800, 600, 'background');

        const start = this.game.add.text(350, 50, 'START', {font: '50px Arial', fill: 'red'});
        start.inputEnabled = true;
        start.events.onInputUp.add(this.onClickStart, this);
    }

    private onClickStart() {
        this.game.state.start('CharState');
    }

}
