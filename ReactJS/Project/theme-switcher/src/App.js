import React, { Fragment } from "react";
import Provider from "./Provider";
import Context from "./Context";
const Agents = () => {
  return <Agent1 />;
};
const Agent1 = () => {
  return <Agent2 />;
};
const Agent2 = () => {
  return <Agent3 />;
};
const Agent3 = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h1>Misiion info</h1>
          <p>Mname : {context.data.agent}</p>
          <p>Aceept :{context.data.accept}</p>
          <button onClick={context.changeAccept}>Change mission</button>
        </Fragment>
      )}
    </Context.Consumer>
  );
};
export default function App() {
  return (
    <div>
      <h1>Context</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
}
