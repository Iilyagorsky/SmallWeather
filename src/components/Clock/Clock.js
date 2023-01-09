import { useState, useEffect } from 'react';

function Clock(){
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <span>
      {new Date().toUTCString().split(' ').slice(1,4).join(' ') + ' ' + date.toLocaleTimeString()}
    </span>
  );
}
export default Clock;