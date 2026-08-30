import { type Test } from "../../src";

import { Checking } from "../../src/_internal/Checking";

import type { IsOptionalKey } from "../../src/Object/_index";

type Obj = {
  required: string;

  optional?: number;

  readonly_required: readonly string[];

  readonly_optional?: readonly number[];
};

// ============================================================
// 必选属性
// ============================================================

type Test1 = IsOptionalKey<Obj, "required">;

type TestExpect1 = false;

Checking<Test1, TestExpect1, Test.Pass>;

// ============================================================
// 可选属性
// ============================================================

type Test2 = IsOptionalKey<Obj, "optional">;

type TestExpect2 = true;

Checking<Test2, TestExpect2, Test.Pass>;

// ============================================================
// readonly + 必选属性
// ============================================================

type Test3 = IsOptionalKey<Obj, "readonly_required">;

type TestExpect3 = false;

Checking<Test3, TestExpect3, Test.Pass>;

// ============================================================
// readonly + 可选属性
// ============================================================

type Test4 = IsOptionalKey<Obj, "readonly_optional">;

type TestExpect4 = true;

Checking<Test4, TestExpect4, Test.Pass>;
