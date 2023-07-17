import type { DuplicateFieldValidator } from "../../src/Generic/DuplicateFieldValidator";

const fn = <O extends object>(
  obj: O & DuplicateFieldValidator<O, "type" | "value", "重复字段">,
): void => {
  obj;
};

fn({
  // @ts-expect-error 重复字段
  type: 123,
  // @ts-expect-error 重复字段
  value: 345,
  xxx: 123,
});
