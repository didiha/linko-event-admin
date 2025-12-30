import EventNameField from "./fields/editor/EventNameField";
import EventImageField from "./fields/editor/EventImageField";
import EventContentField from "./fields/editor/EventContentField";
import CompetitionPreiodField from "./fields/editor/CompetitionPreiodField";
import RegistrationPeriodField from "./fields/editor/RegistrationPeriodField";
import CompetitionLocationField from "./fields/editor/CompetitionLocationField";
import CompetitionOrganizerField from "./fields/editor/CompetitionOrganizerField";
import CompetitionSponsorField from "./fields/editor/CompetitionSponsorField";
import CompetitionGiftField from "./fields/editor/CompetitionGiftField";

export default function EventEditor({
  form,
  onChange,
  editable,
  onChangeRegistrationPeriod,
}) {
  return (
    <>
      <EventNameField
        value={form.eventName}
        onChange={onChange("eventName")}
        editable={editable}
      />

      <EventImageField
        editable={editable}
        squareImage={form.squareImage}
        setSquareImage={onChange("squareImage")}
        wideImage={form.wideImage}
        setWideImage={onChange("wideImage")}
      />

      <EventContentField
        value={form.eventContent}
        onChange={onChange("eventContent")}
        editable={editable}
      />

      <CompetitionPreiodField
        value={form.competitionDate}
        onChange={onChange("competitionDate")}
        editable={editable}
      />

      <RegistrationPeriodField
        editable={editable}
        startDate={form.registrationStartDate}
        endDate={form.registrationEndDate}
        onChange={onChangeRegistrationPeriod}
      />

      <CompetitionLocationField
        value={form.competitionLocation}
        onChange={onChange("competitionLocation")}
        editable={editable}
      />

      <CompetitionOrganizerField
        value={form.competitionOrganizer}
        onChange={onChange("competitionOrganizer")}
        editable={editable}
      />

      <CompetitionSponsorField
        value={form.competitionSponsor}
        onChange={onChange("competitionSponsor")}
        editable={editable}
      />

      <CompetitionGiftField
        value={form.competitionGift}
        onChange={onChange("competitionGift")}
        editable={editable}
        giftImage={form.giftImage}
        setGiftImage={onChange("giftImage")}
      />
    </>
  );
}
