import * as Char from '../entities/char';

export class CharFactory {
    private static listChars = {
        goku: Char.Goku,
        gohan: Char.Gohan,
        vegeta: Char.Vegeta,
        android17: Char.Android17
    };

    static create(type) {
        return new this.listChars[type]();
    }
}
