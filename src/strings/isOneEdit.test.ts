import isOneEdit from './isOneEdit';

describe('Detect if strings are one edit (replace letter, remove letter) away', () => {
	it('replacement', () => expect(isOneEdit('poe', 'pot')).toBe(true));
	it('removal', () => expect(isOneEdit('poe', 'poet')).toBe(true));
	it('addition', () => expect(isOneEdit('neat', 'net')).toBe(true));
	it('addition', () => expect(isOneEdit('', 'o')).toBe(true));
	it('bad case 1 addition', () => expect(isOneEdit('omg', 'o')).toBe(false));
	it('bad case 2 addition', () => expect(isOneEdit('oo', '')).toBe(false));
	it('bad case 3 addition', () => expect(isOneEdit('dog', 'cat')).toBe(false));
	it('bad case 3 addition', () => expect(isOneEdit('dog', 'dote')).toBe(false));
	it('bad case 2 replacement + addition', () => expect(isOneEdit('bake', 'bales')).toBe(false));
	it('bad case 3 replacement', () => expect(isOneEdit('poke', 'port')).toBe(false));
	it('some case X', () => expect(isOneEdit('pale', 'ple')).toBe(true));
	it('some case Y', () => expect(isOneEdit('pales', 'pale')).toBe(true));
	it('some case Z', () => expect(isOneEdit('pale', 'bale')).toBe(true));
});
