export default function makeNoisePng(width: number, height: number = width): string {
	const data = new Uint8ClampedArray(width * height * 4);

	for (let i=0; i<data.length;) {
		if (RGB) {
			data[i++] = (i & 0x3) == 0 ? 255 : Math.random() * 255;
		} else {
			data[i++] = data[i++] = data[i++] = Math.random() * (data[i++] = 255);
		}
	}
	
	const image = new ImageData(data, width);
	const canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;

	const ctx = canvas.getContext('2d')!;
	ctx.putImageData(image, 0, 0);
	
	canvas.remove();
	return canvas.toDataURL('image/png');
}
