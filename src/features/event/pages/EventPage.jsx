import Sidebar from "@/components/layout/Sidebar";
import { MainLayout } from "@/components/layout/MainLayout";
import { ContentLayout, EditorSection, PreviewSection, BoldLine } from "@/components/layout/ContentLayout";
import { useState } from "react";

import EventNameField from "../components/fields/EventNameField";
import EventImageField from "../components/fields/EventImageField";
import EventContentField from "../components/fields/EventContentField";
import CompetitionPreiodField from "../components/fields/CompetitionPreiodField";
import RegistrationPeriodField from "../components/fields/RegistrationPeriodField";
import CompetitionLocationField from "../components/fields/CompetitionLocationField";
import CompetitionOrganizerField from "../components/fields/CompetitionOrganizerField"
import CompetitionSponsorField from "../components/fields/CompetitionSponsorField";

export default function EventCreatePage() {
  const [form, setForm] = useState({
    eventName: "",
    eventContent: "",
    competitionDate: "",
    competitionLocation: "",
    competitionOrganizerField: "",
    competitionSponsor: "",
  });

  const handleChange = (key) => (value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <MainLayout>
      <Sidebar />

      <ContentLayout>
        <EditorSection>
          <EventNameField
            value={form.eventName}
            onChange={handleChange("eventName")}
          />

          <EventImageField />

          <EventContentField
            value={form.eventContent}
            onChange={handleChange("eventContent")}
          />

          <CompetitionPreiodField
            value={form.competitionDate}
            onChange={handleChange("competitionDate")}
          />

          <RegistrationPeriodField />

          <CompetitionLocationField
            value={form.competitionLocation}
            onChange={handleChange("competitionLocation")}
          />

          <CompetitionOrganizerField 
            value={form.competitionOrganizerField}
            onChange={handleChange("competitionOrganizerField")}
          />

          <CompetitionSponsorField
            value={form.competitionSponsor}
            onChange={handleChange("competitionSponsor")}
          />
        </EditorSection>

        <BoldLine />

        <PreviewSection>
          {form.eventName || "이벤트 이름 미리보기"}
        </PreviewSection>
      </ContentLayout>
    </MainLayout>
  );
}
