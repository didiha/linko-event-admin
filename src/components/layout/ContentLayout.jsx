import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  padding: 10px 20px 10px 20px;
  flex-direction: column;
  flex: 1;
`;

export const ContentLayout = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
`;

export const EditorSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  padding: 20px;
  gap: 2px;
  border-radius: 20px;
  border: none;

  background: #17171B;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
`;

export const PreviewSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 411px;

  background: #ffffff;
  border-radius: 20px;
  border: none;
`

export const BoldLineWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: stretch;
`;

export const BoldLine = styled.div`
  width: 3px;
  background: #ffffff;
  border-radius: 10px;
  margin: 10px 0;
`;