import { sum } from '../src/hello-world'

describe('calculate', function() {
    it('add', function() {
      let result = sum(5, 2);
      expect(result).toBe(7);
    });
  });