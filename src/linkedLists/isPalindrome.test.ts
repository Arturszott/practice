import createDoublyLinkedList from './createDoublyLinkedList';

import isPalindrome from './isPalindrome';

describe('isPalindrome', () => {
	describe('should check if list is palindrome', () => {
		describe('positive cases', () => {
			test('should be ok with odd number with elements', () => {
				expect(isPalindrome(createDoublyLinkedList<string>(['a', 'b', 'a']))).toBe(true);
			});

			test('should be ok with even number with elements', () => {
				expect(isPalindrome(createDoublyLinkedList<string>(['a', 'a']))).toBe(true);
			});

			test('should be ok with even number with elements longer', () => {
				expect(isPalindrome(createDoublyLinkedList<string>(['a', 'a', 'c', 'c', 'a', 'a']))).toBe(true);
			});

			test('should be ok with odd number with elements longer', () => {
				expect(isPalindrome(createDoublyLinkedList<string>(['a', 'a', 'c', 'a', 'a']))).toBe(true);
			});
		});

		describe('negative cases', () => {
			test('should NOT be ok with odd number with elements', () => {
				expect(isPalindrome(createDoublyLinkedList<string>(['a', 'b', 'b']))).toBe(false);
			});

			test('should NOT be ok with even number with elements', () => {
				expect(isPalindrome(createDoublyLinkedList<string>(['c', 'd']))).toBe(false);
			});

			test('should NOT be ok with even number with elements longer', () => {
				expect(isPalindrome(createDoublyLinkedList<string>(['a', 'a', 'c', 'c', 'x', 'a']))).toBe(false);
			});

			test('should NOT be ok with odd number with elements longer', () => {
				expect(isPalindrome(createDoublyLinkedList<string>(['a', 'a', 'c', 'a', 'x']))).toBe(false);
			});
		});
	});
});
