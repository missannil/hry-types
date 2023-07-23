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

## ${{ secrets.TOKEN_GITHUB }}

GitHub Copilot: `${{ secrets.TOKEN_GITHUB }}` 是 GitHub Actions 中的一种语法，用于引用名为 `TOKEN_GITHUB` 的机密变量。

在 GitHub Actions 中，您可以使用机密变量来存储敏感信息，例如 API 密钥和密码等。机密变量是加密的，只有在 GitHub Actions 运行时才会解密，因此可以安全地在工作流程中使用。

`${{ secrets.TOKEN_GITHUB }}` 表示引用名为 `TOKEN_GITHUB` 的机密变量的值。在 GitHub Actions 运行时，`${{ secrets.TOKEN_GITHUB }}` 会被替换为 `TOKEN_GITHUB` 机密变量的实际值。

需要注意的是，机密变量的值是加密的，只有在 GitHub Actions 运行时才会解密。因此，建议不要在代码中直接使用机密变量的值，而是使用 `${{ secrets.TOKEN_GITHUB }}` 这样的语法来引用机密变量的值。

### 111

GitHub Copilot: 在 GitHub Actions 的 job 中设置 token 的好处是可以访问受保护的资源，例如 GitHub API 或其他需要身份验证的服务。

在上述代码中，`token` 参数是用于访问 GitHub API 的身份验证令牌。通过在 job 中设置 `token` 参数，可以确保在运行 job 时，GitHub Actions 可以使用正确的身份验证令牌来访问 GitHub API，从而执行一些操作，例如检查 pull request 是否已经更新。

需要注意的是，`token` 参数是一个机密变量，它应该存储在 GitHub Actions 的 Secrets 中，并通过 `${{ secrets.TOKEN_GITHUB }}` 这样的语法来引用。这可以确保机密变量的值不会在代码中暴露，从而提高代码的安全性。

另外，建议在使用 token 时，尽可能使用最小权限原则，即只授予必要的权限，以减少潜在的安全风险。

### 222

在 GitHub Actions 中，有两种类型的机密变量：环境机密变量（Environment secrets）和仓库机密变量（Repository secrets）。

环境机密变量是与整个 GitHub Actions 工作流程相关联的机密变量，它们可以在整个工作流程中使用。环境机密变量存储在 GitHub Actions 的 Secrets 中，并且可以通过 ${{ secrets.SECRET_NAME }} 这样的语法来引用。环境机密变量可以在多个 job 中使用，并且可以在不同的工作流程中共享。

仓库机密变量是与仓库相关联的机密变量，它们只能在当前仓库中使用。仓库机密变量存储在仓库的 Secrets 中，并且可以通过 ${{ secrets.SECRET_NAME }} 这样的语法来引用。仓库机密变量只能在当前仓库的工作流程中使用，不能在其他仓库或工作流程中共享。

需要注意的是，机密变量的值是加密的，只有在 GitHub Actions 运行时才会解密。因此，建议不要在代码中直接使用机密变量的值，而是使用 ${{ secrets.SECRET_NAME }} 这样的语法来引用机密变量的值，以提高代码的安全性。

### 333

GitHub Copilot: Automattic/action-pr-is-up-to-date@v2 是一个 GitHub Actions 的 action，用于检查 pull request 是否已经更新。在使用该 action 时，需要配置一个 GitHub API 的身份验证令牌（token），以便 action 可以访问 GitHub API。

具体来说，当您在 pull request 中使用 Automattic/action-pr-is-up-to-date@v2 action 时，该 action 会检查当前 pull request 是否已经更新。为了执行此操作，该 action 需要访问 GitHub API，以获取 pull request 的详细信息。为了访问 GitHub API，需要提供一个 GitHub API 的身份验证令牌（token）。

在上述代码中，`token` 参数是用于访问 GitHub API 的身份验证令牌。通过在 job 中设置 `token` 参数，可以确保在运行 job 时，Automattic/action-pr-is-up-to-date@v2 action 可以使用正确的身份验证令牌来访问 GitHub API，从而执行检查 pull request 是否已经更新的操作。

需要注意的是，`token` 参数是一个机密变量，它应该存储在 GitHub Actions 的 Secrets 中，并通过 `${{ secrets.TOKEN_GITHUB }}` 这样的语法来引用。这可以确保机密变量的值不会在代码中暴露，从而提高代码的安全性。
