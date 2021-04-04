const { test, expect } = require('@jest/globals')
const BubbleSort = require('../BubbleSort/BubbleSort')

test('testing bubble sort',() =>{
    let testData = [4,2,3,6,1,8]
    const sortTester = new BubbleSort()
    expect(sortTester.sort(testData).map(data=>`${data}`).toString()).toBe('1,2,3,4,6,8')
})