import "./styles.css";

import { CustomSelect } from "./components/CustomSelect";

const options = [
  { id: "row", labelText: "flex-direction: row" },
  { id: "column", labelText: "flex-direction: column" },
  { id: "column-reverse", labelText: "flex-direction: column-reverse" },
  { id: "row-reverse", labelText: "flex-direction: row-reverse" }
];

const options2 = [
  { id: "stretch", labelText: "align-items: stretch" },
  { id: "center", labelText: "align-items: center" },
  { id: "flex-start", labelText: "align-items: flex-start" },
  { id: "flex-end", labelText: "align-items: flex-end" }
];

export default function App() {
  return (
    <>
      <div style={{marginBottom: '30px'}} />
      <CustomSelect options={options} />
      <div style={{marginBottom: '30px'}} />
      <CustomSelect options={options2} />
    </>
  );
}
