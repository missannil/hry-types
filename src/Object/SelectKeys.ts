import type { _Match } from "../_internal/_Match";
import type { Is } from "../Any/Is";

type _SelectKeys<O, M, match extends _Match> = {
  [K in keyof O]-?: Is<O[K], M, match> extends true ? K : never;
}[keyof O];

/**
 * 获取对象O中匹配M类型的key
 * @param O - 对象
 * @param M - 匹配类型
 * @param match - 匹配方式(_Match)
 * @example
 * ```ts
 * type Test1 = Select<{ a: 123 }, number> // { a: 123 }
 * type Test2 = Select<{ a: number; b: string }, number> // { a: number }
 * type Test3 = Select<{ a: number; b: string; c: boolean }, number | string> // { a: number; b: string }
 * type Test4 = Select<{ a: number | string; b: string; c: boolean }, number | string, "<-extends"> // {}
 * type Test5 = Select<{ a: number; b: string; c: boolean }, number | string, "<-contains">; // { a: number; b: string }
 * type Test6 = Select<{ a: string | number; b: string | boolean; c: boolean }, string, "contains->"> // { a: string | number; b: string | boolean }
 * type Test7 = Select<{ a: number | string; b: string; c: boolean }, number | string, "equals"> // { a: number | string }
 * type Test8 = Select<{ a?: string }, string> // { a?: string }
 * ```
 * @returns object
 */
export type SelectKeys<O, M, match extends _Match = "extends->"> = O extends unknown ? _SelectKeys<O, M, match>
  : never;
