import { Field, Label, Description, InputBox, Padding } from "@/components/common/EditorCommon.styles";
import { TitleTextarea } from "@/components/common/EditorCommon.styles";
import { useRef } from "react";

export default function EventNameField({ value, onChange, editable }) {
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
      <Label>이벤트 이름</Label>
      <Description>
        이벤트의 브랜드를 강화할 수 있는 직관적인 이름을 선택하세요.
      </Description>

      <InputBox
        readOnly={!editable}
        style={{
          cursor: editable ? "text" : "default",
          opacity: editable ? 1 : 0.6,
        }}
      >
        <TitleTextarea
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
