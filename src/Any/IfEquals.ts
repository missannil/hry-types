import type { Equals } from "./Equals";

export type IfEquals<A, B, Then = unknown, Else = A> = Equals<A, B> extends true ? Then : Else;
