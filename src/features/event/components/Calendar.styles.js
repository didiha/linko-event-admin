import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;

  width: 457px;

  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 8px;

  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 15px;
`;

export const MonthLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #111;
  padding-left: 5px;
  padding-right: 5px;
`;

export const NavGroup = styled.div`
  display: flex;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #444;
  cursor: pointer;
`;

export const IconWrap = styled.div`
  width: 8px;
  display: flex;
  justify-content: center;
  
  svg {
    flex-shrink: 0;
  }
`;

export const WeekRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
`;

export const Week = styled.div`
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: #6dd49e;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 10px;
`;

export const Empty = styled.div`
  height: 36px;
`;

export const DayCell = styled.div`
  position: relative;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

export const RangeBg = styled.div`
  position: absolute;

  left: ${({ isStart }) => (isStart ? "10%" : "-90%")};
  right: ${({ isEnd }) => (isEnd ? "10%" : "-90%")};

  top: 50%;
  transform: translateY(-50%);

  height: 48px;
  background: #efefef;
  border-radius: 50px;

  z-index: 0;
`;

export const DayCircle = styled.div`
  position: relative;
  z-index: 1;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;

  font-weight: ${({ selected, muted }) =>
    selected ? 500 : muted ? 400 : 500};

  color: ${({ selected, muted, disabled }) => {
    if (selected) return "#fff";
    if (disabled && muted) return "#777777";
    if (disabled) return "#ccc";
    return "#111";
  }};

  background: ${({ selected }) =>
    selected ? "#6DD49E" : "transparent"};

  &:hover {
    background: ${({ selected, disabled, muted }) =>
      selected
        ? "#6DD49E"
        : disabled || muted
        ? "transparent"
        : "#f2f2f2"};
  }
`;

