import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import { MainLayout } from "./components/layout/MainLayout";
import TopLayout from "./components/layout/TopLayout";

function App() {
  return (
    <TopLayout>
      <Header />
      
      <MainLayout>
        <Sidebar />
      </MainLayout>

      <Footer />
    </TopLayout>
  );
}


export default App;
