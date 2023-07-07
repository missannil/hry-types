import type { Function } from "../Misc/Function";

/**
 * 把对象子属性类型为函数类型的,变为函数返回类型(非深度)
 * @example
 * ```ts
 * import { TypeChecking, type O,type Test} from 'hry-types'
 * type Obj = { num: 123; fn: () => string };
 * type TestObj = ReturnTypeInObject<Obj>;
 * // TestObj => { num: 123; fn: string };
 * ```
 * @returns object
 */
export type ReturnTypeInObject<O> = {
  [k in keyof O]: O[k] extends Function ? ReturnType<O[k]> : O[k];
};
