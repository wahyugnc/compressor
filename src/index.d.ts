export interface ImageCompressOptions {
  width?: number
  height?: number
  quality?: number
  format?: 'jpeg' | 'png' | 'webp'
  maxBytes?: number
  /** Return same-format images at or below this byte size unchanged. Set 0 to disable. Default: 100000. */
  skipBelowBytes?: number
}

export interface ImageCompressResult {
  bytes: Uint8Array
  width: number
  height: number
  quality: number
}

export interface PdfCompressResult {
  bytes: Uint8Array
  inputSize: number
  outputSize: number
  pages: number
}

export declare function compressImage(input: Uint8Array, options?: ImageCompressOptions): Promise<ImageCompressResult>
export declare function compressPdf(input: Uint8Array, jpegQuality?: number): Promise<PdfCompressResult>
export declare function init(): Promise<void>