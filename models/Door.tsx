export default class DoorModel {
    #number: number
    #selected: boolean
    #open: boolean
    #present: boolean

    constructor(number: number, selected = false, open = false, present = false) {
        this.#number = number
        this.#selected = selected
        this.#open = open
        this.#present = present
    }

    get number() {
        return this.#number
    }

    get selected() {
        return this.#selected
    }

    get open() {
        return this.#open
    }

    get present() {
        return this.#present
    }

    setSelected() {
        return new DoorModel(this.#number, this.#open ? this.#selected : !this.#selected, this.#open, this.#present)
    }

    setOpen() {
        return new DoorModel(this.#number, false, true, this.#present)
    }
}