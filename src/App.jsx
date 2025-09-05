import { useLocation } from "react-router";
import Navbar from "./components/Navbar";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("fasil");
  return <div>{!isOwnerPath && <Navbar />}</div>;
};
export default App;
