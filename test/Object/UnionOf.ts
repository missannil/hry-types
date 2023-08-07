// UnionOf测试文件

import { Checking, type Test } from "../../src";
import type { Compute } from "../../src/Object/Compute";

import type { UnionOf } from "../../src/Object/UnionOf";

type O1 = { a: string; b: number; c: boolean };

type O2 = { a: number; b: string; d: string };

type Test1Result = Compute<UnionOf<O1, O2>>;

type Test1Expected = { a: string | number; b: number | string; c: boolean; d: string };

Checking<Test1Result, Test1Expected, Test.Pass>;
