import { type Test, TypeChecking } from "../../src";
import type { SelectKeys } from "../../src/Object/SelectKeys";

type TextObj = { num: 123; str?: string; union: boolean; fn: () => 123 };

// ----------num part-----------

type TextObjResult1 = SelectKeys<TextObj, number, "extends->">; // 123 extends number => true  返回 num

TypeChecking<TextObjResult1, "num", Test.Pass>;

type TextObjResult2 = SelectKeys<TextObj, number, "<-extends">; // number extends 123  => false  返回 never

TypeChecking<TextObjResult2, never, Test.Pass>;

type TextObjResult3 = SelectKeys<TextObj, 123, "equals">; // equals  => true  返回 num

TypeChecking<TextObjResult3, "num", Test.Pass>;

// ----------str part-----------

type TextObjResult4 = SelectKeys<TextObj, string, "extends->">; // (undefined | string) extends string => false  返回 never

TypeChecking<TextObjResult4, never, Test.Pass>;

type TextObjResult5 = SelectKeys<TextObj, string, "<-extends">; // string extends (undefined | string) => true  返回 str

TypeChecking<TextObjResult5, "str", Test.Pass>;

type TextObjResult6 = SelectKeys<TextObj, undefined | string, "equals">; // (undefined | string) equals (undefined | string) => true  返回 str

TypeChecking<TextObjResult6, "str", Test.Pass>;

// ----------union part-----------

type TextObjResult7 = SelectKeys<TextObj, boolean, "extends->">; // boolean extends boolean => true  返回 union

TypeChecking<TextObjResult7, "union", Test.Pass>;

type TextObjResult8 = SelectKeys<TextObj, boolean, "<-extends">; // boolean extends boolean => true  返回 union

TypeChecking<TextObjResult8, "union", Test.Pass>;

type TextObjResult9 = SelectKeys<TextObj, boolean, "equals">; // boolean extends boolean => true  返回 union

TypeChecking<TextObjResult9, "union", Test.Pass>;

type TextObjResult10 = SelectKeys<TextObj, true, "extends->">; // boolean extends true => boolean  返回 never

TypeChecking<TextObjResult10, never, Test.Pass>;

type TextObjResult11 = SelectKeys<TextObj, true, "<-extends">; // true extends boolean => true  返回 union

TypeChecking<TextObjResult11, "union", Test.Pass>;

type TextObjResult12 = SelectKeys<TextObj, true, "equals">; // true equals boolean => false  返回 never

TypeChecking<TextObjResult12, never, Test.Pass>;

// ----------fn part-----------

type TextObjResult13 = SelectKeys<TextObj, () => 123, "extends->">; // (() => 123) extends (() => 123) => true  返回 fn

TypeChecking<TextObjResult13, "fn", Test.Pass>;

type TextObjResult14 = SelectKeys<TextObj, () => string, "<-extends">; // () => string extends () => 123 => false  返回 never

TypeChecking<TextObjResult14, never, Test.Pass>;

type TextObjResult15 = SelectKeys<TextObj, () => 123, "equals">; // (() => 123) equals (() => 123) => true  返回 fn

TypeChecking<TextObjResult15, "fn", Test.Pass>;
