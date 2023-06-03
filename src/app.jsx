import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="maru" sex="male" breed="dog" />
      <Pet name="capu" sex="male" breed="cat" />
      <Pet name="bbyorong" sex="female" breed="dog" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
