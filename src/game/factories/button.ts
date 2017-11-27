export class ButtonFactory {
    static create(game: Phaser.Game, attributes: any) {
        return game.add.button(attributes.x, attributes.y, attributes.key, attributes.callback, attributes.callbackContext, 2, 1, 1);
    }
}

