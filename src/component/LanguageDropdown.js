import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


function LanguageDropdown() {
  const [langugae, setlangugae] = useState("en")
  const changeLanguage= (value) =>{
    // console.log(langugae);
    console.log(value);
  }
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={changeLanguage} value="en">Action</Dropdown.Item>
        <Dropdown.Item onClick={changeLanguage} value="ar">Another action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageDropdown;