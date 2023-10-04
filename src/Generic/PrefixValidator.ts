import type { EmptyObject } from "../Misc/_api";

/**
 * 验证泛型对象的前缀是否正确
 * @param G - 泛型 object
 * @param TPrefix - 前缀 string
 * @param Message - 错误提示
 * @returns unknown or object
 * @example
 * ```ts
 * // 验证字段为 '' 时 忽略验证
 * function test<T extends object>(O: T & PrefixValidator<T, "">): T * {
 *   return O;
 * }
 *
 * test({
 *   num: 123, // ok
 *   str: "str", // ok
 * });
 *
 * // 验证前缀为'aaa'
 * function test1<T extends object>(O: T & PrefixValidator<T, "aaa">)* : T {
 *   return O;
 * }
 *
 * test1({
 *   aaa: 123,
 *   aaaa: "str",
 *   aaa_num: 123,
 *   aaaStr: "str",
 *   //@ts-expect-error 前缀错误
 *   str: "str",
 *   //@ts-expect-error 前缀错误
 *   _str: "str",
 * });
 *
 * // 验证前缀为"num" | "_num"
 * function test2<T extends object>(O: T & PrefixValidator<T, * "num" | "_num">): T {
 *   return O;
 * }
 *
 * test2({
 *   num: 123,
 *   _num: "str",
 *   //@ts-expect-error 前缀错误
 *   xxx: 123,
 * });
 * ```
 */
export type PrefixValidator<
  G extends object,
  TPrefix extends string,
  Message extends string = "前缀错误",
  Result = TPrefix extends "" ? unknown : {
    [
      k in keyof G as k extends `${TPrefix}_${string}` ? never : k
    ]: G[k] extends object ? `⚠️${Message}` : () => `⚠️${Message}`;
  },
> = EmptyObject extends Result ? unknown : Result;
