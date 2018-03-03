import { expect } from 'chai';
import to from '../src';

const promiseSuccess = (value) => Promise.resolve(value);
const promiseFail = () => Promise.reject(new Error('This promise failed'));


describe('Await-catch', () => {

  describe('Array to', () => {
    it('should return the values if the promises are ok', async () => {
      const [ , result ] = await to([ promiseSuccess(5), promiseSuccess(5) ]);
      expect(result).to.be.an('array').that.include.members([5, 5]);
    });

    it('should fail if one of the promises throw an error', async () => {
      const [ err ] = await to([ promiseFail(), promiseSuccess(5) ]);
      expect(err).to.be.an('error');
    });

    it('should fail if both promises throw errors', async () => {
      const [ err ] = await to([ promiseFail(), promiseFail() ]);
      expect(err).to.be.an('error');
    });
  });

  describe('Promise to', () => {
    it('should return the value if the promise is ok', async () => {
      const [ , result ] = await to(promiseSuccess(5));
      expect(result).to.be.equal(5);
    });

    it('should fail if the promise throw an error', async () => {
      const [ err ] = await to(promiseFail());
      expect(err).to.be.an('error');
    });
  });
});
