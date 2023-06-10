export type If<B extends boolean, Then, Else = never> = B extends true ? Then : Else;
