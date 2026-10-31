import init, { compress as _compress, compress_pdf as _compressPdf } from './pkg/compressor_rs.js'

let _initPromise = null

function ensureInit() {
  if (!_initPromise) _initPromise = init()
  return _initPromise
}

/**
 * Compress an image (JPEG, PNG, WebP) in the browser.
 *
 * @param {Uint8Array} input - Raw image bytes
 * @param {object} options
 * @param {number} [options.width=1280] - Max width
 * @param {number} [options.height=1280] - Max height
 * @param {number} [options.quality=80] - JPEG quality 1–100
 * @param {string} [options.format='jpeg'] - Output format: 'jpeg', 'png', 'webp'
 * @param {number} [options.maxBytes=0] - Target file size in bytes (0 = no limit)
 * @param {number} [options.skipBelowBytes=100000] - Return same-format images below this size unchanged (0 disables)
 * @returns {Promise<{ bytes: Uint8Array, width: number, height: number, quality: number }>}
 */
export async function compressImage(input, options = {}) {
  await ensureInit()
  const { width = 1280, height = 1280, quality = 80, format = 'jpeg', maxBytes = 0, skipBelowBytes = 100_000 } = options
  const result = _compress(input, width, height, quality, format, maxBytes, skipBelowBytes)
  return {
    bytes: result.bytes,
    width: result.width,
    height: result.height,
    quality: result.quality,
  }
}

/**
 * Compress a PDF in the browser. Re-encodes safe embedded images as JPEG,
 * preserves already-efficient or ambiguous formats byte-for-byte.
 *
 * @param {Uint8Array} input: Uint8Array, inputSize: number, outputSize: number, pages: number }>}
 */
export async function compressPdf(input, jpegQuality = 60) {
  await ensureInit()
  const result = _compressPdf(input, jpegQuality)
  return {
    bytes: result.bytes,
    inputSize: result.input_size,
    outputSize: result.output_size,
    pages: result.pages,
  }
}

export { ensureInit as init }