import type { ComputeIntersection } from "./ComputeIntersection";

type _Replace<Target, Source, DifferentKeys extends keyof Target, SameKey extends keyof Source> = ComputeIntersection<
  & { [k in DifferentKeys]: Target[k] }
  & { [k in SameKey]: Source[k] }
>;

/**
 * Target与Source相同的key类型替换为Source的类型。
 */
export type Replace<Target extends object, Source extends object> = _Replace<
  Target,
  Source,
  Exclude<keyof Target, keyof Source>,
  Extract<keyof Target, keyof Source>
>;
