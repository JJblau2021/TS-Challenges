type MyReadonly2<T extends object, K extends keyof T = keyof T> = Omit<T, K> &
  Readonly<Omit<T, Exclude<keyof T, K>>>;
