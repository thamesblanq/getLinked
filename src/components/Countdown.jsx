import { useState, useEffect } from "react";

const Countdown = () => {
  const days = 40;  
  const initialTimeInSeconds = days * 24 * 60 * 60; // Convert days to seconds
  const [count, setCount] = useState(initialTimeInSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    //clear interval
    return () => clearInterval(interval);
  }, [count]);

  //convert daysRemaining 
  const daysRemaining = Math.floor(count / 86400);
  //convert seconds to hours
  const hours = Math.floor((count % 86400) / 3600);
  //convert seconds to minutes
  const minutes = Math.floor((count % 3600) / 60);
  //convert remaining seconds to seconds less than 60
  const seconds = count % 60;

  return (
    <section>
      <div className='text-sm text-white font-unica mt-12 pb-4'>
        {daysRemaining && (
            <>
                <span className='text-4xl md:text-4xl'>{daysRemaining.toString().padStart(2, '0')}</span>D
            </>
        )}
        {hours > 0 && (
            <>
                <span className='text-4xl md:text-4xl'>{hours.toString().padStart(2, '0')}</span>H
            </>
        )}
        {minutes > 0 && (
            <>
                <span className='text-4xl md:text-4xl'>{minutes.toString().padStart(2, '0')}</span>M
            </>
        )}
        <span className='text-4xl md:text-4xl'>{seconds.toString().padStart(2, '0')}</span>S
      </div>
    </section>
  );
};

export default Countdown;
