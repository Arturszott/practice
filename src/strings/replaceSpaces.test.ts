import replaceSpaces from './replaceSpaces';

describe('replaceSpaces', () => {
	it('replaces spaces within string length', () => {
		let s1 = 'Mr John Smith    ';

		expect(replaceSpaces(s1, 13)).toBe('Mr%20John%20Smith');
	});
});
