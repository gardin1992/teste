import * as Images from '../utils/images';
import {Audio} from '../utils/audio';
import {CharFactory} from '../factories/chart';

export class BattleState {
    private player1;
    private player2;
    //
    private game;
    private data;

    private audios = {
        battle: null,
        shot1: null,
        shot2: null,
        death: null
    };

    static fire(game, player) {

        // game.physics.arcade.velocityFromRotation(player.sprite.rotation, player.speedPhy, player.sprite.body.velocity);

        if (game.time.now > player.nextFire && !player.enemyDead) {

            player.nextFire = game.time.now + player.fireRate;
            const bullet = player.bullets.getFirstExists(false);
            // bullet.reset(turret.x, turret.y);
            // bullet.rotation = game.physics.arcade.moveToPointer(bullet, 1000, 50, 500);
        }

    }

    private init(data) {
        this.data = data;
    }

    private preload() {
        this.loadImages();
        this.loadAudios();
    }

    private create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#2d2d2d';
        this.game.add.tileSprite(100, 50, 600, 400, 'background');

        this.player1 = CharFactory.create(this.data.char1);
        this.player2 = CharFactory.create(this.data.char1);

        this.player1.sprite = this.game.add.sprite(100, 100, 'player1');
        this.player2.sprite = this.game.add.sprite(500, 100, 'player2');

        this.game.physics.enable([this.player1.sprite, this.player2.sprite], Phaser.Physics.ARCADE);

        this.player1.sprite.body.setSize(87, 231, 0, 0);
        this.player2.sprite.body.setSize(87, 231, 0, 0);

        //  Our bullet group
        this.player1.bullets = this.game.add.group();
        this.player1.enableBody = true;
        this.player1.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.player1.bullets.createMultiple(30, 'bullet', 0, false);
        this.player1.bullets.setAll('anchor.x', 0.5);
        this.player1.bullets.setAll('anchor.y', 0.5);
        this.player1.bullets.setAll('outOfBoundsKill', true);
        this.player1.bullets.setAll('checkWorldBounds', true);

        //  Our bullet group
        this.player2.bullets = this.game.add.group();
        this.player2.enableBody = true;
        this.player2.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.player2.bullets.createMultiple(30, 'bullet', 0, false);
        this.player2.bullets.setAll('anchor.x', 0.5);
        this.player2.bullets.setAll('anchor.y', 0.5);
        this.player2.bullets.setAll('outOfBoundsKill', true);
        this.player2.bullets.setAll('checkWorldBounds', true);

        this.createImages();
        this.createButtons();
        this.createSprites();
        this.createTexts();
        this.createAudios();
    }

    private update() {
        // this.game.physics.arcade.collide(this.player1.sprite, this.player2.sprite, this.collisionHandler, null, this);

    }

    /* LOADS */
    private loadImages() {
        this.game.load.image('background', Images.Battle.scene.scene1);
        this.game.load.image('player1', Images.Chars[this.data.char1].player);
        this.game.load.image('player2', Images.Chars[this.data.char2].player);
        this.game.load.spritesheet('play', Images.Battle.buttons.play);
        this.game.load.spritesheet('bullet', Images.Battle.buttons.hadoukenlogo);
    }

    private loadAudios() {
        this.game.load.audio('death', Audio.death);
        this.game.load.audio('battle', Audio.battle);
        this.game.load.audio('shot1', Audio.shot1);
        this.game.load.audio('shot2', Audio.shot2);
    }

    private createPlayers() {

    }

    /* CREATES */
    private createImages() {
        this.game.add.image(0, 0, 'player1', this);
        this.game.add.image(740, 0, 'player2', this);
    }

    private createButtons() {
        this.createButton(0, 352, 'play', 'shot1', 'player1');
        this.createButton(740, 352, 'play', 'shot2', 'player2');
    }

    private createSprites() {

    }

    private createButton(x, y, key, name, player) {
        const that = this;
        const button = this.game.add.button(x, y, key, (btn) => {

            that.audios[btn.name].play();
            BattleState.fire(that, that[player]);

        }, 0, 1, 2);

        button.smoothed = false;
        button.name = name;

        return button;
    }

    private createAudios() {
        this.audios.battle = this.game.add.audio('battle');
        this.audios.shot1 = this.game.add.audio('shot1');
        this.audios.shot2 = this.game.add.audio('shot2');
        this.audios.death = this.game.add.audio('death');

        this.audios.battle.play();
    }

    private createTexts() {
        const style = {font: 'bold 32px Arial', fill: 'green', boundsAlignH: 'center', boundsAlignV: 'middle'};
        // char1
        this.game.add.text(0, 50, '100%', style).setTextBounds(0, 0, 400, 50);
        this.game.add.text(0, 100, this.player1.name, style).setTextBounds(0, 0, 400, 50);

        // char2
        this.game.add.text(0, 50, '100%', style).setTextBounds(400, 0, 400, 50);
        this.game.add.text(0, 100, this.player2.name, style).setTextBounds(400, 0, 400, 50);
    }

    /* ACTIONS */
    private collisionHandler(obj1, obj2) {
        this.game.stage.backgroundColor = '#992d2d';
    }
}
