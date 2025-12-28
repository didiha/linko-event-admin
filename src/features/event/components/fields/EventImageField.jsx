import { useRef, useState } from "react";
import { Field, Label, Description, LabelRow, Padding } from "@/components/common/EditorCommon.styles";
import { ImageBox, ImageUploadArea, Line, HiddenFileInput, UploadPlaceholder } from "./EventImageField.style";

export default function EventImageField () {
  const squareInputRef = useRef(null);
  const wideInputRef = useRef(null);

  const [squareImage, setSquareImage] = useState(null);
  const [wideImage, setWideImage] = useState(null);

  const handleClick = (ref) => {
    ref.current?.click();
  };

  const handleDrop = (e, setImage) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImage(previewUrl);
  };

  const handleFileChange = (e, setImage) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImage(previewUrl);
  }

  return (
    <Field>
      <LabelRow>
      <Label>이벤트 홍보 사진</Label>
      <Description inline>
        (정방향 1080x1080, 가로형 1920x1080)
      </Description>
      </LabelRow>
      <Description>
        이벤트의 분위기를 한눈에 전달할 수 있는 이미지를 업로드하세요.
      </Description>

      <ImageUploadArea>
        <ImageBox 
          aspect="square" 
          onClick={() => handleClick(squareInputRef)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, setSquareImage)}
        >
          {squareImage ? (
            <img
              src={squareImage}
              alt="사진 1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <UploadPlaceholder>
              드래그하거나 클릭하여 사진을 업로드 하세요.
              <br />
              (정방향 1080×1080)
            </UploadPlaceholder>
          )}

          <HiddenFileInput
            ref={squareInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setSquareImage)}
          />
        </ImageBox>

        <Line />

        {/* 가로형 */}
        <ImageBox
          aspect="wide" 
          onClick={() => handleClick(wideInputRef)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, setWideImage)}
        >
          {wideImage ? (
            <img
              src={wideImage}
              alt="사진 2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
              <UploadPlaceholder>
                드래그하거나 클릭하여 사진을 업로드 하세요.
                <br />
                (가로형 1920×1080)
              </UploadPlaceholder>
          )}

          <HiddenFileInput
            ref={wideInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setWideImage)}
          />
        </ImageBox>
      </ImageUploadArea>

      <Padding />
    </Field>
  )
}