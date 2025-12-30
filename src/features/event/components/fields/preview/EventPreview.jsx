import { HeaderPadding } from "@/components/common/PreviewCommon.styles";
import HeaderField from "./HeaderField"
import PreEventNameField from "./PreEventNameField";
import EventContentTab from "./EventContentTab";
import PreEventContentField from "./PreEventContentField";
import PreCompetitionPreiodField from "./PreCompetitionPreiodField";
import PreRegistrationPeriodField from "./PreRegistrationPeriodField";
import PreCompetitionLocationField from "./PreCompetitionLocationField";
import PreCompetitionOrganizerField from "./PreCompetitionOrganizerField"
import PreCompetitionSponsorField from "./PreCompetitionSponsorField"
import PreCompetitionGiftField from "./PreCompetitionGiftField"

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

    </div>
  );
}