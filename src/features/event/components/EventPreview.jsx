import { HeaderPadding } from "@/components/common/PreviewCommon.styles";
import HeaderField from "./fields/preview/HeaderField"
import PreEventNameField from "./fields/preview/PreEventNameField";
import EventContentTab from "./fields/preview/EventContentTab";
import PreEventContentField from "./fields/preview/PreEventContentField";
import PreCompetitionPreiodField from "./fields/preview/PreCompetitionPreiodField";
import PreRegistrationPeriodField from "./fields/preview/PreRegistrationPeriodField";
import PreCompetitionLocationField from "./fields/preview/PreCompetitionLocationField";
import PreCompetitionOrganizerField from "./fields/preview/PreCompetitionOrganizerField"
import PreCompetitionSponsorField from "./fields/preview/PreCompetitionSponsorField"
import PreCompetitionGiftField from "./fields/preview/PreCompetitionGiftField"
import DivisionSettingPreview from "./fields/preview/DivisionSettingPreview"
import { BigPadding } from "@/components/common/PreviewCommon.styles";
import ApplyButton from "./fields/preview/ApplyButton";

export default function EventPreviewPresenter({ form }) {
  return (
    <div className="preview-root">
      <HeaderField />

      <HeaderPadding />

      <PreEventNameField title={form.eventName} />

      <div
        style={{
            padding: "15px",
            backgroundColor: "#f9f9f9",
        }}
      >
        {form.squareImage && (
            <img
            src={form.squareImage}
            alt="이벤트 정방향 이미지"
            style={{
                width: "100%",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                marginTop: "16px",
            }}
            />
        )}
      </div>

      <EventContentTab />

      <PreEventContentField description={form.eventContent} />

      <PreCompetitionPreiodField description={form.competitionDate} />

      <PreRegistrationPeriodField
        startDate={form.registrationStartDate}
        endDate={form.registrationEndDate}
      />

      <PreCompetitionLocationField description={form.competitionLocation} />

      <PreCompetitionOrganizerField description={form.competitionOrganizer} />

      <PreCompetitionSponsorField description={form.competitionSponsor} />

      <PreCompetitionGiftField image={form.giftImage} />

      <DivisionSettingPreview
        title="Team league"
        eligibilityDetail="고등학생 이상"
        restriction="제한 없음"
        fee="10,000 KRW"
        location="Online"
      />

      <BigPadding />

      <ApplyButton />
    </div>
  );
}