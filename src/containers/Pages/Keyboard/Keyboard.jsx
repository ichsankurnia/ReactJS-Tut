/**
 * NOTE: This demo aims to explain the basic behavior
 * You'll likely need to adapt it for your needs
 * Here's another example, in case you need it:
 * https://codesandbox.io/s/github/simple-keyboard/multiple-inputs-wrapper-router/tree/master/?file=/src/Home.js
 */
import React, { useRef, useState, Component } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./Keyboard.css";
import { createRef } from "react";

/*
function TestKeyboard() {
  const [inputs, setInputs] = useState({});
  const [inputName, setInputName] = useState("default");
  const [layoutName, setLayoutName] = useState("default");
  const keyboard = useRef();

  const onChangeAll = inputs => {
    setInputs({ ...inputs });
    console.log("Inputs changed", inputs);
  };


  const onKeyPress = button => {
    console.log("Button pressed", button);

    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const handleShift = () => {
    const newLayoutName = layoutName === "default" ? "shift" : "default";
    setLayoutName(newLayoutName);
  };

  const onChangeInput = e => {
    const inputVal = e.target.value;

    setInputs({
      ...inputs,
      [inputName]: inputVal
    });

    keyboard.current.setInput(inputVal);
  };

  const getInputValue = inputName => {
    return inputs[inputName] || "";
  };

  return (
    <div className="App">
      <input
        id="firstName"
        value={getInputValue("firstName")}
        onFocus={() => setInputName("firstName")}
        onChange={onChangeInput}
      />
      <input
        id="lastName"
        value={getInputValue("lastName")}
        onFocus={() => setInputName("lastName")}
        onChange={onChangeInput}
      />
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        inputName={inputName}
        onChangeAll={onChangeAll}
        layoutName={layoutName}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}
*/


class TestKeyboard extends Component {
    constructor(props){
        super(props)
        
        this.state = {
          layoutName: "default",
          inputName: "default",
          inputList : {},
          inputs: {}
        };
    }

    // Tell simple-keyboard which input is active
    // setActiveInput = (e) => {
    //     this.setState({
    //         inputName: e.target.name
    //     });
    // }
    
    // // When the inputs are changed
    // // (retrieves all inputs as an object instead of just the current input's string)
    // onChangeAll = (inputs) => {
    //     this.setState({
    //         inputs: inputs
    //     }, () => {
    //         console.log("Inputs changed", inputs);
    //     });
    // }

  onChangeAll = (inputs) => {
    var newInputList = {...this.state.inputList}
    newInputList = inputs

    this.setState({ inputList: newInputList });
    console.log("Input changed", inputs);
    console.log(this.state)
  };

  onKeyPress = button => {
    console.log("Button pressed", button);

    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  handleShift = () => {
    const layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default"
    });
  };

  onChangeInput = (e) => {
    const inputVal = e.target.value;

    var newInputList = {...this.state.inputList}
    newInputList[e.target.name] = inputVal

    this.setState({
        inputList: newInputList
    })

    this.keyboard.setInput(inputVal);
  };

    getInputValue = (inputName) => {
        console.log(this.state.inputList[inputName])
        return this.state.inputList[inputName] || "";
    };

  render() {
    return (
      <div>
        <input
            name="firstname"
            // onFocus={this.setActiveInput} defaultValue={this.state.inputs['firstname'] || ""}
          value={this.getInputValue('firstname')} name="firstname"
          onChange={this.onChangeInput}
          onFocus={() => this.setState({inputName: 'firstname'})}
          placeholder={"Tap on the virtual keyboard to start"}
        />
        <input
            // name="lastname"
            // onFocus={this.setActiveInput} defaultValue={this.state.inputs['lastname'] || ""}
          value={this.getInputValue('lastname')} name="lastname"
          onChange={this.onChangeInput}
          onFocus={() => this.setState({inputName: 'lastname'})}
          placeholder={"Tap on the virtual keyboard to start"}
        />
        <Keyboard
          keyboardRef={(r) => (this.keyboard = r)}
          onChangeAll={this.onChangeAll}
            inputName={this.state.inputName}
          layoutName={this.state.layoutName}
          onKeyPress={this.onKeyPress}
        />
      </div>
    );
  }
}


export default TestKeyboard
