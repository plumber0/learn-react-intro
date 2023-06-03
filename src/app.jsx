import React from 'react';
import { createRoot } from 'react-dom';

const Pet = (petInfo) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, petInfo.name),
    React.createElement("h3", {}, petInfo.sex),
    React.createElement("h3", {}, petInfo.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "maru", sex: "male", breed: "dog" }),
    React.createElement(Pet, { name: "capu", sex: "male", breed: "cat" }),
    React.createElement(Pet, { name: "bbyorong", sex: "female", breed: "dog" }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
