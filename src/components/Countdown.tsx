"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownData {
  targetDate: string;
  description: string | null;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<Partial<TimeLeft>>({});
  const [countdownData, setCountdownData] = useState<CountdownData | null>(
    null
  );
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountdownData = async () => {
      try {
        const response = await fetch("/api/countdown");
        const data = await response.json();
        setCountdownData(data);
      } catch (error) {
        console.error("Failed to fetch countdown data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountdownData();
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!countdownData) return;

    const calculateTimeLeft = () => {
      const difference =
        new Date(countdownData.targetDate).getTime() - new Date().getTime();
      let timeLeft: Partial<TimeLeft> = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [countdownData]);

  if (!isMounted || !countdownData) {
    return null;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    const value = timeLeft[interval as keyof TimeLeft];

    if (!value && value !== 0) {
      return null;
    }

    return (
      <span className="flex flex-col items-center mx-2" key={interval}>
        <span className="text-4xl font-bold">{value}</span>
        <span className="text-sm uppercase">{interval}</span>
      </span>
    );
  });

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col items-center justify-center space-y-4   p-4 ">
      {countdownData.description && (
        <h2 className="text-2xl font-bold">{countdownData.description}</h2>
      )}
      <div className="flex justify-center items-center space-x-4">
        {timerComponents.filter(Boolean).length ? (
          timerComponents
        ) : (
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-yellow-500"></div>
        )}
      </div>
    </div>
  );
}
