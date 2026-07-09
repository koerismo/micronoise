export default function makeNoiseGif(width: number, height: number): string {
	const toStr = String.fromCharCode;
	const stringOfChars = (length: number, cb: (x: undefined, i: number) => string) => Array.from({ length }, cb).join('');

	const colorTable = stringOfChars(128, (_, i) => toStr(Math.round(i * 2.0079)).repeat(3));	

	const toU16String = (n: number) => toStr(n & 0xff, n >> 8);
	const sizeString = toU16String(width) + toU16String(height);
	const pixelCount = width * height;

	let body = '', idx = 0;
	for (; idx < pixelCount; idx += 126) {
		const length = Math.min(126, pixelCount - idx);
		body +=
			toStr(length + 1) +
			'\x80' +
			stringOfChars(length, () => toStr(Math.round(Math.random() * 127)));
	}

	return 'data:image/gif,base64;' + btoa(`GIF89a${sizeString}\xf6\0\0${colorTable},\0\0\0\0${sizeString}\0\x07${body}\0;`);
}
