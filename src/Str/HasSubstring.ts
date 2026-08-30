/**
 * 判断字符串 `Source` 是否包含子字符串 `Substring`。
 *
 * @param Source - 待检查的源字符串。
 * @param Substring - 要查找的子字符串。
 * @returns 如果 `Source` 包含 `Substring`，返回 `true`，否则返回 `false`。
 *
 * @example
 *
 * ```ts
 * type Test1 = HasSubstring<"hello world", "world">;
 * // => true
 *
 * type Test2 = HasSubstring<"hello world", "foo">;
 * // => false
 *
 * type Test3 = HasSubstring<"typescript", "script">;
 * // => true
 *
 * type Test4 = HasSubstring<"typescript", "type">;
 * // => true
 * ```
 */
export type HasSubstring<Source extends string, Substring extends string> = _HasSubstring<Source, Substring>;

export type _HasSubstring<Source, Substring> = Source extends `${string}${Substring & string}${string}` ? true
  : false;
