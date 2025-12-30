import {
  Label,
  Description,
  LabDesWrap,
  Padding,
} from "@/components/common/PreviewCommon.styles";

export default function PreCompetitionGiftField({ image }) {
  return (
    <LabDesWrap>
      <Label>공통 기념품</Label>

      {image ? (
        <img
          src={image}
          alt="공통 기념품"
          style={{
            width: "100%",
            objectFit: "cover",
            background: "#f9f9f9",
            paddingTop: "10px",
          }}
        />
      ) : (
        <Description>
          공통 기념품이 없습니다.
        </Description>
      )}

      <Padding />
    </LabDesWrap>
  );
}
