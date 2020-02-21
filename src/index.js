
exports.min = function min (array=[]) {
    let len = array.length;
    if (len > 0) {
        let res = array[0];
        for (let i = 1; i < len; i++){
            if( res > array[i]){
                res = array[i];
            }
        }
        return res;
    }
    else{
        return 0;
    }
}

exports.max = function max (array=[]) {
    let len = array.length;
    if (len > 0) {
        let res = array[0];
        for (let i = 1; i < len; i++){
            if( res < array[i]){
                res = array[i];
            }
        }
        return res;
    }
    else{
        return 0;
    }
}

exports.avg = function avg (array=[]) {
    let len = array.length;
    if (len > 0) {
        let res = array[0];
        for (let i = 1; i < len; i++){
            res += array[i];
        }
        return res/len;
    }
    else{
        return 0;
    }
}
