import type { IllegalFieldValidator } from "../../src/Generic/IllegalFieldValidator";

const fn0 = <O extends object>(
  obj: O & IllegalFieldValidator<O, "a" | "b">,
): void => {
  obj;
};

// 空对象不检测
fn0(
  {},
);

// 默认验证层级0下的所有字段
fn0({
  a: 123,
  b: "123",
  // @ts-expect-error 非法字段 非法字段为非函数类型
  c: 123,
  // @ts-expect-error 非法字段 非法字段为函数类型
  d: () => 123,
});

// 验证层级0下的value字段下的所有字段
const fn1 = <O extends object>(
  obj: O & IllegalFieldValidator<O, "a" | "b", 0, "value">,
): void => {
  obj;
};

fn1({
  a: 123,
  b: "123",
  c: 123,
  value: {
    a: 123,
    b: 345,
    // @ts-expect-error 非法字段 非法字段为非函数类型
    c: 789,
    // @ts-expect-error 非法字段 非法字段为函数类型
    d: () => 123,
  },
});

// 检测1层下的所有字段
const fun3 = <O extends object>(
  obj: O & IllegalFieldValidator<O, "a" | "b", 1>,
): void => {
  obj;
};

fun3({
  a: 123,
  b: "123",
  c: 123,
  d: {
    a: 123,
    b: 345,
    // @ts-expect-error 非法字段 非法字段为非函数类型
    c: 789,
    // @ts-expect-error 非法字段 非法字段为函数类型
    d: () => 123,
  },
  e: {
    a: 123,
    b: 345,
    // @ts-expect-error 非法字段 非法字段为非函数类型
    c: 789,
    // @ts-expect-error 非法字段 非法字段为函数类型
    d: () => 123,
  },
});

// 检测1层下value字段下的所有字段
const fun4 = <O extends object>(
  obj: O & IllegalFieldValidator<O, "a" | "b", 1, "value">,
): void => {
  obj;
};

fun4({
  a: 123,
  b: "123",
  bool: 123,
  d: {
    a: 123,
    b: 123,
    value: {
      a: 123,
      b: 123,
      // @ts-expect-error 非法字段 非法字段为非函数类型
      c: 789,
      // @ts-expect-error 非法字段 非法字段为函数类型
      d: () => 123,
    },
  },
  e: {
    a: 123,
    b: 345,
  },
  f: {
    a: 123,
    value: {
      a: 123,
      b: 123,
    },
  },
});
