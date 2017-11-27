import {CharAbstract} from '../abstracties/char';

export class Char extends CharAbstract {

    private _name = '';
    private _life = 100;
    private _stamine = 100;
    private _atkPhy = 50;
    private _atkMag = 50;
    private _defMag = 50;
    private _defPhy = 50;
    private _speedPhy = 50;
    private _speedMag = 50;
    private _sprite;
    private _type;
    private _nextFire = 0;
    private _fireRate = 0;

    constructor(type) {
        super();
        this.type = type;
    }

    get fireRate(): number {
        return this._fireRate;
    }

    set fireRate(value: number) {
        this._fireRate = value;
    }

    get type() {
        return this._type;
    }

    get nextFire(): number {
        return this._nextFire;
    }

    set nextFire(value: number) {
        this._nextFire = value;
    }

    set type(value) {
        this._type = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get life(): number {
        return this._life;
    }

    set life(value: number) {
        this._life = value;
    }

    get sprite() {
        return this._sprite;
    }

    set sprite(value) {
        this._sprite = value;
    }

    get stamine(): number {
        return this._stamine;
    }

    set stamine(value: number) {
        this._stamine = value;
    }

    get atkPhy(): number {
        return this._atkPhy;
    }

    set atkPhy(value: number) {
        this._atkPhy = value;
    }

    get atkMag(): number {
        return this._atkMag;
    }

    set atkMag(value: number) {
        this._atkMag = value;
    }

    get defMag(): number {
        return this._defMag;
    }

    set defMag(value: number) {
        this._defMag = value;
    }

    get defPhy(): number {
        return this._defPhy;
    }

    set defPhy(value: number) {
        this._defPhy = value;
    }

    get speedPhy(): number {
        return this._speedPhy;
    }

    set speedPhy(value: number) {
        this._speedPhy = value;
    }

    get speedMag(): number {
        return this._speedMag;
    }

    set speedMag(value: number) {
        this._speedMag = value;
    }
}

export class Goku extends Char {
    constructor(type) {
        super(type);
        this.name = 'Goku';
        this.atkPhy += this.atkPhy * 1.6;
        this.defPhy += this.defPhy * 1.6;
        this.atkMag -= this.atkMag * 1.6;
        this.defMag -= this.defMag * 1.6;
    }
}

export class Gohan extends Char {
    constructor(type) {
        super(type);
        this.name = 'Gohan';
        this.atkPhy -= this.atkPhy * 1.6;
        this.defPhy -= this.defPhy * 1.6;
        this.atkMag *= this.atkMag * 1.6;
        this.defMag *= this.defMag * 1.6;
    }
}

export class Vegeta extends Char {
    constructor(type) {
        super(type);
        this.name = 'Vegeta';
        this.atkPhy += this.atkPhy * 1.6;
        this.defPhy += this.defPhy * 1.6;
        this.atkMag -= this.atkMag * 1.6;
        this.defMag -= this.defMag * 1.6;
    }
}

export class Android17 extends Char {
    constructor(type) {
        super(type);
        this.name = 'Android17';
        this.atkPhy += this.atkPhy * 1.6;
        this.defPhy += this.defPhy * 1.6;
        this.atkMag -= this.atkMag * 1.6;
        this.defMag -= this.defMag * 1.6;
    }
}
