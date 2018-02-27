import { expect } from 'chai';
import to from '../src/index';

async function promise(value) {
  return Promise.resolve(value);
}

async function promiseFail() {
  throw new Error('This promise failed')
}

describe('Await-catch', function() {
  describe('Array to', () => {
    it('should return the values if the promises are ok', async() => {
      const [ err, result ] = await to([promise(5), promise(5)]);
      expect(result).to.be.an('array').that.include.members([5, 5]);
    });
    it('should fail if one of the promises throw an error', async() => {
      const [ err, result ] = await to([promiseFail(), promise(5)]);
      expect(err).to.be.an('error');
    });
    it('should fail if both promises throw errors', async() => {
      const [ err, result ] = await to([promiseFail(), promiseFail()]);
      expect(err).to.be.an('error');
    });
  });
  describe('Promise to', () => {
    it('should return the value if the promise is ok', async() => {
      const [ err, result ] = await to(promise(5));
      expect(result).to.be.equal(5);
    });
    it('should fail if the promise throw an error', async() => {
      const [ err, result ] = await to(promiseFail());
      expect(err).to.be.an('error');
    });
  });
});
