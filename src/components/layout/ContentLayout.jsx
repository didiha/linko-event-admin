import styled from "styled-components";

export const ContentLayout = styled.div`
  display: flex;
  flex: 1;
  padding: 10px 20px 10px 20px;
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
  align-items: center;
  width: 411px;

  background: #f9f9f9;
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