const onceFunc = (fnArgs) => {
  let value;
  let isCalled = false;
  const returnFunc = () => {
    if (!isCalled) {
      isCalled = true;
      value = fnArgs.apply(this);
    }
    return value;
  };
  return returnFunc;
};
module.exports = onceFunc;
