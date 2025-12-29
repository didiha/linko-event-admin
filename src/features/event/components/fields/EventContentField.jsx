import { Field, Label, Description, InputBox, CommonTextarea, Padding } from "@/components/common/EditorCommon.styles";
import { useRef } from "react";

export default function EventContentField({ value, onChange, editable }) {
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
      <Label>이벤트 내용</Label>
      <Description>
        이벤트의 특장점과 차별점을 강조하여 더 많은 관심을 유도하세요.
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
