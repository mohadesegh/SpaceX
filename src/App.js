import Navbar from "./Navbar";
import Banner from "./assets/banner.jpg";
import SecondBanner from "./assets/second-banner.jpg";
import FutureLaunchesData from "./future/FutureLaunchesData";
import PastLaunchesData from "./past/PastLaunchesData";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";

function App() {
  const styles = {
    backgroundImage: `url(${SecondBanner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="min-h-screen h-full min-w-full w-full" style={styles}>
      <Navbar />
      <Routes>
        <Route path="/past" element={<PastLaunchesData />} />
        <Route path="/future" element={<FutureLaunchesData />} />
      </Routes>
    </div>
  );
}

export default App;
