export default function makeNoiseTga(width: number, height: number = width): string {
	const fsize = width * height + 20;
	const arr = new Uint8Array(fsize);

	arr[2] = 3;
	arr[7] = 8;
	arr[12] = width; arr[13] = width >> 8;
	arr[14] = height; arr[15] = height >> 8;
	arr[16] = 8;

	for (let i=20; i<fsize; i++)
		arr[i] = Math.round(Math.random() * 255);

	return 'data:image/targa;base64,' + btoa(String.fromCharCode(...arr));
}
