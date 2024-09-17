import ArrayBufferConverter  from '../arraybuffer'
import getBuffer from '../func'

test('Testing ArrayBuffer', () => {
	const buffer = new ArrayBufferConverter ();
	const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

	buffer.load(data);
	expect(buffer.toString()).toBe(data)
})

test('Testing UintArray', () => {
	const buffer = new ArrayBufferConverter ();
	buffer.load()
	const formFucn = getBuffer()
	expect(buffer.buffer).toEqual(formFucn)
})
