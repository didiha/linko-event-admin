import { Label, Description, LabDesWrap, Padding } from "@/components/common/PreviewCommon.styles";

export default function PreCompetitionLocationField({ description }) {
return (
    <LabDesWrap>
      <Label>대회 장소</Label>
      <Description>{description || "대회 장소가 설정되지 않았습니다."}</Description>
      <Padding />
    </LabDesWrap>
  );
}