import React, { useState } from "react";
import data from "./data";

const Accordion = () => {

  const [selected, setSelected] = useState(null);
  const [enableButton, setEnableButton] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  const handleSingle = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    let mutiple = [...multiSelect];
    const findIndex = mutiple.indexOf(id);
    if (findIndex === -1) mutiple.push(id);
    else mutiple.splice(findIndex, 1);

    setMultiSelect(mutiple);
    console.log(mutiple);
  };

  return (
    <div className="flex flex-col justify-center items-center text-center bg-white h-screen text-white">
      <div className="flex flex-col">
        <button
          className="text-black border p-2 bg-green-300"
          onClick={() => setEnableButton(!enableButton)}
        >
          Enable MultiSelection
        </button>
      </div>
      <div>
        {data && data.length > 0 ? (
          data.map((dt) => (
            <div className="bg-gray-700 py-5 m-5 flex justify-between">
              <div
                className="flex justify-between"
                onClick={
                  enableButton
                    ? () => handleMultiSelection(dt.id)
                    : () => handleSingle(dt.id)
                }
              >
                <h3 className="cursor-pointer m-5">{dt.question}</h3>
              </div>
              <div>
                <p className="cursor-pointer m-5">+</p>
              </div>
              {enableButton
                ? multiSelect.indexOf(dt.id) !== -1 && (
                    <div className="text-green-300 m-5">{dt.answer}</div>
                  )
                : selected === dt.id && (
                    <div className="text-green-300 m-5">{dt.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
    );
  }


export default Accordion