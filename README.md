# simple-discord-emojify

An open-source, 0 dependency, typescript compatible library that converts text into discord emojis without need of async.

Example (working test):

```ts
import emojify from 'simple-discprd-emojify';

const abecedary = 'abcdefghijklmnopqrstuvwxyz';

it('Works properly', () => {
	abecedary.split('').forEach((char) => {
		expect(emojify(char)).toStrictEqual(`:regional_indicator_${char}:`);
	});

	expect(emojify('1')).toStrictEqual(':one:');
	expect(emojify('2')).toStrictEqual(':two:');
	expect(emojify('3')).toStrictEqual(':three:');
	expect(emojify('4')).toStrictEqual(':four:');
	expect(emojify('5')).toStrictEqual(':five:');
	expect(emojify('6')).toStrictEqual(':six:');
	expect(emojify('7')).toStrictEqual(':seven:');
	expect(emojify('8')).toStrictEqual(':eight:');
	expect(emojify('9')).toStrictEqual(':nine:');

	expect(emojify('123')).toStrictEqual(':one: :two: :three:');

	expect(emojify('!')).toStrictEqual(':exclamation:');
	expect(emojify('?')).toStrictEqual(':question:');

	expect(emojify('!!')).toStrictEqual(':bangbang:');
	expect(emojify('!?')).toStrictEqual(':interrobang:');

	expect(emojify('_')).toStrictEqual('_');
});
```
