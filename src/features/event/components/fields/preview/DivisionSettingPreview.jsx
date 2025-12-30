import {
  Wrapper,
  Card,
  TitleRow,
  Arrow,
  Title,
  InfoGroup,
  InfoRow,
  Label,
  Value,
  RightText,
} from "./DivisionSettingPreview.styles";
import OrangeArrow from "@/components/icons/OrangeArrow"

export default function DivisionSettingPreview({
  title = "Team league",
  eligibilityDetail = "고등학생 이상",
  restriction = "제한 없음",
  fee = "무료",
  location = "서울",
}) {
  return (
    <Wrapper>
      <Card>
        {/* 제목 */}
        <TitleRow>
          <OrangeArrow />
          <Title>{title}</Title>
        </TitleRow>

        <InfoGroup>
          <InfoRow>
            <Label>참가 자격</Label>
            <Value>{eligibilityDetail}</Value>
          </InfoRow>

          <InfoRow align="right">
            <RightText>{restriction}</RightText>
          </InfoRow>
        </InfoGroup>

        <InfoRow>
          <Label>참가비</Label>
          <Value>{fee}</Value>
        </InfoRow>

        <InfoRow>
          <Label>대회 장소</Label>
          <Value>{location}</Value>
        </InfoRow>
      </Card>
    </Wrapper>
  );
}
