class MergeSort{
    sort(array){
        if(array.length <= 1){
            return array
        }
        let mid = Math.floor(array.length/2)
        let leftArray = array.slice(0,mid)
        let rightArray = array.slice(mid,array.length)
        let leftSortedArray = this.sort(leftArray)
        let rightSortedArray = this.sort(rightArray)
        return this.merge(leftSortedArray,rightSortedArray)
    }

    merge(leftArray, rightArray){
        if(leftArray.length<1 && rightArray.length>0){
            return rightArray
        }
        else if(rightArray.length<1 && leftArray.length>0){
            return leftArray
        }
        let leftIndex = 0
        let rightIndex = 0
        let sortedArray = []
        while(leftIndex<leftArray.length && rightIndex <rightArray.length){
            if(leftArray[leftIndex]<rightArray[rightIndex]){
                sortedArray.push(leftArray[leftIndex])
                leftIndex++
            }
            else{
                sortedArray.push(rightArray[rightIndex])
                rightIndex++
            }
            
        }
        if(leftIndex<leftArray.length){
            sortedArray = sortedArray.concat(leftArray.slice(leftIndex)) 
        }
        if(rightIndex<rightArray.length){
            sortedArray = sortedArray.concat(rightArray.slice(rightIndex))
        }
        return sortedArray
    }
}
module.exports = MergeSort