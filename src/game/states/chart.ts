import {Chars as Images} from '../utils/images';

export class CharState {

    private numPlayer = 1;
    private game;

    private selected = {
        char1: '',
        char2: ''
    };

    static over(target: any) {
        target.alpha = 1;
    }

    static out(target: any) {
        target.alpha = 0;
    }

    private preload() {

        this.game.load.image('chars', Images.chars.mono);
        //
        this.game.load.spritesheet('android17', Images.android17.player);
        this.game.load.spritesheet('gohan', Images.gohan.player);
        this.game.load.spritesheet('goku', Images.goku.player);
        this.game.load.spritesheet('vegeta', Images.vegeta.player);

    }

    private createText() {

        const style = {font: 'bold 20px Arial', fill: '#fff', boundsAlignH: 'center', boundsAlignV: 'middle'};
        const text = this.game.add.text(0, 100, 'Player' + this.numPlayer, style);
        text.setTextBounds(0, 0, 800);

    }

    private createButtons() {

        const chars = this.game.add.image(100, 124, 'chars', this);
        const android17 = this.createButton(chars.x + 192, chars.y, 'android17', 'android17');
        const goku = this.createButton(android17.right, chars.y, 'goku', 'goku');
        const vegeta = this.createButton(goku.right, chars.y, 'vegeta', 'vegeta');
        const gohan = this.createButton(vegeta.right, chars.y, 'gohan', 'gohan');

    }

    private create() {

        this.game.stage.backgroundColor = '#989898';

        this.createText();
        this.createButtons();

    }

    private createButton(x, y, key, data = null) {

        const button = this.game.add.button(x, y, key, this.callback, this, 2, 1, 0);
        button.alpha = 0;
        button.data = data;
        button.onInputOver.add(CharState.over, this);
        button.onInputOut.add(CharState.out, this);

        return button;

    }

    private callback(evt) {

        this.selected['char' + this.numPlayer] = evt.data;

        this.createButton(this.numPlayer === 1 ? 0 : 740, 0, evt.data).alpha = 1;

        (this.numPlayer === 2) ? this.game.state.start('BattleState', true, false, this.selected) : this.numPlayer++;

    }

}
