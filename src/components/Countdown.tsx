"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    const key = interval as keyof TimeLeft; // Explicitly cast `interval` as a key of TimeLeft
    if (!timeLeft[key]) {
      return null;
    }

    return (
      <span className="flex flex-col items-center mx-2" key={interval}>
        <span className="text-4xl font-bold">{timeLeft[key]}</span>
        <span className="text-sm uppercase">{interval}</span>
      </span>
    );
  });

  return (
    <div className="flex justify-center items-center space-x-4 bg-white bg-opacity-80 rounded-lg p-4 shadow-lg">
      {timerComponents.length ? timerComponents : <span>Times up!</span>}
    </div>
  );
}
