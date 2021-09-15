import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { toDecimal, toBinary } from "./functions";

function App() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const wrapperRef = useRef();
  const binaryRef = useRef();
  const decimalRef = useRef();
  const binaryInputRef = useRef();
  const decimalInputRef = useRef();

  useEffect(() => {
    binaryInputRef.current.focus();
  }, []);

  function handleBinToDec(e) {
    const num = e.target.value;
    const digit = parseInt(num.toString().slice(-1));

    if (digit === 1 || digit === 0) {
      binaryInputRef.current.classList.remove("error");
      decimalInputRef.current.classList.remove("error");
      setBinary(num);
      setDecimal(toDecimal(num));
    } else if (e.target.value === "") {
      setBinary("");
      setDecimal("");
    } else {
      binaryInputRef.current.classList.add("error");
    }
  }

  function handleDecToBin(e) {
    const num = e.target.value;

    if (num === "") {
      setBinary("");
      setDecimal("");
    } else if (!isNaN(parseInt(num.toString().slice(-1)))) {
      setDecimal(num);
      setBinary(toBinary(num));
      binaryInputRef.current.classList.remove("error");
      decimalInputRef.current.classList.remove("error");
    } else {
      decimalInputRef.current.classList.add("error");
    }
  }

  function swap() {
    wrapperRef.current.classList.toggle("rotate");
    binaryRef.current.classList.toggle("rotate");
    decimalRef.current.classList.toggle("rotate");
  }

  return (
    <div className="App">
      <div>
        <div className="wrapper" ref={wrapperRef}>
          <label ref={binaryRef} htmlFor="binary">
            Binary
            <input
              ref={binaryInputRef}
              id="binary"
              type="text"
              value={binary}
              onChange={handleBinToDec}
            />
          </label>
          {/* <div>to</div> */}
          <label ref={decimalRef} htmlFor="decimal">
            Decimal
            <input
              ref={decimalInputRef}
              id="decimal"
              type="text"
              className="decimal"
              value={decimal}
              onChange={handleDecToBin}
            />
          </label>
        </div>
        <div className="button-grp">
          <button className="swap" onClick={swap}>
            Swap
          </button>
          <button
            className="clear"
            onClick={() => {
              setDecimal("");
              setBinary("");
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
