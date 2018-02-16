const err = async (promise) => {
  const handleError = err => [ err ];
  const handleSuccess = data => [null, data];

  try{
    const data = (Array.isArray(promise)) ? await Promise.all(promise) : await promise();
    return handleSuccess(data);
  }catch(e){
    return handleError(e);
  }
};

export default err;
