import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import { MainLayout } from "@/components/layout/MainLayout";
import { ContentWrapper, ContentLayout, EditorSection, PreviewSection, BoldLine } from "@/components/layout/ContentLayout";

import { ActionBar, ActionButton } from "../components/ActionBar";
import EventPreview from "@/features/event/components/EventPreview"
import EventEditor from "@/features/event/components/EventEditor";

export default function EventCreatePage() {
  const [form, setForm] = useState({
    eventName: "",
    eventContent: "",
    competitionDate: "",
    competitionLocation: "",
    competitionOrganizer: "",
    competitionSponsor: "",
    competitionGift: "",
    quareImage: null,
    registrationStartDate: null,
    registrationEndDate: null,
    giftImage: null,
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
            <EventEditor
              form={form}
              editable={isEditMode}
              onChange={handleChange}
              onChangeRegistrationPeriod={({ startDate, endDate }) => {
                setForm((prev) => ({
                  ...prev,
                  registrationStartDate: startDate,
                  registrationEndDate: endDate,
                }));
              }}
            />
          </EditorSection>

          <BoldLine />

          <PreviewSection>
            <EventPreview form={form} />
          </PreviewSection>
        </ContentLayout>
      </ContentWrapper>
    </MainLayout>
  );
}
