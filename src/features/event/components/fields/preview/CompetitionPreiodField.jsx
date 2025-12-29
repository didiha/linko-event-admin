import { Label, Description, LabDesWrap, Padding } from "@/components/common/PreviewCommon.styles";

export default function CompetitionPreiodField({ description }) {
return (
    <LabDesWrap>
      <Label>대회 기간</Label>
      <Description>{description}</Description>
      <Padding />
    </LabDesWrap>
  );
}