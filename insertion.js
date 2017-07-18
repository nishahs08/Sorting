function insertionSort(unsortedArray){
    let len = unsortedArray.length;
    
    for(let i=1;i<len;i++){
            let temp = unsortedArray[i];

            for(let j=i-1;j>=0;j--){
                if(unsortedArray[j]>temp){
                    unsortedArray[j+1] = unsortedArray[j];
                    unsortedArray[j]=temp;
                }
            }
    }
    return unsortedArray

}
console.log(insertionSort([3,7,2,45,0,87,4567,678,4567]));