import { RegistrationPeriodWrap, RegistrationPeriodSection, PeriodLabel, DateBox, CalendarIconWrap, TimeBox, Tilde } from "./RegistrationPeriodField.styles";
import { Field, Label, Description, Padding } from "@/components/common/EditorCommon.styles";
import CalendarStrokeIcon from "@/components/icons/CalendarStrokeIcon";
import EventDateRangeModal from "../../EventDateRangeModal";
import { formatDate } from "@/features/event/utils/dateUtils";
import { useState } from "react";

export default function RegistrationPeriodField({
  editable,
  startDate,
  endDate,
  onChange,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (!editable) return;
    setIsModalOpen(true);
  };

  return (
    <Field>
      <Label>신청 기간 [설정에서 변경 가능]</Label>
      <Description>
        신청 마감 이후에는 접수가 불가능하니 충분한 기간을 설정하세요.
      </Description>

      <RegistrationPeriodWrap>
        {/* 시작 */}
        <RegistrationPeriodSection>
          <PeriodLabel>시작일</PeriodLabel>

          <DateBox onClick={openModal}
            style={{
              cursor: editable ? "text" : "default",
              opacity: editable ? 1 : 0.6,
              pointerEvents: editable ? "auto" : "none",
            }}
          >
            <span>{startDate ? formatDate(startDate) : "날짜 선택"}</span>
            <CalendarIconWrap>
              <CalendarStrokeIcon />
            </CalendarIconWrap>
          </DateBox>

          <TimeBox>10:00</TimeBox>
        </RegistrationPeriodSection>

        <Tilde>~</Tilde>

        {/* 종료 */}
        <RegistrationPeriodSection>
          <PeriodLabel>종료일</PeriodLabel>

          <DateBox onClick={openModal}
            style={{
              cursor: editable ? "text" : "default",
              opacity: editable ? 1 : 0.6,
              pointerEvents: editable ? "auto" : "none",
            }}
          >
            <span>{endDate ? formatDate(endDate) : "날짜 선택"}</span>
            <CalendarIconWrap>
              <CalendarStrokeIcon />
            </CalendarIconWrap>
          </DateBox>

          <TimeBox>23:59</TimeBox>
        </RegistrationPeriodSection>
      </RegistrationPeriodWrap>

      <Padding />

      <EventDateRangeModal
        open={isModalOpen && editable}
        onClose={() => setIsModalOpen(false)}
        onConfirm={({ startDate, endDate }) => {
          if (!editable) return;

          onChange({ startDate, endDate });
          setIsModalOpen(false);
        }}
      />
    </Field>
  );
}
