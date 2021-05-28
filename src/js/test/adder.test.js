import adder from '../main/model/adder'

describe('Adder', () => {
  test('returns the sum of two numbers', () => {
    expect(adder(5, 3)).toEqual(8)
  })
})