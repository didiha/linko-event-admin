import { Field, Label, Description, InputBox, CommonTextarea, Padding } from "@/components/common/EditorCommon.styles";
import { useRef } from "react";

export default function CompetitionPreiodField({ value, onChange, editable }) {
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
      <Label>대회 기간</Label>
      <Description>
        예선, 본선, 결승 등 세부 일정이 잇는 경우 상세히 기재하세요.
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
