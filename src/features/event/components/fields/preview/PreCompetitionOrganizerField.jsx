import { Label, Description, LabDesWrap, Padding } from "@/components/common/PreviewCommon.styles";

export default function PreCompetitionOrganizerField({ description }) {
return (
    <LabDesWrap>
      <Label>주관사</Label>
      <Description>{description || "주관사가 없습니다."}</Description>
      <Padding />
    </LabDesWrap>
  );
}