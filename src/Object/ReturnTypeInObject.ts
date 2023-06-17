import { type AnyFunction } from "..";

/**
 * 把对象子属性类型为函数类型的,变为函数返回类型
 * @example
 * ```ts
 * import { TypeChecking, type O,type Test} from 'hry-types'
 *
 * TypeChecking<O.ReturnType<{ fun: () => number; num: number }>, { fun: number; num: number }, Test.Pass>;
 * ```
 * @returns object
 */
export type ReturnTypeInObject<O extends object> = {
  [k in keyof O]: O[k] extends AnyFunction ? ReturnType<O[k]> : O[k];
};
