function bubbleSort(unsortedArray)
{
    let temp =0 ;
    for(let i=0;i<unsortedArray.length;i++){

        for(let j=0;j<(unsortedArray.length-i);j++)
      {
          if(unsortedArray[j]>unsortedArray[j+1]){
              temp = unsortedArray[j];
              unsortedArray[j] = unsortedArray[j+1];
              unsortedArray[j+1] = temp;
          }
      }
    }
    return unsortedArray;
}
console.log(bubbleSort([67,98,0,-2,89,3,12]));