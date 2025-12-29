import { useState, useEffect } from "react";
import {
  isSameDay,
  isInRange,
  isBeforeToday,
} from "@/features/event/utils/dateUtils";

import {
  Wrapper,
  Header,
  MonthLabel,
  NavGroup,
  NavButton,
  IconWrap,
  WeekRow,
  Week,
  Grid,
  Empty,
  DayCell,
  RangeBg,
  DayCircle,
} from "./Calendar.styles";
import RightArrow from "@/components/icons/RightArrow";
import RightDoubleArrow from "@/components/icons/RightDoubleArrow";
import LeftArrow from "@/components/icons/LeftArrow";
import LeftDoubleArrow from "@/components/icons/LeftDoubleArrow";

/* ---------- utils ---------- */
const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function getMonthMatrix(year, month) {
  const firstDay = new Date(year, month, 1);
  const startDay = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const matrix = [];
  let week = [];

  for (let i = 0; i < startDay; i++) week.push(null);

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(new Date(year, month, day));
    if (week.length === 7) {
      matrix.push(week);
      week = [];
    }
  }

  if (week.length) {
    while (week.length < 7) week.push(null);
    matrix.push(week);
  }

  return matrix;
}

/* ---------- component ---------- */
export default function Calendar({ startDate, endDate, onSelectDate, initialMonth }) {
  const [current, setCurrent] = useState(initialMonth ?? startDate ?? new Date());

  const year = current.getFullYear();
  const month = current.getMonth();
  const matrix = getMonthMatrix(year, month);

  useEffect(() => {
    if (initialMonth) {
        setCurrent(initialMonth);
    }
  }, [initialMonth]);

  return (
    <Wrapper>
      {/* Header */}
      <Header>
        <NavGroup>
          <NavButton onClick={() => setCurrent(new Date(year - 1, month, 1))}>
            <IconWrap>
              <RightDoubleArrow />
            </IconWrap>
          </NavButton>
          <NavButton onClick={() => setCurrent(new Date(year, month - 1, 1))}>
            <IconWrap>
              <RightArrow />
            </IconWrap>
          </NavButton>
        </NavGroup>

        <MonthLabel>
          {year}년 {month + 1}월
        </MonthLabel>

        <NavGroup>
          <NavButton onClick={() => setCurrent(new Date(year, month + 1, 1))}>
            <IconWrap>
              <LeftArrow />
            </IconWrap>
          </NavButton>
          <NavButton onClick={() => setCurrent(new Date(year + 1, month, 1))}>
            <IconWrap>
              <LeftDoubleArrow />
            </IconWrap>
          </NavButton>
        </NavGroup>
    </Header>

      {/* Weekdays */}
      <WeekRow>
        {WEEKDAYS.map((d) => (
          <Week key={d}>{d}</Week>
        ))}
      </WeekRow>

      {/* Grid */}
      <Grid>
        {matrix.map((week, wi) =>
          week.map((date, di) => {
            if (!date) return <Empty key={`${wi}-${di}`} />;

            const isStart = isSameDay(date, startDate);
            const isEnd = isSameDay(date, endDate);
            const inRange = isInRange(date, startDate, endDate);
            const disabled = isBeforeToday(date);
            const isWeekStart = di === 0;
            const isWeekEnd = di === 6;

            return (
              <DayCell
                key={date.toISOString()}
                disabled={disabled}
                onClick={() => {
                if (disabled) return;
                onSelectDate(date);
                }}
              >
                {/* 회색 range 배경 */}
                {(inRange || isStart || isEnd) && (
                  <RangeBg
                    isStart={isStart || isWeekStart}
                    isEnd={isEnd || isWeekEnd}
                  />
                )}

                {/* 날짜 원 */}
                <DayCircle
                  selected={isStart || isEnd}
                  disabled={disabled}
                  >
                  {date.getDate()}
                </DayCircle>
              </DayCell>
            );
          })
        )}
      </Grid>
    </Wrapper>
  );
}
