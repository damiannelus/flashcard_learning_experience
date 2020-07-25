export default class FlashCard {

    constructor(id, word, translation) {
        this._id = id;
        this._word = word;
        this._translation = translation;
        this._isChecked = false;
    }

    get id(){
        return this._id;
    }

    get word() {
        return this._word;
    }

    get translation() {
        return this._translation;
    }

    get isChecked() {
        return this._isChecked;
    }

    set isChecked(status) {
        this._isChecked = status;
    }
}
