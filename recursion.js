function recursion(obj) {
    let arr = [];
    let current = Object.assign(obj);
    
    function inOrder(node, arrT, i) {
        arrT[i] = arrT[i] ? arrT[i] : [];
        arrT[i].push(node.value);
            
        if(node.left) {
            inOrder(node.left, arrT, i+1);
        }
        if(node.right) {
            inOrder(node.right, arrT, i+1);
        }
    }
    
    inOrder(current, arr, 0)
    
    return arr;
  }