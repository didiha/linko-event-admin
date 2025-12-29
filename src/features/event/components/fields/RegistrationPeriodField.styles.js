import styled from "styled-components";
import { InputBox } from "@/components/common/EditorCommon.styles";

export const RegistrationPeriodWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RegistrationPeriodSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5px;
`;

export const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
`;

export const DisplayBox = styled(InputBox).attrs({
  as: "button",
  type: "button",
})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 32px;
  padding: 10px 15px;
  border-radius: 8px;

  background: #2f2f32;
  cursor: pointer;

  border: 1px dashed #909090;
  outline: none;

  &:focus-visible {
    outline: 2px solid #6dd49e;
    outline-offset: 2px;
  }
`;

export const DateBox = styled(DisplayBox)`
  width: 135px;
  color: #ffffff;
`;

export const CalendarIconWrap = styled.span`
  color: #CBCBCB;

  ${DateBox}:hover & {
    color: #6DD49E;
  }
`;

export const TimeBox = styled(DisplayBox)`
  width: 92px;
  justify-content: center;
  color: #ffffff;
`;

export const PeriodLabel = styled.span`
  width: 39px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
`;

export const Tilde = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
`;
