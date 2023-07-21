## 简介

<a href="#">
    <img src="https://img.shields.io/badge/npm-you_like-blue>"
  </a>
hry-types 是由恒荣耀(hry)团队开发的typescript类型工具库。

## 特点

- 项目中注释和文档等全部使用中文。
- 泛型分类,方便查找。
- 类型编译速度更快。

## 一些思想

- 为特定类型而生
  每个分类下的泛型都应只为此分类而建立的。因为使用者很明确使用泛型的场景。例如,编写一个针对对象类型的Filter泛型时,不应该考虑传入非对象类型时的场景。测试用例同样。
- 减少泛型的不必要约束
  因为泛型都是针对特定类型的,所以参数可以无需写泛型约束,这在复杂类型推导时,可以避免写过多的 'extends'用以缩窄类型。
  ```ts
  // 示例A
  import { type N } from "hry-types";
  type Return<T extends string | number> = T extends `${T}1` ? T : N.Add<T, 1>;
  function foo<T extends string | number>(p: T): Return<T> {
    return p + 1;
  }
  const test = foo(1); // test => 2
  ```
  示例A中使用了N(number)类别中的泛型Add。 当你写Return类型的Add部分时,你一定知道传入T类型必为number,若写Add泛型时加入了一参的泛型约束(number),那如上写法ts会报错(Add位置),因为ts认为传入T类型为 string | number,导致你要多写一个" extends number ? N.Add<T,1> : never " 来缩窄传入的T类型。

## 安装

```bash
npm install hry-types -D
```

## tsconfig

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["./node_modules/hry-types", "other-types"]
  }
}
```

## 使用示例

```ts
import { type A } from "hry-types";
import type { IfEquals } from "hry-types/src/Any/IfEquals";

type foo<T extends string | number> = A.IfEquals<T, string, "string", "number">;
// type foo<T extends string | number> = IfEquals<T, string, "string", "number">

type test = foo<string>; // test => 'string'

type test2 = foo<number>; // test2 => 'number'
```
