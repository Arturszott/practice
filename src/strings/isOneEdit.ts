export default function isOneEdit(s1: string, s2: string) {
	if (Math.abs(s1.length - s2.length) > 1) return false;
	let replaced = false;
	let removed = false;
	let p1 = 0;
	let p2 = 0;

	for (let i = 0; i < Math.max(s1.length, s2.length); i++) {
		if (s1[p1] !== s2[p2]) {
			if (removed && p1 !== p2) return false;
			if (replaced) return false;

			if (s2.length > s1.length) {
				p2++;
				removed = true;
			} else if (s1.length > s2.length) {
				p1++;
				removed = true;
			} else {
				replaced = true;
				p1++;
				p2++;
			}
		} else {
			p1++;
			p2++;
		}
	}

	return true;
}
