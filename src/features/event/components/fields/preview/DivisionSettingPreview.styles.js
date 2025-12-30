import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 20px 0 15px;
  background: #f9f9f9;
`;

export const Card = styled.div`
  width: 100%;
  padding: 15px 0;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const TitleRow = styled.div`
  width: 100%;
  padding: 0 10px;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.div`
  font-family: "Noto Sans KR";
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`;

export const InfoGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InfoRow = styled.div`
  width: 100%;
  padding: 0 10px;

  display: flex;
  justify-content: ${({ align }) =>
    align === "right" ? "flex-end" : "space-between"};
  align-items: center;
`;

export const Label = styled.div`
  font-family: "Noto Sans KR";
  font-weight: 400;
  font-size: 14px;
  color: #828282;
`;

export const Value = styled.div`
  font-family: "Noto Sans KR";
  font-weight: 500;
  font-size: 14px;
  color: #333333;
`;

export const RightText = styled.div`
  font-family: "Noto Sans KR";
  font-weight: 500;
  font-size: 14px;
  color: #828282;
`;
