import { Label, Description, LabDesWrap, Padding } from "@/components/common/PreviewCommon.styles";

function formatRegistrationPeriod(startDate, endDate) {
  if (!startDate || !endDate) return "";

  const pad = (n) => String(n).padStart(2, "0");

  const formatDate = (date) => {
    const year = String(date.getFullYear()).slice(2);
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());

    return `${year}년 ${month}월 ${day}일`;
  };

  return `${formatDate(startDate)}(10:00)부터 ${formatDate(
    endDate
  )}(23:59)까지`;
}

export default function RegistrationPeriodField({
  startDate,
  endDate,
}) {
  const text = formatRegistrationPeriod(startDate, endDate);

  return (
    <LabDesWrap>
      <Label>신청 기간</Label>
      <Description>
        {text || "신청 기간이 설정되지 않았습니다."}
      </Description>
      <Padding />
    </LabDesWrap>
  );
}