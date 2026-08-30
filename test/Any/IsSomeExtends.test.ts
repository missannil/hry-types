import type { Test } from "../../src";
import type { IsSomeExtends } from "../../src/Any/_index";

import { Checking } from "../../src/_internal/Checking";

// ============================================================
// 单个类型满足约束
// ============================================================
type Actual1 = IsSomeExtends<boolean, true>;

type Expected1 = true;

Checking<Actual1, Expected1, Test.Pass>;

type Actual2 = IsSomeExtends<1 | "a", 1>;

type Expected2 = true;

Checking<Actual2, Expected2, Test.Pass>;

type Actual3 = IsSomeExtends<1 | "a", "a">;

type Expected3 = true;

Checking<Actual3, Expected3, Test.Pass>;

type Actual4 = IsSomeExtends<1 | "a", number>;

type Expected4 = true;

Checking<Actual4, Expected4, Test.Pass>;

type Actual5 = IsSomeExtends<1 | "a", string>;

type Expected5 = true;

Checking<Actual5, Expected5, Test.Pass>;

// ============================================================
// 联合类型中不存在满足约束的成员
// ============================================================
type Actual6 = IsSomeExtends<1 | "a", boolean>;

type Expected6 = false;

Checking<Actual6, Expected6, Test.Pass>;

type Actual7 = IsSomeExtends<1 | "a", boolean | string>;

type Expected7 = true;

Checking<Actual7, Expected7, Test.Pass>;

type Actual8 = IsSomeExtends<1 | "a", boolean | number>;

type Expected8 = true;

Checking<Actual8, Expected8, Test.Pass>;

// ============================================================
// `never` 和 `any` 不参与正常匹配
// ============================================================
type Actual9 = IsSomeExtends<1 | "a", any>;

type Expected9 = false;

Checking<Actual9, Expected9, Test.Pass>;

type Actual10 = IsSomeExtends<any, "1">;

type Expected10 = false;

Checking<Actual10, Expected10, Test.Pass>;

type Actual11 = IsSomeExtends<never, "1">;

type Expected11 = false;

Checking<Actual11, Expected11, Test.Pass>;

type Actual12 = IsSomeExtends<1, never>;

type Expected12 = false;

Checking<Actual12, Expected12, Test.Pass>;
