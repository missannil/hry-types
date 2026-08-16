/**
 * 通过as DetailedType指定具体类型。
 */
export type DetailedType<T = unknown> = (() => T) | (new(...arg: unknown[]) => T);
