function App () {
  const [expression, setExpression] = React.useState("");
  const [output, setOutput] = React.useState(0);
 
  //defining display function
  const display = (symbol) => {
    setExpression((prev) => prev + symbol);

    if (expression[expression.length - 1] == "=") {
      if (/[0-9]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(output + symbol);
      }
    }
  };

  //defining calculate function
  const calculate = () => {
    setOutput(eval(expression));
    setExpression((prev) => prev + "=");
  };

  //defining allClear & clear functions
  const allClear = () => {
    setExpression("");
    setOutput(0);
  };

  const clear =  () => {
    setExpression((prev) => 
    prev
    .split("")
    .slice(0, prev.length - 1)
    .join("")
    )
    setOutput(0);
  };

    return (
      <div className="container">
        <div className="grid">
          <div className="display" id="display">
            <input type="text" value={expression} placeholder="0" disable></input>
            <div className="result">{output}</div>
          </div>
          <div onClick={allClear} className="clcButton AC" id="AC-redish">AC</div>
          <div onClick={clear} className="clcButton C"  id="C-redish">C</div>
          <div onClick={() => display(" / ")} className="clcButton division">/</div>
          <div onClick={() => display(" * ")} className="clcButton times">x</div>
          <div onClick={() => display("7")} className="clcButton seven ">7</div>
          <div onClick={() => display("8")} className="clcButton eight">8</div>
          <div onClick={() => display("9")} className="clcButton nine">9</div>
          <div onClick={() => display(" - ")} className="clcButton minus">-</div>
          <div onClick={() => display("4")} className="clcButton four">4</div>
          <div onClick={() => display("5")} className="clcButton five">5</div>
          <div onClick={() => display("6")} className="clcButton six">6</div>
          <div onClick={() => display(" + ")} className="clcButton plus">+</div>
          <div onClick={() => display("1")} className="clcButton one">1</div>
          <div onClick={() => display("2")} className="clcButton two">2</div>
          <div onClick={() => display("3")} className="clcButton three">3</div>
          <div onClick={calculate} className="clcButton equal" id="equals">=</div>
          <div onClick={() => display("0")} className="clcButton zero">0</div>
          <div onClick={() => display(".")} className="clcButton dot">.</div>
        </div>
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));
