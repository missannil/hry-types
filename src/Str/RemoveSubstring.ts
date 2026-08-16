export type RemoveSubstring<
  Source extends string,
  Substring extends string,
> = Source extends `${infer Head}${Substring}${infer Tail}` ? RemoveSubstring<`${Head}${Tail}`, Substring>
  : Source;
