const err = async (promise) => {
  const handleError = err => [ err ];
  const handleSuccess = data => [null, data];

  if (Array.isArray(promise)) {
    return Promise.all(promise)
      .then(handleSuccess)
      .catch(handleError);
  }

  try {
    const data = await promise();
    handleSuccess(data);
  }catch(e){
    handleError(e);
  }
};

export default err;
