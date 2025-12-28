import { Field, Label, Description, InputBox, Padding } from "@/fetures/event/components/common/editor/EditorCommon.styles";

export default function CompetitionPreiodField() {

  return (
    <Field>
      <Label>신청 기간 [설정에서 변경 가능]</Label>
      <Description>
        신청 마감 이후에는 접수가 불가능하니 충분한 기간을 설정하세요.
      </Description>


      <Padding />
    </Field>
  );
}
