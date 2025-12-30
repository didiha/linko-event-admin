import styled from "styled-components";

export const ApplyButtonWrap = styled.button`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #6dd49e;
  border-radius: 20px;
  border: none;

  font-family: "Noto Sans KR";
  font-weight: 700;
  font-size: 18px;
  line-height: 138%;
  color: #f9f9f9;

  cursor: pointer;

  &:active {
    opacity: 0.9;
  }
`;
