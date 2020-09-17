import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, setSelected, label }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const onDropdownClick = () => setOpen(!open);

  useEffect(() => {
    const onBodyClick = e => { if (!dropdownRef.current.contains(e.target)) setOpen(false); };
    document.body.addEventListener('click', onBodyClick);
    return () => document.body.removeEventListener('click', onBodyClick);
  }, []);

  const renderedOptions = options.map((option, i) => {
    if (i === selected) return null;
    else return (
      <div key={i} className="item" onClick={() => setSelected(i)}>
        {option.label}
      </div>
    )
  });

  let classNameObject = {
    containerClassname: "ui selection dropdown",
    dropdownClassname: "menu"
  };
  if (open) {
    classNameObject.containerClassname += " visible active";
    classNameObject.dropdownClassname += " visible transition";
  }

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div ref={dropdownRef} onClick={onDropdownClick} className={classNameObject.containerClassname}>
          <i className="dropdown icon"/>
          <div className="text">{selected !== null ? options[selected].label : 'Select Color'}</div>
          <div className={classNameObject.dropdownClassname}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;