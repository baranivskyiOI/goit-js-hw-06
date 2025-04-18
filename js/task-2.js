
class Storage{
    #items = [];

    constructor(itemsArr) {
        this.#items = itemsArr;
    }

    getItems() {
        return this.#items;
    }

    addItem(item) {
        this.#items.push(item);
    }

    removeItem(itemToRemove) {
        return this.#items = this.#items.filter(item => {
            return item !== itemToRemove;
        });
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
