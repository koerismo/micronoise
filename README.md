# micronoise

A very very small library to generate white noise images on the fly.

```ts
import gifNoise from '@koerismo/micronoise/gif';

// Color noise can also be generated with the respective modules:
// import gifNoise from '@koerismo/micronoise/gif/rgb';

document.body.style.background = 'url(' + gifNoise(256, 256) + ')';
```

### ...What?

I wanted to add a noise image to my website, but I ran into some problems:
- I wanted the images to load quickly, so they couldn't be too large or high-quality.
- I wanted the images to not visibly tile across the page, so they couldn't be too small or low-quality.

Turns out, even with good compression, an *acceptable* quality noise image is about 6kb large. So what if you just generated them on the fly?


| Format   | Minified Size | Avg. Speed* | Notes                        |
| -------- | ------------- | ----------- | ---------------------------- |
| png      |  308b         | ~8.8ms      | Relies on HTML Canvas.       |
| gif      |  398b         | ~10.9ms     |                              |
| tga      |  231b         | ~1.5ms      |                              |
|          |               |             |                              |
| png/rgb  |  298b         | ~24.6ms     | Relies on HTML Canvas.       |
| gif/rgb  |  571b         | ~9.9ms      |                              |
| tga/rgb  |  234b         | ~3.1ms      |                              |

*\* Tested on Firefox to create 512x512 images with 200 iterations.*
