import type { IfEquals, IfExtends } from "..";

/**
 * @description 函数value泛型验证器,因为输入泛型是基于extends(ts的原罪-结构类型)
 */
export type EqualValidator<Expect, Reality, Prompt extends string = "类型错误"> = IfEquals<
  Expect,
  Reality,
  unknown,
  IfExtends<Expect, Function, `⚠️${Prompt}⚠️`, () => `⚠️${Prompt}⚠️`>
>;
// test
type PropertiesConstraint = Record<string, { type: Function; value?: unknown }>;

type ConfigObj<TProperties, TData> = {
  properties: TProperties;
  data: TData & EqualValidator<Extract<keyof TProperties, keyof TData>, never, "data字段不能与properties字段重复">;
};
// demo
declare function definedComponent<TProperties extends PropertiesConstraint, TData extends object>(
  config: ConfigObj<TProperties, TData>,
): void;

definedComponent({
  properties: {
    a: {
      type: String,
    },
  },
  // @ts-expect-error "data字段不能与properties字段重复"
  data: {
    a: 123,
  },
});
