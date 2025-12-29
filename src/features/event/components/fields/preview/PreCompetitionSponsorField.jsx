import { Label, Description, LabDesWrap, Padding } from "@/components/common/PreviewCommon.styles";

export default function PreCompetitionSponsorField({ description }) {
return (
    <LabDesWrap>
      <Label>후원사</Label>
      <Description>{description || "후원사가 없습니다."}</Description>
      <Padding />
    </LabDesWrap>
  );
}