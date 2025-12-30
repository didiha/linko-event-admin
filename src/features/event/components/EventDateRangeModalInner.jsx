import { useState, useEffect } from "react";

import BaseModal from "@/components/common/BaseModal";
import Calendar from "./Calendar";

import { useDateRange } from "@/features/event/hooks/useDateRange";
import { isSameDay } from "@/features/event/utils/dateUtils";
import { formatDate } from "@/features/event/utils/dateUtils";

import CalendarStrokeIcon from "@/components/icons/CalendarStrokeIcon";

import {
  ModalContainer,
  Header,
  Title,
  DatePreviewRow,
  DatePreviewItem,
  PreviewLabel,
  PreviewBox,
  PreviewText,
  Content,
  Footer,
  CancelButton,
  ConfirmButton,
  Line,
  LineWrapper,
} from "./EventDateRangeModal.styles";

function EventDateRangeModalInner({
  initialStartDate,
  initialEndDate,
  onClose,
  onConfirm,
}) {
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  } = useDateRange(initialStartDate, initialEndDate);

  const [baseMonth, setBaseMonth] = useState(
    initialStartDate ?? new Date()
  );

  useEffect(() => {
    setBaseMonth(initialStartDate ?? new Date());
  }, [initialStartDate]);

  const handleSelectDate = (date) => {
    if (!startDate || endDate) {
      setStartDate(date);
      setEndDate(null);
      return;
    }

    if (isSameDay(date, startDate)) return;

    if (date < startDate) {
      setStartDate(date);
      setEndDate(startDate);
      return;
    }

    setEndDate(date);
  };

  return (
    <BaseModal onClose={onClose}>
      <ModalContainer>
        <Header>
          <Title>이벤트 신청 기간</Title>

          <DatePreviewRow>
            <DatePreviewItem>
              <PreviewLabel>접수 시작일</PreviewLabel>
              <PreviewBox>
                <CalendarStrokeIcon />
                <PreviewText>
                  {startDate ? formatDate(startDate) : "날짜 선택"}
                </PreviewText>
              </PreviewBox>
            </DatePreviewItem>

            <DatePreviewItem>
              <PreviewLabel>접수 종료일</PreviewLabel>
              <PreviewBox>
                <CalendarStrokeIcon />
                <PreviewText>
                  {endDate ? formatDate(endDate) : "날짜 선택"}
                </PreviewText>
              </PreviewBox>
            </DatePreviewItem>
          </DatePreviewRow>
        </Header>

        <Content>
          <Calendar
            startDate={startDate}
            endDate={endDate}
            initialMonth={baseMonth}
            onSelectDate={handleSelectDate}
          />

          <Calendar
            startDate={startDate}
            endDate={endDate}
            initialMonth={
              new Date(baseMonth.getFullYear(), baseMonth.getMonth() + 1, 1)
            }
            onSelectDate={handleSelectDate}
          />
        </Content>

        <LineWrapper>
          <Line />
        </LineWrapper>

        <Footer>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <ConfirmButton
            disabled={!startDate || !endDate}
            onClick={() => {
              onConfirm({ startDate, endDate });
            }}
          >
            저장하기
          </ConfirmButton>
        </Footer>
      </ModalContainer>
    </BaseModal>
  );
}

export default EventDateRangeModalInner;