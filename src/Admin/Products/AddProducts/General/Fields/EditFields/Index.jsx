import React, { useState } from "react";
import styles from "./index.module.css";
import { IoImageOutline, IoLinkOutline } from "react-icons/io5";
import {
  MdFormatBold,
  MdOutlineFormatColorFill,
  MdOutlineFormatColorText,
  MdOutlineFormatItalic,
} from "react-icons/md";
import URLField from "../../../../../../widgets/URL/Index";
import OutlineBtn from "../../../../../../widgets/Outlinebutton/Index";
import Checkbox from "../../../../../../widgets/checkbox/Index";
const EditField = ({
  active,
  strong,
  itallic,
  setactive,
  setheadingtext,
  setstrong,
  setitallic,
}) => {
  const [classname1, setclassname1] = useState(false);
  const [classname2, setclassname2] = useState(false);
  const [classname3, setclassname3] = useState(false);
  const [classname4, setclassname4] = useState(false);
  const [classname5, setclassname5] = useState(false);
  const [classname6, setclassname6] = useState(false);
  const [classname7, setclassname7] = useState(false);

  const setheading = (e) => {
    setclassname3(!classname3);
    if (e == "Heading1") {
      setheadingtext("40px");
    } else if (e == "Heading2") {
      setheadingtext("30px");
    } else if (e == "Heading3") {
      setheadingtext("25px");
    } else if (e == "Heading4") {
      setheadingtext("20px");
    } else if (e == "Heading5") {
      setheadingtext("16px");
    } else if (e == "Heading6") {
      setheadingtext("12px");
    }
  };
  const getstrong = () => {
    setclassname1(!classname1);

    if (strong == "600") {
      setstrong("400");
    } else {
      setstrong("600");
    }
  };
  const getitallic = () => {
    setclassname2(!classname2);

    if (itallic == "italic") {
      setitallic("normal");
    } else {
      setitallic("italic");
    }
  };
  const handlelink = () => {
    setclassname4(!classname4);
  };
  const handleimage = () => {
    setclassname5(!classname5);
  };
  const handtextcolor = () => {
    setclassname6(!classname6);
  };
  const handlebgcolor = () => {
    setclassname7(!classname7);
  };
  return (
    <>
      <div className={styles.editfield}>
        <i
          className={classname1 ? styles.common1 : styles.common}
          onClick={getstrong}
        >
          <MdFormatBold size={20} />
        </i>
        <i
          className={classname2 ? styles.common1 : styles.common}
          onClick={getitallic}
        >
          <MdOutlineFormatItalic size={20} />
        </i>
        <select
          className={classname3 ? styles.common1 : styles.common}
          onChange={(e) => setheading(e.target.value)}
        >
          <option value="Heading1">Heading1</option>
          <option value="Heading2">Heading2</option>
          <option value="Heading3">Heading3</option>
          <option value="Heading4">Heading4</option>
          <option value="Heading5">Heading5</option>
          <option value="Heading6">Heading6</option>
        </select>
        <i
          className={classname4 ? styles.common1 : styles.common}
          onClick={handlelink}
        >
          <IoLinkOutline size={20} />
         {classname4 && <div className={styles.linkcont}>
           <URLField name="URL"/>
           <URLField name="Text"/>
           <input type="checkbox" />&nbsp;&nbsp;
           <label>Open in new Tab</label>
           <div className={styles.buttoncont}>
            <OutlineBtn name="Insert"/>
           </div>
          </div>
          }
        </i>
        <i
          className={classname5 ? styles.common1 : styles.common}
          onClick={handleimage}
        >
          <IoImageOutline size={20} />
          {classname5 && <div className={styles.linkcont}>
           <URLField name="URL"/>
           <URLField name="Alt Text"/>
           <URLField name="Title"/>

           <input type="checkbox" />&nbsp;&nbsp;
           <label>Open in new Tab</label>
           <div className={styles.buttoncont}>
            <OutlineBtn name="Insert"/>
           </div>
          </div>
          }
        </i>
        <i
          className={classname6 ? styles.common1 : styles.common}
          onClick={handtextcolor}
        >
          <MdOutlineFormatColorText size={20} />
          {classname6 && <div className={styles.linkcont}>
            <div className={styles.divs}>
            <Checkbox bg="red"/>
            <Checkbox bg="blue"/>
            <Checkbox bg="black"/>
            <Checkbox bg="yellow"/>
            <Checkbox bg="green"/>
            <Checkbox bg="brown"/>
            <Checkbox bg="gray"/>
            <Checkbox bg="pink"/>
            <Checkbox bg="cyan"/>
            <Checkbox bg="lightgray"/>
            <Checkbox bg="darkblue"/>
            <Checkbox bg="teal"/>
            <Checkbox bg="lightgreen"/>
            <Checkbox bg="darkgreen"/>
            </div>
           <div className={styles.buttoncont}>
            <OutlineBtn name="Remove"/>
           </div>
          </div>
          }
        </i>
        <i
          className={classname7 ? styles.common1 : styles.common}
          onClick={handlebgcolor}
        >
          <MdOutlineFormatColorFill size={20} />
          {classname7 && <div className={styles.linkcont}>
            <div className={styles.divs}>
            <Checkbox bg="red"/>
            <Checkbox bg="blue"/>
            <Checkbox bg="black"/>
            <Checkbox bg="yellow"/>
            <Checkbox bg="green"/>
            <Checkbox bg="brown"/>
            <Checkbox bg="gray"/>
            <Checkbox bg="pink"/>
            <Checkbox bg="cyan"/>
            <Checkbox bg="lightgray"/>
            <Checkbox bg="darkblue"/>
            <Checkbox bg="teal"/>
            <Checkbox bg="lightgreen"/>
            <Checkbox bg="darkgreen"/>
            </div>
           <div className={styles.buttoncont}>
            <OutlineBtn name="Remove"/>
           </div>
          </div>
          }
        </i>
      </div>
    </>
  );
};

export default EditField;
