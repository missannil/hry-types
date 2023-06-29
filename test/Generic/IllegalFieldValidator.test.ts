import type { IllegalFieldValidator } from "../../src/Generic/IllegalFieldValidator";

const fun0 = <O extends object>(
  obj: O & IllegalFieldValidator<O, "a" | "b">,
): void => {
  obj;
};

fun0(
  {}, // 空对象不检测
);

const fun1 = <O extends object>(
  obj: O & IllegalFieldValidator<O, "a" | "b">,
): void => {
  obj;
};

// 默认层级0 字段为空串('') 全检测
fun1({
  a: 123,
  b: "123",
  // @ts-expect-error 非法字段 非法字段为非函数类型
  c: 123,
  // @ts-expect-error 非法字段 非法字段为函数类型
  d: () => 123,
});

const fun2 = <O extends object>(
  obj: O & IllegalFieldValidator<O, "a" | "b", 0, "value">,
): void => {
  obj;
};

// 层级0 字段为'value' 检测value字段
fun2({
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

const fun3 = <O extends object>(
  obj: O & IllegalFieldValidator<O, "a" | "b", 1>,
): void => {
  obj;
};

// 层级1 字段为空串('') 检测1层
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

const fun4 = <O extends object>(
  obj: O & IllegalFieldValidator<O, "a" | "b", 1, "value">,
): void => {
  obj;
};

// 层级1 字段为'value' 检测1层 value字段
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
