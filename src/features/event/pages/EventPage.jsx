import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import { MainLayout } from "@/components/layout/MainLayout";
import { ContentWrapper, ContentLayout, EditorSection, PreviewSection, BoldLine } from "@/components/layout/ContentLayout";

import EventNameField from "../components/fields/EventNameField";
import EventImageField from "../components/fields/EventImageField";
import EventContentField from "../components/fields/EventContentField";
import CompetitionPreiodField from "../components/fields/CompetitionPreiodField";
import RegistrationPeriodField from "../components/fields/RegistrationPeriodField";
import CompetitionLocationField from "../components/fields/CompetitionLocationField";
import CompetitionOrganizerField from "../components/fields/CompetitionOrganizerField"
import CompetitionSponsorField from "../components/fields/CompetitionSponsorField";
import CompetitionGiftField from "../components/fields/CompetitionGiftField";
import { ActionBar, ActionButton } from "../components/ActionBar";

export default function EventCreatePage() {
  const [form, setForm] = useState({
    eventName: "",
    eventContent: "",
    competitionDate: "",
    competitionLocation: "",
    competitionOrganizerField: "",
    competitionSponsor: "",
    competitionGift: "",
  });

  const handleChange = (key) => (value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    console.log("save", form);
    setIsEditMode(false);
  };

  return (
    <MainLayout>
      <Sidebar />
      <ContentWrapper>
        <ActionBar>
          {isEditMode ? (
            <ActionButton variant="save" onClick={handleSave}>
              저장하기
            </ActionButton>
          ) : (
            <ActionButton variant="edit" onClick={handleEdit}>
              수정하기
            </ActionButton>
          )}
        </ActionBar>

        <ContentLayout>
          <EditorSection>
            <EventNameField
              value={form.eventName}
              onChange={handleChange("eventName")}
              editable={isEditMode}
            />

            <EventImageField 
              editable={isEditMode}
            />

            <EventContentField
              value={form.eventContent}
              onChange={handleChange("eventContent")}
              editable={isEditMode}
            />

            <CompetitionPreiodField
              value={form.competitionDate}
              onChange={handleChange("competitionDate")}
              editable={isEditMode}
            />

            <RegistrationPeriodField 
              editable={isEditMode}
            />

            <CompetitionLocationField
              value={form.competitionLocation}
              onChange={handleChange("competitionLocation")}
              editable={isEditMode}
            />

            <CompetitionOrganizerField 
              value={form.competitionOrganizerField}
              onChange={handleChange("competitionOrganizerField")}
              editable={isEditMode}
            />

            <CompetitionSponsorField
              value={form.competitionSponsor}
              onChange={handleChange("competitionSponsor")}
              editable={isEditMode}
            />

            <CompetitionGiftField 
              value={form.competitionGift}
              onChange={handleChange("competitionGift")}
              editable={isEditMode}
            />
          </EditorSection>

          <BoldLine />

          <PreviewSection>
            {form.eventName || "이벤트 이름 미리보기"}
          </PreviewSection>
        </ContentLayout>
      </ContentWrapper>
    </MainLayout>
  );
}
