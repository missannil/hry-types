declare const emptyObjectSymbol: unique symbol;

/**
 * Represents a strictly empty plain object, the `{}` value.
 * @description 表示一个严格空的普通对象，即“{}”值。
 * @category Misc
 */
export type EmptyObject = { [emptyObjectSymbol]?: never };
