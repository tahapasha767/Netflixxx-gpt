import React from "react";
import { languages,lang } from "../utilies/constantlanguages";
import { useDispatch } from "react-redux";
import { change_the_lang } from "../utilies/langSlice";
import { useSelector } from "react-redux";

const Dropdown = () => {
    const flag=useSelector(store=>store.gpt.flag_for_gpt)
    const dispatch=useDispatch();
    const handleLanguageChange = (event) => {
        const selectedIdentifier = event.target.value; // Get the identifier from value
        dispatch(change_the_lang(selectedIdentifier)); // Dispatch the action
      };
  return (
    <div className="pt-7">
      {false&&<label htmlFor="languages">Select Language: </label>}
     {flag&&<select id="languages" className="rounded-md ml-5" onChange={handleLanguageChange}>
        {
            languages.map((obj)=>{
                return <option id={obj.identifier} value={obj.name} >{obj.name}</option>
            })

        }
        {/* <option value="" disabled>
          -- Choose a language --
        </option>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="Hindi">Hindi</option> */}
      </select>}
    </div>
  );
};

export default Dropdown;
