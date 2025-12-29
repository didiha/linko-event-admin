import { useState } from "react";
import {
  Field,
  Label,
  Description,
  LabelRow,
  Padding,
} from "@/components/common/EditorCommon.styles";

import {
  ImageUploadArea,
  Line,
} from "./EventImageField.styles";

import ImageUploadBox from "@/components/common/ImageUploadBox";

export default function EventImageField() {
  const [squareImage, setSquareImage] = useState(null);
  const [wideImage, setWideImage] = useState(null);

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
        <ImageUploadBox
          aspect="square"
          image={squareImage}
          setImage={setSquareImage}
          placeholder={
            <>
              드래그하거나 클릭하여 사진을 업로드 하세요.
              <br />
              (정방향 1080×1080)
            </>
          }
        />

        <Line />

        <ImageUploadBox
          aspect="wide"
          image={wideImage}
          setImage={setWideImage}
          placeholder={
            <>
              드래그하거나 클릭하여 사진을 업로드 하세요.
              <br />
              (가로형 1920×1080)
            </>
          }
        />
      </ImageUploadArea>

      <Padding />
    </Field>
  );
}
