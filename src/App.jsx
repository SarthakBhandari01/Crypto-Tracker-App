// import { useState } from "react";
import Routing from "./Component/Routing/Routing";
// import { CurrencyContext } from "./Context/currencyContext";

function App() {
  // const [currency, setCurrency] = useState("usd");
  return (
    <>
      {/* <CurrencyContext.Provider value={{ currency, setCurrency }}> */}
      <Routing />
      {/* </CurrencyContext.Provider> */}
    </>
  );
}

export default App;
