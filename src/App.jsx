import { useState } from "react";
import HomaPage from "./component/template/HomaPage";

function App() {
  const [count, setCount] = useState(0);

  return <HomaPage/>;
}

export default App;
