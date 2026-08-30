/**
 * 判断 T 是否为 `any` 类型。
 *
 * @remarks
 * 下面的写法更简洁,但会引起循环依赖(泛型参数验证时 例如在 `EnsurePlainObject` 中使用 `IsAny` 时会出现问题)。
 * 0 extends 1 & T ? true : false;
 * @param T - 任意类型。
 * @returns true 或 false。
 */
export type IsAny<T> = (<G>() => G extends T ? 1 : 2) extends (<G>() => G extends any ? 1 : 2) ? true
  : false;
