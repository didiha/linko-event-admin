import { HeaderPadding } from "@/components/common/PreviewCommon.styles";
import HeaderField from "./HeaderField"
import TitleField from "./TitleField";
import EventContentTab from "./EventContentTab";
import EventContentField from "../preview/EventContentField";
import CompetitionPreiodField from "./CompetitionPreiodField";

export default function EventPreviewPresenter({ form }) {
  return (
    <div className="preview-root">
      <HeaderField />

      <HeaderPadding />

      <TitleField title={form.eventName} />

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

      <EventContentField description={form.eventContent} />

      <CompetitionPreiodField description={form.competitionDate} />

      
      {/*
      <EventContent content={form.eventContent} />
      <CompetitionDate date={form.competitionDate} />
      <Location location={form.competitionLocation} />
      <Organizer organizer={form.competitionOrganizerField} />
      <Sponsor sponsor={form.competitionSponsor} />
      <Gift gift={form.competitionGift} /> */}
    </div>
  );
}