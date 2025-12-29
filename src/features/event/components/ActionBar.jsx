import styled, { css } from "styled-components";

// Action Bar
export const ActionBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
`;

// Action Button
export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px 20px;

  font-family: "Noto Sans KR";
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: #ffffff;

  border-radius: 8px;
  cursor: pointer;

  ${({ variant }) =>
    variant === "save" &&
    css`
      background: #6dd49e;
      border: 1px solid #6dd49e;
    `}

  ${({ variant }) =>
    variant === "edit" &&
    css`
      background: #969696;
      border: 1px solid #969696;
    `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
