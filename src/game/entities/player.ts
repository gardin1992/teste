export class Player {
    private _name: string;
    private _win = 0;
    private _lose = 0;
    private _draw = 0;

    constructor(name: string) {
        this._name = name;
    }

    addWin() {
        this._win++;
    }

    addLose() {
        this._lose++;
    }

    addDraw() {
        this._draw++;
    }

    resetProperties() {
        this._win = 0;
        this._lose = 0;
        this._draw = 0;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get win(): number {
        return this._win;
    }

    set win(value: number) {
        this._win = value;
    }

    get lose(): number {
        return this._lose;
    }

    set lose(value: number) {
        this._lose = value;
    }

    get draw(): number {
        return this._draw;
    }

    set draw(value: number) {
        this._draw = value;
    }
}
