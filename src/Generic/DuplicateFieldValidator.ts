import type { IfExtends } from "../Any/IfExtends";

/**
 * @description 检查泛型'G'与'ComparedKeys'是否有重复的键 Check if `G` has duplicate keys in comparison to `ComparedKeys`
 */
export type DuplicateFieldValidator<
  G extends object,
  ComparedKeys extends PropertyKey,
  Prompt extends string,
  DuplicateKeys extends keyof G = Extract<keyof G, ComparedKeys>,
> = IfExtends<
  {},
  G,
  unknown,
  IfExtends<
    DuplicateKeys,
    never,
    unknown,
    {
      [k in DuplicateKeys]: G[k] extends Function ? `⚠️${Prompt}⚠️`
        : () => `⚠️${Prompt}⚠️`;
    }
  >
>;
