const err = (promise) => {
  const handleError = err => [ err ];
  const handleSuccess = data => [ null, data ];
  
  if (Array.isArray(promise)) {
    return Promise.all(promise)
      .then(handleSuccess)
      .catch(handleError);
  }
  
  return promise
    .then(handleSuccess)
    .catch(handleError);
};

export default err;
