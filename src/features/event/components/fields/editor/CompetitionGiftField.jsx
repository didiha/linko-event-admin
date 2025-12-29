import { Field, Label, Description, InputBox, CommonTextarea, Padding } from "@/components/common/EditorCommon.styles";
import ImageUploadBox from "@/components/common/ImageUploadBox";
import { useRef, useState } from "react";

export default function CompetitionGiftField({ value, onChange, editable }) {
  const ref = useRef(null);

  const [squareImage, setSquareImage] = useState(null);
  const [wideImage, setWideImage] = useState(null);

  const handleChange = (e) => {
    if (!editable) return;
    onChange(e.target.value);

    if (!ref.current) return;

    ref.current.style.height = "auto";
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  };

  return (
    <Field>
      <Label>참가 공통 기념품 1080px x 1350px</Label>
      <Description>
        모든 참가자에게 제공되는 기념품 목록을 확인하세요.
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

      <div style={{ marginTop: "16px" }}>
        <ImageUploadBox
          aspect="portrait"
          image={squareImage}
          setImage={setSquareImage}
          editable={editable}
          placeholder={
          <>
            드래그하거나 클릭하여 사진을 업로드 하세요.
            <br />
            (정방향 1080×1080)
          </>
          }
        />
      </div>

      <Padding />
    </Field>
  );
}
