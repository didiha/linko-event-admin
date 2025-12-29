import { TitleWrap, TitleText } from "./TitleField.styles";

export default function PreEventNameField({ title }) {
  return (
    <TitleWrap>
        <TitleText>{ title }</TitleText>
    </TitleWrap>
  );
}