## 简介

hry-types 是由恒荣耀(hry)团队开发的的typescript类型工具库。

## 特点

- 项目中注释和文档等全部使用中文。
- 类型分类清晰，方便使用和查找。
  例如：你想针对对象类型做字段过滤处理时,你可以引入O.Filter。你想判断任意类型是否为联合类型,可以引入A.IsUnion。
  当然,在你熟悉各种类型后，你也可以直接引入Filter和IsUnion。
- 类型编译速度更快。

## 一些思想

- 降低泛型的复杂度
  我们认为没有必要让一个泛型同时支持多种类型(除非Isxxx类型),这样会增加泛型的复杂度,降低编译效率。
  例如：编写一个针对对象类型的Filter泛型，我们就不会让它支持对数组的过滤。
- 不会考虑参数是never和any类型的情况,可以提高编译效率,若需要考虑,应事先做判断处理。
  示例:
  ```ts
  // 判断A1是否包含(含有)A2的子类型 返回true或false
  type Contains<A1, A2> = true extends (A1 extends A2 ? true : false) ? true
    : false;
  // 测试用例 Constraint.test.ts
  type Test1 = Constraint<1 | "a", 1>; // true
  // ... Test2-Test7
  // 不会考虑传入never和any类型的测试,不管它们是否符合预期。
  type Test8 = _Contains<never, string>; // false
  type Test9 = _Contains<any, string>; // true
  // 或传入的泛型有可能是never或any类型,应事先做判断处理
  type Foo<T> = IsNever<T> extends true ? "is never type"
    : _Contains<T, string>; // true
  ```
- 减少泛型的不必要约束
  示例:
  ```ts
  type MustBeNum<T extends number> = T;

  type MustBeStr<T extends string> = T;

  type ReturnStrOrNum<T extends string | number> = T extends number
    ? MustBeNum<T>
    : MustBeStr<T>;
  // ^^^
  function foo<T extends string | number>(strOrnum: T): ReturnStrOrNum<T> {
    return strOrnum as any;
  }

  const num = foo(1);

  const str = foo("1");

  type MustBeStr1<T> = T;

  type ReturnStrOrNum1<T extends string | number> = T extends number
    ? MustBeNum<T>
    : MustBeStr1<T>;

  function foo1<T extends string | number>(strOrnum: T): ReturnStrOrNum<T> {
    return strOrnum as any;
  }

  const num1 = foo(1);

  const str1 = foo("1");
  ```

上面的代码中，Foo泛型中`MustBeStr<T>`中的T必是string类型,但是Foo泛型中的T却可以是string或number类型。

## 安装

```bash
npm install hry-types -D
```

## 使用

```ts
import type { A } from "hry-types";
type MustBeNum<T extends number> = T;

type StrOrNum<T extends string | number> = T extends string ? string
  : MustBeNum<A.As<T, number>>;
```
