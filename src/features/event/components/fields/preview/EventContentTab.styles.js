import styled from "styled-components";

export const Wrapper = styled.div`
  width: 411px;
`;

export const TabBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  height: 32px;
  padding: 5px 0;

  background: #f9f9f9;
`;

export const TabItem = styled.div`
  flex: 1;
  text-align: center;

  font-family: "Noto Sans KR";
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  color: ${({ active }) => (active ? "#FF8B48" : "#4F4F4F")};
  cursor: pointer;
`;

export const IndicatorBar = styled.div`
  display: flex;
  width: 100%;
  height: 4px;

  background: #c4c4c4;
  border-radius: 60px;
  overflow: hidden;
`;

export const Indicator = styled.div`
  flex: 1;
  height: 100%;

  background: ${({ active }) => (active ? "#FF8B48" : "transparent")};
  border-radius: 500px;
  transition: background 0.2s ease;
`;

export const BottomPadding = styled.div`
  width: 100%;
  padding: 5px;

  background: #f9f9f9;
`;