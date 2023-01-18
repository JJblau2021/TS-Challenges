type MyOmit<T extends object, K extends string> = {
  [P in Exclude<keyof T, K>]: T[P];
};
