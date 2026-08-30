import type { KeysValidator } from "../../src/index";

// ============================================================
// 验证对象属性是否属于允许的 Key
// ============================================================

function testAllow<T extends object>(
  value: T & KeysValidator<T, "aaa" | "bbb">,
): void {
  value;
}

testAllow({
  aaa: 123,
  bbb: "hello",
});

testAllow({
  aaa: 123,
  // @ts-expect-error 字段错误
  xxx: true,
});

// ============================================================
// 验证对象属性是否属于禁止的 Key
// ============================================================

function testDeny<T extends object>(
  value: T & KeysValidator<T, "type" | "value", "deny">,
): void {
  value;
}

testDeny({
  name: "foo",
});

testDeny({
  // @ts-expect-error 字段错误
  type: "text",
  name: "foo",
});

testDeny({
  // @ts-expect-error 字段错误
  value: 123,
  name: "foo",
});

// ============================================================
// 使用模板字面量验证允许的 Key
// ============================================================

function testPattern<T extends object>(
  value:
    & T
    & KeysValidator<
      T,
      `aaa_${string}` | `_aaa_${string}`
    >,
): void {
  value;
}

testPattern({
  aaa_num: 123,
  _aaa_str: "hello",
});

testPattern({
  // @ts-expect-error 字段错误
  xxx: 123,
});

testPattern({
  aaa_num: 123,
  // @ts-expect-error 字段错误
  _xxx: 456,
});

// ============================================================
// 同时验证多个禁止的 Key
// ============================================================

function testDenyMultiple<T extends object>(
  value: T & KeysValidator<T, "type" | "value", "deny">,
): void {
  value;
}

testDenyMultiple({
  name: "foo",
  age: 18,
});

testDenyMultiple({
  name: "foo",
  // @ts-expect-error 字段错误
  type: 1,
  // @ts-expect-error 字段错误
  value: 2,
});
