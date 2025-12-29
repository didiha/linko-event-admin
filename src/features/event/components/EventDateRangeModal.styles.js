import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 1002px;
  height: 632px;

  background: #ffffff;
  box-shadow: 0px 40px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  padding: 10px 30px 25px 30px;
`;

export const Header = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #111;
`;

export const DatePreviewRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  margin-top: 16px;
`;

export const DatePreviewItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-self: start;
`;

export const PreviewLabel = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 30px;
`;

export const PreviewBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 221px;
  height: 32px;

  box-sizing: border-box;
  padding: 0 12px;

  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 8px;

  color: #cbcbcb;
`;

export const PreviewText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: inherit;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  gap: 24px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  border-radius: 15px;

  border: 1px solid #e5e5e5;
  background: #ffffff;
  color: #111;

  font-size: 14px;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  padding: 10px 20px;
  border-radius: 15px;

  background: #6dd49e;
  color: #ffffff;
  border: none;

  font-size: 14px;
  cursor: pointer;

  &:disabled {
    background: #cfcfcf;
    cursor: not-allowed;
  }
`;
