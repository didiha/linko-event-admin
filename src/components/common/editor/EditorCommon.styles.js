import styled from "styled-components";

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding-bottom: 10px;
`;

export const LabelRow = styled.div`
  display: flex;
  gap: 10px;
`;

export const Label = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  padding-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 12px;
  color: #ffffff;
  padding-bottom: 20px;

   ${({ inline }) =>
    inline &&
    `
      font-size: 16px;
      font-weight: 400;
      padding-bottom: 10px;
    `}
`;

export const InputBox = styled.div`
  box-sizing: border-box;
  padding: 13px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px dashed #919191;
  border-radius: 5px;
`;

export const BaseTextarea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  overflow: hidden;
  color: #ffffff;
  font-family: "Noto Sans KR";
  text-justify: center;
`;

export const TitleTextarea = styled(BaseTextarea)`
  font-size: 21px;
  font-weight: 900;
`;

export const CommonTextarea = styled(BaseTextarea)`
  min-height: 17px;
  font-size: 14px;
  font-weight: 400;
`;

export const Padding = styled.div`
  padding: 10px;
`;
