import { Label, Description, LabDesWrap, Padding } from "@/components/common/PreviewCommon.styles";

export default function EventTitleField({ description }) {
return (
    <LabDesWrap>
      <Label>이벤트 내용</Label>
      <Description>{description}</Description>
      <Padding />
    </LabDesWrap>
  );
}