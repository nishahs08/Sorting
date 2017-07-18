function selectionSort(unsortedArray)
{
    let tmp,smallest;
    for(let i=0;i<unsortedArray.length;i++){
       smallest = i;
        for(let j=i;j<unsortedArray.length;j++){
            if(unsortedArray[j] < unsortedArray[smallest])
            {
                smallest = j ;
            }

            
        }
       
        temp = unsortedArray[smallest];
        unsortedArray[smallest]=unsortedArray[i];
        unsortedArray[i]=temp;
       
    }
    return unsortedArray

}

console.log(selectionSort([78,34,23,09,0,2,34,7,4]))