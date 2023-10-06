import type { BuiltIns } from "../_internal/BuiltIns";

// 为了鼠标悬停时为_ReadonlyDeep而非细致的子项(看起来乱)
type _ReadonlyDeep<O> = {
  readonly [k in keyof O]: ReadonlyDeep<O[k]>;
};

/**
 * 类型深度readonly,只针对数组和纯对象
 */
export type ReadonlyDeep<O> = unknown extends O ? O
  : O extends Function | BuiltIns | Set<unknown> | Map<unknown, unknown> ? O
  : _ReadonlyDeep<O>;
