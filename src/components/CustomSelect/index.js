import { useState } from "react";

import { Select } from "./Select";
import { Option } from "./Option";

import "./style.css";

export function CustomSelect({ options, selectLabel = "Selecione" }) {
  const [selected, setSelected] = useState("");
  const [activated, setActivated] = useState("");

  const [title, setTitle] = useState(selectLabel);

  function handleSelected(id) {
    const optionSelected = options.find((item) => item.id === id);
    setSelected(optionSelected);
    setTitle(optionSelected.labelText);
    setActivated("");
  }

  function handleActive() {
    setActivated(activated ? "" : "active");
  }

  return (
    <Select
      title={title}
      selectInputName="flexdirection"
      active={activated}
      setActive={handleActive}
    >
      {options.map((option) => (
        <Option
          id={option.id}
          name="flexdirection"
          labelText={option.labelText}
          setSelected={handleSelected}
        />
      ))}
    </Select>
  );
}
