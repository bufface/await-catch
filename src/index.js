const err = async (promise) => {
  const handleError = err => [ err ];
  const handleSuccess = data => [null, data];

  try{
    const data = (Array.isArray(promise)) ? await Promise.all(promise) : await promise();
    handleSuccess(data);
  }catch(e){
    handleError(e);
  }
};

export default err;
