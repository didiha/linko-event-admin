import styled from "styled-components";

/* 전체 배경 */
const PageBackground = styled.div`
  min-height: 100vh;
  background: #000000;
  display: flex;
  justify-content: center;
  font-family: "Noto Sans KR", sans-serif;
`;

/* 맥북 14인치 기준 컨테이너 */
const PageContainer = styled.div`
  width: 1512px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export default function Layout({ children }) {
  return (
    <PageBackground>
      <PageContainer>{children}</PageContainer>
    </PageBackground>
  );
}
