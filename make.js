function make(...n) {
    let arr = [];
    arr.push(...n);

    return function calc(...b) {
        if(typeof b[0] === 'function') {
            const func = b[0];
            let val = arr[0];

            for(let i = 1; i < arr.length; i++) {
                val = func(val, arr[i]);
            }

            return val;
        }

        arr.push(...b);

        return calc;
    }
}