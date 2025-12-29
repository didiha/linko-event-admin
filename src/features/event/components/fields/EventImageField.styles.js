import styled from "styled-components";

export const ImageUploadArea = styled.div`
  display: flex;
  gap: 25px;
  width: 100%px;
`;

export const ImageBox = styled.div`
  width: ${({ aspect }) => {
    switch (aspect) {
      case "square":
        return "200px";
      case "portrait":
        return "411px";
      case "width":
        return "343px";
    }
  }};

  height: ${({ aspect }) => {
    switch (aspect) {
      case "square":
        return "200px";
      case "portrait":
        return "514px";
      default:
        return "148px";
    }
  }};

  background: rgba(255, 255, 255, 0.1);
  border: 2px dashed #919191;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  font-size: 12px;
  cursor: pointer;
  overflow: hidden;
`;

export const UploadPlaceholder = styled.div`
  text-align: center;
  line-height: 16px;
  white-space: pre-line;
`;

export const Line = styled.div`
  width: 1px;
  height: 180px;
  background: #ffffff;
  border-radius: 10px;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;
