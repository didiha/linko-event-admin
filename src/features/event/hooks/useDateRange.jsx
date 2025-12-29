import { useState } from "react";

export function useDateRange(initialStart, initialEnd) {
  const [startDate, setStartDate] = useState(initialStart ?? null);
  const [endDate, setEndDate] = useState(initialEnd ?? null);

  return {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  };
}
