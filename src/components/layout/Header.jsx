import styled from "styled-components";

/* Header Wrapper */
const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 70px;
  width: 100%;

  /* Figma: padding: 0px 100px 0px 80px */
  padding: 0 100px 0 80px;
`;

/* Logo Area */
const LogoArea = styled.div`
  display: flex;
  align-items: center;

  padding: 18px 5px;
  gap: 10px;
`;

/* Logo Text */
const LogoText = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  color: #6dd49e;
`;

/* Right Area */
const RightArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 20px;
`;

/* Logout Button */
const LogoutButton = styled.button`
  background: none;
  border: none;
  padding: 0;

  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: #ffffff;
  cursor: pointer;
`;

/* Profile Icon */
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
`;

const ProfileCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;

export default function Header() {
  const handleLogoutClick = () => {
      alert("로그아웃 되었습니다");
  };

  return (
    <HeaderWrap>
      {/* Logo */}
      <LogoArea>
        <LogoText>EVENTER</LogoText>
      </LogoArea>

      {/* Right */}
      <RightArea>
        <LogoutButton type="button" onClick={handleLogoutClick}>
            로그아웃
        </LogoutButton>
        <ProfileContainer>
          <ProfileCircle />
        </ProfileContainer>
      </RightArea>
    </HeaderWrap>
  );
}
