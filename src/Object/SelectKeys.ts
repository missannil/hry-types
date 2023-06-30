import type { _Match } from "../_internal/_Match";
import type { Is } from "../Any/Is";

/**
 * @hidden
 */
export type _SelectKeys<O extends object, M, match extends _Match> = {
  [K in keyof O]-?: Is<O[K], M, match> extends true ? K : never;
}[keyof O];

/**
 * 获取对象O中匹配M类型的key
 * @example
 * ```ts
 *  import { TypeChecking, type O,type Test} from 'hry-types'
 *
 *  TypeChecking<O.SelectKeys<{ fun: () => number; num: number }, AnyFunction>, "fun", Test.Pass>;
 * ```
 * @return object
 */
export type SelectKeys<O extends object, M, match extends _Match = "extends->"> = O extends unknown
  ? _SelectKeys<O, M, match>
  : never;
