export default class FlashCard {

    constructor(id, word, translation) {
        this._id = id;
        this._word = word;
        this._translation = translation;
        this._isChecked = false;
        console.log(`FlashCard created. Word: ${this._word}, ${this._translation}, ${this._id}`);
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

    // set id(value) {
    //     this._id = value;
    // }

    // set word(value) {
    //     this._value = value;
    // }

    // set translation(value) {
    //     this._translation = value;
    // }

}

// console.log(new FlashCard(0, "cat","kot"));
