import { Field, Label, Description, InputBox, CommonTextarea, Padding } from "@/components/common/EditorCommon.styles";
import { useRef } from "react";

export default function CompetitionOrganizerField({ value, onChange, editable }) {
  const ref = useRef(null);

  const handleChange = (e) => {
    if (!editable) return;
    onChange(e.target.value);

    if (!ref.current) return;

    ref.current.style.height = "auto";
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  };

  return (
    
    <Field>
      <Label>대회 주관사</Label>
      <Description>
        대회를 주최·운영하는 기관, 단체 또는 기업의 이름을 입력하세요.
      </Description>

      <InputBox
        readOnly={!editable}
        style={{
          cursor: editable ? "text" : "default",
          opacity: editable ? 1 : 0.6,
        }}
      >
        <CommonTextarea
          ref={ref}
          value={value}
          onChange={handleChange}
          rows={1}
          readOnly={!editable}
          style={{
            pointerEvents: editable ? "auto" : "none",
          }}
        />
      </InputBox>

      <Padding />
    </Field>
  );
}
