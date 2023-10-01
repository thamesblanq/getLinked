import { useState, useEffect, useMemo } from "react";

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

  // Memoize a derived value (e.g., formatted time)
  const formattedTime = useMemo(() => {
    // Calculate and format the time based on count
    // Example: "40D 12H 34M 56S"
    // This is just a placeholder, you can format it as needed
    return `${Math.floor(count / 86400)}D ${Math.floor((count % 86400) / 3600)}H ${Math.floor((count % 3600) / 60)}M ${count % 60}S`;
  }, [count]);

  return (
    <section>
      {count ? (
                <div className='text-2xl text-white font-unica mt-12 pb-4'>
                  {formattedTime}  
                </div>
      ) : (
          <p className="flex items-center justify-center font-montserrat font-bold text-white text-2xl">Countdown is finished</p>
      )}

    </section>
  );
};

export default Countdown;
