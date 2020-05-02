export default class predefiendSet {
  constructor(name, path) {
    this._path = path;
    this._name = name;
  }

  get path() {
    return this._path;
  }

  get name() {
    return this._name;
  }
}
