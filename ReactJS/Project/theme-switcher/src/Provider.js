import React, { useState } from "react";
import PackageContext from "./Context";
const Provider = (props) => {
  const [mission, setmission] = useState({
    mname: "Kill Everyone",
    agent: 909,
    accept: "Accepted",
  });
  return (
    <PackageContext.Provider
      value={{
        data: mission,
        changeAccept: () => {
          setmission({ ...mission, accept: "NOT Intrested" });
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};
export default Provider;
