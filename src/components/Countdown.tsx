"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const targetDate = new Date("2025-03-15T00:00:00").getTime();

  // Initialize the state with the type TimeLeft
  const [timeLeft, setTimeLeft] = useState<Partial<TimeLeft>>(
    calculateTimeLeft()
  );

  function calculateTimeLeft(): Partial<TimeLeft> {
    const difference = targetDate - new Date().getTime();
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
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    const value = timeLeft[interval as keyof TimeLeft]; // Type-safe access

    if (!value) {
      return null;
    }

    return (
      <span className="flex flex-col items-center mx-2" key={interval}>
        <span className="text-4xl font-bold">{value}</span>
        <span className="text-sm uppercase">{interval}</span>
      </span>
    );
  });

  return (
    <div className="flex justify-center items-center space-x-4 bg-white bg-opacity-80 rounded-lg p-4 shadow-lg">
      {timerComponents.filter(Boolean).length ? (
        timerComponents
      ) : (
        <span>Time&apos;s up!</span>
      )}
    </div>
  );
}
