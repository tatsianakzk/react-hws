
import './App.css';
import Header from './Components/page_component/Header/Header';
import Footer from './Components/page_component/Footer/Footer';
import AppRoutes from "./Routes";

const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;