export default class LocalStorage {
  constructor(itemName) {
    this.storage = window.localStorage;
    this.itemName = itemName;

    this.getStoredData = this.getStoredData.bind(this);
    this.storeData = this.storeData.bind(this);
    this.dropStoredData = this.dropStoredData.bind(this);
  }

  getStoredData() {
    return JSON.parse(this.storage.getItem(this.itemName));
  }

  storeData(data) {
    this.storage.setItem(this.itemName, JSON.stringify(data));
  }

  dropStoredData() {
    this.storage.removeItem(this.itemName);
  }
}
