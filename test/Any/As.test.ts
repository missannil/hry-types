// 测试 path: ./src/Any/As.test.ts

import { type Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { As } from "../../src/Any/_index";

type StrOrNum = string | number;

type Num<T extends number> = T;

// @ts-expect-error Num<T>中的 T 位置报错 类型“T”不满足约束“number”。
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Foo<T extends StrOrNum> = T extends string ? string : Num<T>;

// 使用As类型缩窄,不会报错
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ApplyAs<T extends StrOrNum> = T extends string ? string : Num<As<T, number>>;

// ============================================================
// 联合类型中提取满足约束的类型
// ============================================================

type Actual1 = As<StrOrNum, number>;

type Expected1 = number;

Checking<Actual1, Expected1, Test.Pass>;

// ============================================================
// 不满足约束时返回 never
// ============================================================

type Actual2 = As<string, number>;

type Expected2 = never;

Checking<Actual2, Expected2, Test.Pass>;
