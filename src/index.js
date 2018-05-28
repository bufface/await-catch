import "babel-polyfill";

const error = async promise => {
  try {
    const data = Array.isArray(promise)
      ? await Promise.all(promise)
      : await promise;
    return [null, data];
  } catch (err) {
    return [err];
  }
};

export default error;
