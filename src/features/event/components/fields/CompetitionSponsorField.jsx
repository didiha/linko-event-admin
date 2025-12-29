import { Field, Label, Description, InputBox, CommonTextarea, Padding } from "@/components/common/EditorCommon.styles";
import { useRef } from "react";

export default function CompetitionSponsorField({ value, onChange }) {
  const ref = useRef(null);

  const handleChange = (e) => {
    onChange(e.target.value);

    if (!ref.current) return;

    ref.current.style.height = "auto";
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  };

  return (
    
    <Field>
      <Label>대회 후원사</Label>
      <Description>
        대회를 지원하는 기업, 단체 또는 기관의 이름을 입력하세요.
      </Description>

      <InputBox>
        <CommonTextarea
          ref={ref}
          value={value}
          onChange={handleChange}
          rows={1}
        />
      </InputBox>

      <Padding />
    </Field>
  );
}
