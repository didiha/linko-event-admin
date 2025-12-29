import { Label, Description, LabDesWrap, Padding } from "@/components/common/PreviewCommon.styles";

export default function CompetitionPreiodField({ description }) {
return (
    <LabDesWrap>
      <Label>대회 기간</Label>
      <Description>{description || "대회 기간이 설정되지 않았습니다."}</Description>
      <Padding />
    </LabDesWrap>
  );
}