import { useRef } from "react";
import { ImageBox, HiddenFileInput, UploadPlaceholder } from "@/features/event/components/fields/EventImageField.styles";

export default function ImageUploadBox({
  aspect,
  image,
  setImage,
  placeholder,
}) {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImage(previewUrl);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImage(previewUrl);
  };

  return (
    <ImageBox
      aspect={aspect}
      onClick={handleClick}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
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
