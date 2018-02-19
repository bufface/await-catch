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
  
  // try{
  //   const data = (Array.isArray(promise)) ? Promise.all(promise) : promise();
  //   return handleSuccess(data);
  // }catch(e){
  //   return handleError(e);
  // }
};

export default err;
