import { Field, Label, Description, InputBox, Padding } from "@/components/common/EditorCommon.styles";
import { CommonTextarea } from "@/components/common/EditorCommon.styles";
import { useRef } from "react";

export default function CompetitionLocationField({ value, onChange }) {
  const ref = useRef(null);

  const handleChange = (e) => {
    onChange(e.target.value);

    if (!ref.current) return;

    ref.current.style.height = "auto";
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  };

  return (
    
    <Field>
      <Label>대회 장소</Label>
      <Description>
        참가자와 관중이 쉽게 찾아올 수 있도록 주소를 상세히 기재하세요.
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
