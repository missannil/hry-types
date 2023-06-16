import type { DuplicateFieldValidation } from "../../src/Function_generic_value_validation/DuplicateFieldValidation";

// ----------------重复字段验证----------------
const fun = <O extends Record<string, any>>(
  obj: O & DuplicateFieldValidation<O, "type" | "value", "重复字段">,
): void => {
  obj;
};
fun({
  // @ts-expect-error 重复字段
  type: 123,
  // @ts-expect-error 重复字段
  value: 345,
  xxx: 123,
  options: 123,
});
