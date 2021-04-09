const { test, expect } = require('@jest/globals')
const BubbleSort = require('../BubbleSort/BubbleSort')
const SelectionSort = require('../SelectionSort/SelectionSort')

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