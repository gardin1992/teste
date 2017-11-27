import {Player} from '../entities/player';

export class PlayerFactory {
    static create(name: string) {
        return new Player(name);
    }
}
