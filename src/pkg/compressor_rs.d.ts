/* tslint:disable */
/* eslint-disable */

export class ImageResult {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    readonly bytes: Uint8Array;
    readonly height: number;
    readonly quality: number;
    readonly width: number;
}

export class PdfResult {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    readonly bytes: Uint8Array;
    readonly input_size: number;
    readonly output_size: number;
    readonly pages: number;
}

export class WatermarkResult {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    readonly bytes: Uint8Array;
    readonly format: string;
    readonly height: number;
    readonly width: number;
}

export function compress(input: Uint8Array | number[], width: number, height: number, quality: number, format: string, max_bytes: number, skip_below_bytes: number): ImageResult;

export function compress_pdf(input: Uint8Array | number[], jpeg_quality: number): PdfResult;

export function watermark_image(input: Uint8Array | number[], text: string, font_percent: number, opacity: number, color: string, position: string): WatermarkResult;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_imageresult_free: (a: number, b: number) => void;
    readonly __wbg_pdfresult_free: (a: number, b: number) => void;
    readonly __wbg_watermarkresult_free: (a: number, b: number) => void;
    readonly compress: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => [number, number, number];
    readonly compress_pdf: (a: number, b: number, c: number) => [number, number, number];
    readonly imageresult_bytes: (a: number) => [number, number];
    readonly imageresult_height: (a: number) => number;
    readonly imageresult_quality: (a: number) => number;
    readonly imageresult_width: (a: number) => number;
    readonly pdfresult_bytes: (a: number) => [number, number];
    readonly pdfresult_input_size: (a: number) => number;
    readonly pdfresult_output_size: (a: number) => number;
    readonly pdfresult_pages: (a: number) => number;
    readonly watermark_image: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => [number, number, number];
    readonly watermarkresult_bytes: (a: number) => [number, number];
    readonly watermarkresult_format: (a: number) => [number, number];
    readonly watermarkresult_height: (a: number) => number;
    readonly watermarkresult_width: (a: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
