/**
 * 获取对象(联合对象)的可选属性
 * @remarks 利用 `{} extends { x?:string }` 为true的特性
 */
export declare type OptionalKeys<O extends object> = O extends unknown ? {
    [K in keyof O]-?: {} extends Pick<O, K> ? K : never;
  }[keyof O]
  : never;
