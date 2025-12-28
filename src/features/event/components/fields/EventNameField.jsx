import { Field, Label, Description, InputBox, Padding } from "@/components/common/EditorCommon.styles";
import { TitleTextarea } from "@/components/common/EditorCommon.styles";
import { useRef } from "react";

export default function EventNameField({ value, onChange }) {
  const ref = useRef(null);

  const handleChange = (e) => {
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

      <InputBox>
        <TitleTextarea
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
