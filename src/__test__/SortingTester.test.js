const { test, expect } = require('@jest/globals')
const BubbleSort = require('../BubbleSort/BubbleSort')
const SelectionSort = require('../SelectionSort/SelectionSort')
const QuickSort = require('../QuickSort/QuickSort')
const MergeSort = require('../MergeSort/MergeSort')

test('testing bubble sort',() =>{
    let testData = [4,2,3,6,1,8]
    const sortTester = new BubbleSort()
    expect(sortTester.sort(testData).map(data=>`${data}`).toString()).toBe('1,2,3,4,6,8')
    expect(sortTester.NoOfIterations).toBeGreaterThan(1)
})
test('testing bubble sort for already sorted array',() =>{
    let testData = [1,2,3,4,5,6]
    const sortTester = new BubbleSort()
    expect(sortTester.sort(testData).map(data=>`${data}`).toString()).toBe('1,2,3,4,5,6')
    expect(sortTester.NoOfIterations).toBe(1)
})
test('test selection sort',()=>{
    const selectionSortTester = new SelectionSort()
    const testArray = [1,2,8,4,0,21,5,92]
    expect(selectionSortTester.sort(testArray).map(data=>`${data}`).toString()).toBe('0,1,2,4,5,8,21,92')
})
test('test quick sort',() => {
    const quickSortTester = new QuickSort()
    const testArray = [4,2,3,6,1,8]
    quickSortTester.sort(testArray,testArray.length-1,0)
    expect(testArray.map(data=>`${data}`).toString()).toBe('1,2,3,4,6,8')
})
test('test mergeSort', () =>{
    const mergeSort = new MergeSort()
    const testArray = [1,2,8,4,0,21,5,92]
    expect(mergeSort.sort(testArray).map(data=>`${data}`).toString()).toBe('0,1,2,4,5,8,21,92')
})