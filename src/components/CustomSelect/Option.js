export function Option({ id, selectInputName, labelText, setSelected }) {
  return (
    <div className="option" onClick={() => setSelected(id)}>
      <input type="radio" id={id} name={selectInputName} />
      <label for={id}>{labelText}</label>
    </div>
  );
}
