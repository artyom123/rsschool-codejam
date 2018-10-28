module.exports = function recursion(obj) {
  const arr = [];
  const current = Object.assign(obj);

  function inOrder(node, arrT, i) {
    const arrN = [];
    arrN[i] = arrT[i] ? arrT[i] : [];

    if (node.value !== undefined) arrN[i].push(node.value);
    if (node.left) inOrder(node.left, arrN, i + 1);
    if (node.right) inOrder(node.right, arrN, i + 1);
  }

  inOrder(current, arr, 0);

  return arr;
};
