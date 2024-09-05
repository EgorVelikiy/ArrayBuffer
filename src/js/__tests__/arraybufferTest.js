import ArrayBuffer from '../arraybuffer'

test('Testing ArrayBuffer', () => {
	const buffer = new ArrayBuffer();
	const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

	buffer.load(data);
	expect(buffer.toString()).toBe(data)
})