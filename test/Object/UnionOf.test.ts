// UnionOf测试文件

import { Checking, type Test } from "../../src";
import type { UnionOf } from "../../src/Object/UnionOf";

// 测试1类型用例
type O1 = { a: string; b: number; c: boolean };

type O2 = { a: number; b: string; d: string };

// 测试1结果
type Test1Result = UnionOf<O1, O2>;

// 测试1预期
type Test1Expected = { a: string | number; b: number | string; c: boolean; d: string };

// 验证测试1结果是否符合预期
Checking<Test1Result, Test1Expected, Test.Pass>;
