export const NUMBERS: { [key: string]: string } = {
	'1': 'one',
	'2': 'two',
	'3': 'three',
	'4': 'four',
	'5': 'five',
	'6': 'six',
	'7': 'seven',
	'8': 'eight',
	'9': 'nine',
	'0': 'zero'
};

export const SYMBOLS: { [key: string]: string } = {
	'!': 'exclamation',
	'?': 'question'
};

const emojify = (input: string): string => {
	let res = '';
	input.split('').forEach((char) => {
		if (/[a-zA-Z]/.test(char)) {
			res += `:regional_indicator_${char}:`;
		} else if (NUMBERS[char] !== undefined) {
			res += `:${NUMBERS[char]}:`;
		} else if (SYMBOLS[char] !== undefined) {
			res += `:${SYMBOLS[char]}:`;
		} else {
			res += char;
		}

		res += ' ';
	});

	res = res.replace(':exclamation: :exclamation:', ':bangbang:');
	res = res.replace(':exclamation: :question:', ':interrobang:');

	return res.trim();
};

export default emojify;
