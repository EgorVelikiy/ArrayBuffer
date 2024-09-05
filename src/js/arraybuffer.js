import getBuffer from './func'


export default class ArrayBuffer {

    load(buffer) {
        this.buffer = getBuffer(buffer);
    }

    toString() {
        return String.fromCharCode(...new Uint16Array(this.buffer));
    }
}