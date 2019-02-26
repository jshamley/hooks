const useHttp = async url => {
  const res = await fetch(url);
  const returnValue = await res.json();
  return returnValue;
};

export default useHttp;
