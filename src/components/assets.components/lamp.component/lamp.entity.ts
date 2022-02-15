export class LampEntity {
    private _isOn: boolean;

    constructor(state: boolean){
        this._isOn = state
    }

    get isOn(): boolean {
        return this._isOn
    }

    set setIsOn(newState: boolean) {
        this._isOn = newState;
    }

    toggleLamp(){
        this._isOn = !this.isOn;
    }
}