import type { IfEqual } from "./IfEqual";
import type { IfExtends } from "./IfExtends";


export type Validator<Expect, Reality> = IfEqual<
    Expect,
    Reality,
    unknown,
    IfExtends<Expect, Function, `⚠️类型错误⚠️`, () => `⚠️类型错误⚠️`>
>;
