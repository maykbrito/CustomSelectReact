export function Select({
  selectInputName,
  children,
  title,
  active,
  setActive
}) {
  return (
    <div className={selectInputName + " select-box"}>
      <div className={active + " options-container"}>{children}</div>
      <div className="selected" onClick={setActive}>
        {title}
      </div>
    </div>
  );
}
