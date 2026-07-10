const clampUint = /* @__PURE__ */ (x: number, max: number) => {
	return x < 0 ? 0 : (x > max ? max : x);
}

const rgbTableCentered = /* @__PURE__ */ () => {
	const size = 384;

	const colors = new Uint8Array(size);
	const centroid = [0, 0, 0];

	// Write colors & accumulate centroid.
	// We need to do this, since the entire image can be easily biased
	// towards a single color if enough of the palette consists of it.
	for (let i=0; i<size; i++) {
		centroid[i % 3] += ((colors[i] = Math.round(Math.random() * 255)) - 127.5) * (1 / 128);
	}

	// Subtract centroid & clamp
	for (let i=0; i<size; i++) {
		colors[i] = clampUint(colors[i] - centroid[i % 3], 255);
	}

	return colors;
}

export default function makeNoiseGif(width: number, height: number = width): string {
	const toStr = String.fromCharCode;
	const stringOfChars = (length: number, cb: (x: undefined, i: number) => string) => Array.from({ length }, cb).join('');

	const colorTable = RGB ?
		toStr(...rgbTableCentered()) :
		stringOfChars(128, (_, i) => toStr(Math.round(i * (255 / 127))).repeat(3));

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

	return 'data:image/gif;base64,' + btoa(`GIF89a${sizeString}\xf6\0\0${colorTable},\0\0\0\0${sizeString}\0\x07${body}\0;`);
}
