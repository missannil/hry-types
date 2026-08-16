import type { EnsureNoDuplicateFields } from "../../src/Constraint/EnsureNoDuplicateFields";

const fn = <O extends object>(
  obj: O & EnsureNoDuplicateFields<O, "type" | "value", "重复字段">,
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
