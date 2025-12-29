import { RegistrationPeriodWrap, RegistrationPeriodSection, PeriodLabel, DateBox, CalendarIconWrap, TimeBox, Tilde } from "./RegistrationPeriodField.styles";
import { Field, Label, Description, Padding } from "@/components/common/EditorCommon.styles";
import CalendarStrokeIcon from "@/components/icons/CalendarStrokeIcon";
import EventDateRangeModal from "../EventDateRangeModal";
import { formatDate } from "@/features/event/utils/dateUtils";
import { useState } from "react";

export default function RegistrationPeriodField() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


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

          <DateBox onClick={() => setIsModalOpen(true)}>
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

          <DateBox onClick={() => setIsModalOpen(true)}>
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
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
          setIsModalOpen(false);
        }}
      />
    </Field>
  );
}
