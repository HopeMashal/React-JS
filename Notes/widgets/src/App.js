import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/accordion" exact>
            <Accordion items={items} />
          </Route>
          <Route path="/list" exact>
            <Search />
          </Route>
          <Route path="/dropdown" exact>
            <button onClick={() => setShowDropdown(!showDropdown)}>
              Toggle Dropdown
            </button>
            {showDropdown ? (
              <Dropdown
                label="Select a Color"
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
              />
            ) : null}
          </Route>
          <Route path="/translate" exact>
            <Translate />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
