import type { IfExtends } from "../Any/IfExtends";
import type { AnyFunction } from "../Misc/AnyFunction";

export type DuplicateFieldValidator<
  Original extends object,
  ComparedKeys extends PropertyKey,
  Prompt extends string,
  DuplicateKeys extends keyof Original = Extract<keyof Original, ComparedKeys>,
> = IfExtends<
  {},
  Original,
  unknown,
  IfExtends<
    DuplicateKeys,
    never,
    unknown,
    {
      [k in DuplicateKeys]: Original[k] extends AnyFunction ? `⚠️${Prompt}⚠️`
        : () => `⚠️${Prompt}⚠️`;
    }
  >
>;
