/**
 * @description 易写,易读,易用(If),注意返回结果为true 或 false  或 boolean(联合类型时可能出现)
 * @param A1
 * @param A2
 * @returns  true 或 false 或 boolean 三种可能
 * @example
 * ```ts
 * import {Extends} from 'hry-types'
 *
 * type test0 = Extends<'a' | 'b', 'b'> // boolean
 * type test1 = Extends<'a', 'a' | 'b'> // true
 *
 * type test2 = Extends<{a: string}, {a: any}>      // true
 * type test3 = Extends<{a: any}, {a: any, b: any}> // false
 *
 * // 不应该这么做,将返回false。never应使用Equals判断。
 * type test4 = Extends<never, never> // False

 * ```
 */
export type Extends<A1, A2> = [A1] extends [never] ? false : A1 extends A2 ? true : false;
