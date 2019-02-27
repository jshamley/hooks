import { useState, useEffect } from 'react';

const useStatus = bool => {
  const [status, setStatus] = useState(false);

  function handleStatusChange(status) {
    setStatus(status);
  }

  useEffect(() => {
    const newStatus = !status;
    handleStatusChange(newStatus);
  }, [bool]);

  return status;
};

export default useStatus;
