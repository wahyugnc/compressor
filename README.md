# compressor

On-device image and PDF compression. Runs entirely in the browser. No server, no upload.

## Install

```bash
npm install compressor
```

## Usage

### Compress image

```js
import { compressImage } from 'compressor'

const input = new Uint8Array(await file.arrayBuffer())
const result = await compressImage(input, {
  width: 1280,
  height: 1280,
  quality: 80,
  format: 'jpeg',
  maxBytes: 0,
})

// result.bytes   — Uint8Array
// result.width   — number
// result.height  — number
// result.quality — number
```

### Compress PDF

```js
import { compressPdf } from 'compressor'

const input = new Uint8Array(await file.arrayBuffer())
const result = await compressPdf(input, 60) // jpeg quality 1–100

// result.bytes      — Uint8Array
// result.inputSize  — number
// result.outputSize — number
// result.pages      — number
```

### Manual init

The library auto-initializes on first call. To pre-load:

```js
import { init } from 'compressor'
await init()
```

## API

### `compressImage(input: Uint8Array, options?): Promise<ImageCompressResult>`

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `width` | number | 1280 | Max width |
| `height` | number | 1280 | Max height |
| `quality` | number | 80 | JPEG quality 1–100 |
| `format` | string | 'jpeg' | Output: 'jpeg', 'png', 'webp' |
| `maxBytes` | number | 0 | Target size in bytes (0 = no limit) |

### `compressPdf(input: Uint8Array, jpegQuality?): Promise<PdfCompressResult>`

Re-encodes safe embedded images (JPEG, 8-bit Gray/RGB with Flate/LZW/RunLength/no filter, ICCBased N=1|3, Indexed DeviceRGB, sub-byte 1/2/4-bit) as JPEG. Already-efficient or ambiguous formats (JPX, CCITT, JBIG2, CMYK, masks, custom Decode) stay byte-preserved.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `jpegQuality` | number | 60 | JPEG quality 1–100 |

## License

MIT