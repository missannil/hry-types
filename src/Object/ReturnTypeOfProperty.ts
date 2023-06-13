import { type AnyObject } from "..";

/**
 * 把对象子属性类型为函数类型的,变为函数返回类型
 * @example
 * ```ts
 * import { TypeChecking, type O,type Test} from 'hry-types'
 *
 * TypeChecking<O.ReturnTypeOfProperty<{ fun: () => number; num: number }>, { fun: number; num: number }, Test.Pass>;
 * ```
 * @returns object
 */
export type ReturnTypeOfProperty<O extends AnyObject> = {
  [k in keyof O]: O[k] extends Function ? ReturnType<O[k]> : O[k];
};
