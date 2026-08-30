## 简介

<a href="#">
  <img src="https://img.shields.io/badge/npm-you_like-blue>"
</a>
hry-types 是由恒荣耀(hry)团队开发的typescript类型工具库。

## 特点

- 项目中注释和文档等全部使用中文。

- 严格泛型与宽泛泛型
  对于需要校验参数类型的泛型,提供两个版本:原泛型负责对外提供严格的参数约束,带下划线前缀的泛型去除参数约束,用于其他泛型内部组合。严格版本统一转发给宽泛版本实现。
  ```ts
  import type { _MergeUnion, MergeUnion } from "hry-types";

  type User = { id: string };
  type Admin = { id: number; name: string };

  // 对外使用严格版本,传入参数会进行普通对象校验
  type UserAndAdmin = MergeUnion<User, Admin>;

  // 其他泛型内部已经完成参数校验时,使用宽泛版本避免中间类型再次触发约束
  type MergeResult<T, U> = _MergeUnion<T, U>;
  ```
  宽泛版本使用单个下划线前缀,严格版本和宽泛版本的实现保持一致。下划线版本主要用于类型工具之间的组合,直接对外使用时应优先选择严格版本。

## 安装

```bash
pnpm add hry-types -D
```

## tsconfig

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["hry-types"]
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
