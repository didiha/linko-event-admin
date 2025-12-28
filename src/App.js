import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import EventPage from "@/features/event/pages/EventPage"
import TopLayout from "@/components/layout/TopLayout";

function App() {

  return (
    <TopLayout>
      <Header />

      <EventPage />

      <Footer />
    </TopLayout>
  );
}

export default App;
