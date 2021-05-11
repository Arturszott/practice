function replaceSpacesInArray(array: string[], trueLength: number) {
	let offset = array.length - trueLength;
	let p1 = array.length - 1;
	let p2 = array.length - 1 - offset;

	for (let i = 0; i < trueLength; i++) {
		if (array[p2] == ' ') {
			array[p1] = '0';
			array[p1 - 1] = '2';
			array[p1 - 2] = '%';
			p1 -= 3;
			p2--;
		} else {
			array[p1] = array[p2];
			p1--;
			p2--;
		}
	}

	return array;
}

export default function replaceSpaces(string: string, trueLength: number) {
	const letters = string.split('');

	const result = replaceSpacesInArray(letters, trueLength);

	return result.join('');
}
