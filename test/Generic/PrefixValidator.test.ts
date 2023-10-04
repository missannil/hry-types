import type { PrefixValidator } from "../../src/Generic/PrefixValidator";

// 验证字段为 '' 时 忽略验证
function test<T extends object>(O: T & PrefixValidator<T, "">): T {
  return O;
}

test({
  num: 123, // ok
  str: "str", // ok
});

// 验证前缀为'aaa'
function test1<T extends object>(O: T & PrefixValidator<T, "aaa">): T {
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

// 验证前缀为"num" | "_num"
function test2<T extends object>(O: T & PrefixValidator<T, "num" | "_num">): T {
  return O;
}

test2({
  num_xxx: 123,
  _num_xxx: "str",
  // @ts-expect-error 前缀错误
  xxx: 123,
});
