import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import { MainLayout } from "./components/layout/MainLayout";
import TopLayout from "./components/layout/TopLayout";
import { ContentLayout, EditorSection, PreviewSection, BoldLine } from "./components/layout/ContentLayout";
import EventNameField from "./components/common/editor/EventNameField";

import { useState } from "react";
import EventImageField from "./components/common/editor/EventImageField";

function App() {
  const [eventName, setEventName] = useState("");

  return (
    <TopLayout>
      <Header />
      
      <MainLayout>
        <Sidebar />

        <ContentLayout>
          <EditorSection>
            <EventNameField 
              value={eventName}
              onChange={setEventName}
            />

            <EventImageField />
          </EditorSection>

          <BoldLine />

          <PreviewSection>
            {eventName || "이벤트 이름 미리보기"}
          </PreviewSection>
        </ContentLayout>

      </MainLayout>

      <Footer />
    </TopLayout>
  );
}


export default App;
