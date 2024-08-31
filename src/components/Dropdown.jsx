import { useState } from "react";
import Arrow from "../assets/arrow.svg";

const Dropdown = ({title, data, active = false}) => {
    const [opened, setOpened] = useState(active);

    const handleOpened = () => {
        setOpened(!opened);
    }
    return (
        <div className="kasa-dropdown">
            <div className="kasa-dropdown__title">
                {title} 
                <img className={`kasa-dropdown__arrow ${opened ? "kasa-dropdown__arrow--active" : ""}`} src={Arrow} onClick={handleOpened}/>
            </div>
            <div className={`kasa-dropdown__description ${opened ? "kasa-dropdown__description--open" : ""}`}>
                {Array.isArray(data) ? (
                    data.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                ) : (
                    <p>{data}</p>
                )}
            </div>
        </div>
    );
  };
  
  export default Dropdown;
  