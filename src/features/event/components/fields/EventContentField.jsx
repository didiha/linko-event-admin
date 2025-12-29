import { Field, Label, Description, InputBox, CommonTextarea, Padding } from "@/components/common/EditorCommon.styles";
import { useRef } from "react";

export default function EventContentField({ value, onChange }) {
  const ref = useRef(null);

  const handleChange = (e) => {
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
