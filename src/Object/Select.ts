import type { _Match } from "../_internal/_Match";
import type { EnsureNonUnion } from "../Constraint/EnsureNonUnion";
import type { SelectKeys } from "./SelectKeys";

/**
 * 从`O`中选取与`M`匹配的属性
 * @param O - 对象
 * @example
 * ```ts
 * type Test1 = Select<{ a: number }, number>; // => 'a'
 * type Test2 = Select<{ a: number; b: string }, number>; // => 'a'
 * type Test3 = Select<{ a: number; b: string; c: boolean }, number | string>; // => 'a' | 'b'
 * type Test4 = Select<{ a: number | string; b: string; c: boolean }, number | string, "<-extends">; // => never
 * type Test5 = Select<{ a: number | string; b: string; c: boolean }, number | string, "<-contains">; // => 'a' | 'b'
 * type Test6 = Select<{ a: number | string; b: string | number; c: boolean }, string, "contains->">; // => 'a' | 'b'
 * type Test7 = Select<{ a: number | string; b: string; c: boolean }, number | string, "equal">; // => "a"
 * type Test8 = Select<{ a?: string }, string>; // => 'a'
 *
 * ```
 * @returns object
 */
export type Select<O extends object, M, match extends EnsureNonUnion<match, _Match> = "extends->"> = Pick<
  O,
  SelectKeys<O, M, match>
>;
