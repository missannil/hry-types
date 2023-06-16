import type { IllegalFieldValidation } from "../../src/Function_generic_value_validation/IllegalFieldValidation";

const fun0 = <O extends Record<string, any>>(
  obj: O & IllegalFieldValidation<O, "a" | "b">,
): void => {
  obj;
};
fun0(
  {}, // 空对象不检测
);

const fun1 = <O extends Record<string, any>>(
  obj: O & IllegalFieldValidation<O, "a" | "b">,
): void => {
  obj;
};
// 层级0 全检测
fun1({
  a: 123,
  b: "123",
  // @ts-expect-error 非法字段
  bool: 123,
});

const fun2 = <O extends Record<string, any>>(
  obj: O & IllegalFieldValidation<O, "a" | "b", 0, "value">,
): void => {
  obj;
};
// 层级0 全检测
fun2({
  a: 123,
  b: "123",
  bool: 123,
  d: {
    value: {
      a: 123,
      b: 345,
      // @ts-expect-error 非法字段
      c: 789,
    },
  },
});
const fun3 = <O extends Record<string, any>>(
  obj: O & IllegalFieldValidation<O, "a" | "b", 1>,
): void => {
  obj;
};
// 层级0 全检测
fun3({
  a: 123,
  b: "123",
  bool: 123,
  d: {
    a: 123,
    b: 345,
    // @ts-expect-error 非法字段
    c: 789,
  },
  e: {
    a: 123,
    b: 345,
  },
});
const fun4 = <O extends Record<string, any>>(
  obj: O & IllegalFieldValidation<O, "a" | "b", 1, "value">,
): void => {
  obj;
};
// 层级0 全检测
fun4({
  a: 123,
  b: "123",
  bool: 123,
  d: {
    a: 123,
    value: {
      a: 123,
      b: 123,
      // @ts-expect-error 非法字段
      c: 123,
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
