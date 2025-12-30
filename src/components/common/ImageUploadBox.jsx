import { useRef } from "react";
import { ImageBox, HiddenFileInput, UploadPlaceholder } from "@/components/common/EventImageField.styles";

export default function ImageUploadBox({
  aspect,
  image,
  setImage,
  placeholder,
  editable,
}) {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (!editable) return;
    inputRef.current?.click();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (!editable) return;

    const file = e.dataTransfer.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImage(previewUrl);
  };

  const handleFileChange = (e) => {
    if (!editable) return;
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImage(previewUrl);
  };

  return (
    <ImageBox
      aspect={aspect}
      hasImage={!!image}
      onClick={handleClick}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      style={{
        cursor: editable ? "pointer" : "default",
        opacity: editable ? 1 : 0.6,
        pointerEvents: editable ? "auto" : "none",
      }}
    >
      {image ? (
        <img
          src={image}
          alt="업로드 이미지"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <UploadPlaceholder>
          {placeholder}
        </UploadPlaceholder>
      )}

      <HiddenFileInput
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </ImageBox>
  );
}
