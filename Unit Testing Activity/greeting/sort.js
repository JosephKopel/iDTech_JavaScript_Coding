function sortArray(array) {
    let sorted = array.sort(function (x,y) {
        return x-y
    });
    return sorted;
}
//selection sort
// find the smallest number and then put it at the 1st index 
// reoeat throughout each indez
//0(n^2)
function sortArrayTwo(array) {
    for (let i = 0; i < array.length; i++) {
        let smallest = i;
        for (let j = i; j<array.length; j++) {
            if (array[smallest] > array[j]) {
                smallest = j;
            }
        }
        let temp = array[i];
        array[i] = array[smallest];
        array[smallest] = temp;
    }
    return array;
}