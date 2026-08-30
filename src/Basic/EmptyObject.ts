declare const emptyObjectSymbol: unique symbol;

/**
 * 表示一个空对象类型。
 */
export type EmptyObject = { [emptyObjectSymbol]?: never };
