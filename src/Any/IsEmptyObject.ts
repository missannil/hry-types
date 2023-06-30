import type { EmptyObject } from "../Misc/EmptyObject";

/**
 * Returns a `boolean` for whether the type is strictly equal to an empty plain object,the `{}` value.
 * @description 返回一个“布尔值”,表示该类型是否严格等于一个空的普通对象，即“{}”值。
 * @example
 * ```ts
 * import type { IsEmptyObject } from 'hry-types';
 * type Pass = IsEmptyObject<{}>; //=> true
 * type Fail = IsEmptyObject<[]>; //=> false
 * type Fail = IsEmptyObject<null>; //=> false
 * ```
 * @see EmptyObject
 */
export type IsEmptyObject<T> = T extends EmptyObject ? true : false;
