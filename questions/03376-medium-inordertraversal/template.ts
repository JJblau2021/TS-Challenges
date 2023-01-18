interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
type InorderTraversal<T extends TreeNode | null> = T extends TreeNode
  ? [
      ...(T['left'] extends TreeNode ? InorderTraversal<T['left']> : []),
      T['val'],
      ...(T['right'] extends TreeNode ? InorderTraversal<T['right']> : []),
    ]
  : [];

// type InorderTraversal<T extends TreeNode | null> = T extends TreeNode
//   ? [...Traverse<T, 'left'>, T['val'], ...Traverse<T, 'right'>]
//   : [];

// type Traverse<
//   F extends TreeNode,
//   S extends 'left' | 'right',
// > = F[S] extends TreeNode ? InorderTraversal<F[S]> : [];
