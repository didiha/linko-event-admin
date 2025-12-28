import Sidebar from "@/components/layout/Sidebar";
import { MainLayout } from "@/components/layout/MainLayout";
import { ContentLayout, EditorSection, PreviewSection, BoldLine } from "@/components/layout/ContentLayout";

import EventNameField from "../components/fields/EventNameField";
import EventImageField from "../components/fields/EventImageField";
import EventContentField from "../components/fields/EventContentField";
import CompetitionPreiodField from "../components/fields/CompetitionPreiodField";

import { useState } from "react";

export default function EventCreatePage() {
  const [eventName, setEventName] = useState("");
  const [eventContent, setEventContent] = useState("");
  const [competitionDate, setCompetitionDate] = useState("");

  return (
    <MainLayout>
      <Sidebar />

      <ContentLayout>
        <EditorSection>
          <EventNameField value={eventName} onChange={setEventName} />
          <EventImageField />
          <EventContentField
            value={eventContent}
            onChange={setEventContent}
          />
          <CompetitionPreiodField
            value={competitionDate}
            onChange={setCompetitionDate}
          />
        </EditorSection>

        <BoldLine />

        <PreviewSection>
          {eventName || "이벤트 이름 미리보기"}
        </PreviewSection>
      </ContentLayout>
    </MainLayout>
  );
}
