import type { EnsureNonEmptyStr } from "../Constraint/EnsureNonEmptyStr";
/**
 * 从字符串 `Source` 中移除所有匹配的子字符串 `Substring`。
 *
 * @remarks
 * 每次匹配到 `Substring` 后，将其从 `Source` 中移除，
 * 然后递归处理剩余字符串，直到 `Source` 中不再包含 `Substring`。
 *
 * `Substring` 应为非空字符串。
 *
 * @param Source - 待处理的源字符串。
 * @param Substring - 要移除的子字符串。
 * @returns 移除所有匹配子字符串后的字符串。
 *
 * @example
 *
 * ```ts
 * type Test1 = RemoveSubstring<"hello world", "world">;
 * // => "hello "
 *
 * type Test2 = RemoveSubstring<"abcabcabc", "abc">;
 * // => ""
 *
 * type Test3 = RemoveSubstring<"a-b-c", "-">;
 * // => "abc"
 *
 * type Test4 = RemoveSubstring<"hello", "x">;
 * // => "hello"
 * ```
 */
export type RemoveSubstring<
  Source extends string,
  Substring extends EnsureNonEmptyStr<Substring>,
> = _RemoveSubstring<Source, Substring>;

export type _RemoveSubstring<Source, Substring> = Source extends `${infer Head}${Substring & string}${infer Tail}`
  ? _RemoveSubstring<`${Head}${Tail}`, Substring>
  : Source;
