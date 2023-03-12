class Airplane {
    constructor(_prefix, _manufacture, _aircraft) {
        this._prefix = _prefix;
        this._manufacture = _manufacture;
        this._aircraft = _aircraft;
    }
    get prefix() {
        return this._prefix;
    }
    get manufacture() {
        return this._manufacture;
    }
    get aircraft() {
        return this._aircraft;
    }
}
