/**
 * 除去readonly(深度)
 */
export type NonReadonly<T extends object> = T extends unknown
    ? {
          -readonly [k in keyof T]: T[k] extends object ? NonReadonly<T[k]> : T[k];
      }
    : never;
