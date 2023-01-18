type AppendArgument<Fn extends (...P: any[]) => any, A> = (
  ...P: [...Parameters<Fn>, A]
) => ReturnType<Fn>;
