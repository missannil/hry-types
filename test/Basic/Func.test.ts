import { type Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { Func } from "../../src/Basic/_index";

// ============================================================
// 默认函数参数和返回值
// ============================================================
type Test1 = Func;
Checking<Test1, (...args: any[]) => any, Test.Pass>;

// ============================================================
// 指定函数参数和返回值
// ============================================================
type Test2 = Func<[string, number], boolean>;
Checking<Test2, (arg0: string, arg1: number) => boolean, Test.Pass>;
