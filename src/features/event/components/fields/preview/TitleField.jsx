import { TitleWrap, TitleText } from "./TitleField.styles";

export default function TitleField({ title }) {
  return (
    <TitleWrap>
        <TitleText>{ title }</TitleText>
    </TitleWrap>
  );
}