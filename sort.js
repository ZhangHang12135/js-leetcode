let merge = (left, right) => {
    let result = [];
    let l = 0, r = 0;
    while(l < left.length && r < right.length){
        if(left[l] < right[r]){
            result.push(left[l]);
            l++;
        }else{
            result.push(right[r]);
            r++;
        }
    }
    while(l < left.length){
        result.push(left[l++]);
    }
    while(r < right.length){
        result.push(right[r++]);
    }
    return result;
}
let mergeSortRec = (array) => {
    let len = array.length;
    if(len == 1) return array;
    let mid = Math.floor(len / 2),
        left = array.slice(0, mid),
        right = array.slice(mid, len);
    return merge(mergeSortRec(left), mergeSortRec(right));
}
// console.log(mergeSortRec([2,3,4,1,2,5,2,3]))

let partition = (array, left, right) => {
    let pivot = array[Math.floor((right+left) / 2)]
        i = left,
        j = right;
    while (i <= j) {
        while (array[i] < pivot){
            i++;
        }
        while(array[j] > pivot){
            j--;
        }
        if(i <= j){
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
    }
    return i;
}
let quickSort = (array, left, right)=>{
    if(left >= right) return;
    let l =left, r = right, pivot = array[l];
    while(l < r){
        while( l < r && array[r] >= pivot){
            r--;
        }
        if( l < r){
            array[l] = array[r];
        }
        while( l < r && array[l] <= pivot){
            l++;
        }
        if( l < r){
            array[r] = array[l];
        }
        if(l >= r){
            array[l] = pivot;
        }
    }
    quickSort(array, left, r-1);
    quickSort(array, r+1, right);
}
let arr = [1,4,2,5,10,2,1];
quickSort(arr, 0, arr.length-1);
console.log(arr)