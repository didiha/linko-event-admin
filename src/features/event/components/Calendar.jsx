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
  const prevMonthDays = new Date(year, month, 0).getDate();

  const matrix = [];
  let week = [];

  // 이전 달 날짜 채우기
  for (let i = startDay - 1; i >= 0; i--) {
    week.push({
      date: new Date(year, month - 1, prevMonthDays - i),
      type: "prev",
    });
  }

  // 현재 달
  for (let day = 1; day <= daysInMonth; day++) {
    week.push({
      date: new Date(year, month, day),
      type: "current",
    });

    if (week.length === 7) {
      matrix.push(week);
      week = [];
    }
  }

  // 다음 달 날짜 채우기
  let nextDay = 1;
  if (week.length) {
    while (week.length < 7) {
      week.push({
        date: new Date(year, month + 1, nextDay++),
        type: "next",
      });
    }
    matrix.push(week);
  }

  return matrix;
}

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
        week.map(({ date, type }, di) => {
          const isCurrentMonth = type === "current";

          const isStart = isSameDay(date, startDate);
          const isEnd = isSameDay(date, endDate);
          const inRange = isInRange(date, startDate, endDate);

          const disabled =
            !isCurrentMonth || isBeforeToday(date);

          const isWeekStart = di === 0;
          const isWeekEnd = di === 6;

          return (
            <DayCell
              key={date.toISOString()}
              disabled={disabled}
              muted={!isCurrentMonth}
              onClick={() => {
                if (disabled) return;
                onSelectDate(date);
              }}
            >
              {(inRange || isStart || isEnd) && (
                <RangeBg
                  isStart={isStart || isWeekStart}
                  isEnd={isEnd || isWeekEnd}
                />
              )}

              <DayCircle
                selected={isStart || isEnd}
                disabled={disabled}
                muted={!isCurrentMonth}
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
