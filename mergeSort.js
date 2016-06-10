
function merge(left,right){
    var leftIndex = 0;
    var rightIndex = 0;
    var result = [];
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex++]);
        }
        else if(left[leftIndex] > right[rightIndex]){
            result.push(right[rightIndex++]);
        }
    }
    return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
}



function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    else {
        var mid = Math.floor(arr.length/2);
        var left = arr.slice(0,mid);
        var right = arr.slice(mid);
        var params = merge(mergeSort(left),mergeSort(right));
        return params;
    }
}

console.log("Result of mergeSort is " + mergeSort([3,2,1,4]));

