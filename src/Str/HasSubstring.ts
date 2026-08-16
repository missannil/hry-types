export type HasSubstring<Source extends string, Substring extends string> = Source extends
  `${string}${Substring}${string}` ? true
  : false;
