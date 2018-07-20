const { assert } = require('chai');
const sinon = require('sinon');
const onceFunc = require('./index');

describe('OnceFunc', () => {
  it('call the original function one time', () => {
    const fakeFunc = sinon.fake();
    const proxy = onceFunc(fakeFunc);
    proxy();
    proxy();
    assert(fakeFunc.calledOnce);
  });
});
