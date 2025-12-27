import styled from "styled-components";

const Wrap = styled.footer`
  width: 100%;
  padding: 60px 0 40px;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  width: 1040px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  align-items: center;
  justify-content: center;
`;

const LinkText = styled.a`
  color: #6dd49e;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  cursor: pointer;
`;

const Text = styled.span`
  color: #969696;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const Divider = styled.span`
  color: #969696;
`;

export default function Footer() {
  return (
    <Wrap>
      <Inner>
        <Row>
          <LinkText href="#terms">이용약관</LinkText>
          <LinkText href="#privacy">개인정보처리방침</LinkText>
          <LinkText href="#cs">고객센터</LinkText>

          <Text>회사명 : 링크매니저(Link Manager)</Text>
          <Divider>|</Divider>
          <Text>대표 : 이은표</Text>
          <Divider>|</Divider>
          <Text>사업자등록번호 : 000-00-00000</Text>
          <Divider>|</Divider>
        </Row>

        <Row>
          <Text>개인정보책임자 : 홍길동</Text>
          <Divider>|</Divider>
          <Text>EMAIL : pcs2354@naver.com</Text>
          <Divider>|</Divider>
          <Text>TEL : 000-0000-0000</Text>
          <Divider>|</Divider>
          <Text>주소 : 경기도 안산시 상록구 초지동 원선1로 38</Text>
        </Row>
      </Inner>
    </Wrap>
  );
}
