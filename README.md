# micronoise

A very very small library to generate white noise images on the fly.

```ts
import gifNoise from '@koerismo/micronoise/gif';
document.body.style.background = 'url(' + gifNoise(256, 256) + ')';
```

### ...What?

I wanted to add a noise image to my website, but I ran into some problems:
- I wanted the images to load quickly, so they couldn't be too large or high-quality.
- I wanted the images to not visibly tile across the page, so they couldn't be too small or low-quality.

Turns out, even with good compression, an *acceptable* quality noise image is about 6kb large. So what if you just generated them on the fly?


| Format | Minified Size | Avg. Speed | Notes                           |
| ------ | ------------- | ---------- | ------------------------------- |
| png    |  299b         | ~~~        | Relies on HTML Canvas.          |
| gif    |  393b         | ~~~        |                                 |
| tga    |  253b         | ~~~        | Not commonly supported.         |
