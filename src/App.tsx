import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/Rent")} className="text-red-700 text-4xl">
      HOMIFY
    </div>
  );
}

export default App;
