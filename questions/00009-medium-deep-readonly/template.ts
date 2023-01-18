type DeepReadonly<T extends object> = {
  readonly [P in keyof T]: T[P] extends Record<string, {}> | any[]
    ? DeepReadonly<T[P]>
    : T[P];
};
