declare const emptyObjectSymbol: unique symbol;

/**
 * 表示一个严格空的普通对象。
 */
export type EmptyObject = { [emptyObjectSymbol]?: never };
