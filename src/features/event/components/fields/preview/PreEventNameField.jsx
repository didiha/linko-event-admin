import { TitleWrap, TitleText } from "./TitleField.styles";

export default function PreEventNameField({ title }) {
  return (
    <TitleWrap>
        <TitleText>{title || "이벤트 이름이 없습니다."}</TitleText>
    </TitleWrap>
  );
}