import type { KeyValidator } from "../../src/Generic/KeyValidator";

// 验证字段 为`aaa_${string}`
function test1<T extends object>(O: T & KeyValidator<T, `aaa_${string}`>): T {
  return O;
}

test1({
  aaa_num: 123,
  aaa_str: "str",
  // @ts-expect-error 前缀错误
  str: "str",
  // @ts-expect-error 前缀错误
  _str: "str",
  // @ts-expect-error 前缀错误
  aaaa_str: "str",
  // @ts-expect-error 前缀错误
  aaaStr: "str",
});

// 验证字段 `num_${string}` | `_num_${string}`
function test2<T extends object>(O: T & KeyValidator<T, `num_${string}` | `_num_${string}`>): T {
  return O;
}

test2({
  num_xxx: 123,
  _num_xxx: "str",
  // @ts-expect-error 前缀错误
  xxx: 123,
});
