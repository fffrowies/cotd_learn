import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  myInput = React.createRef();

  goToStore = event => {
    // 1. stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store →</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          ref={this.myInput}
          defaultValue={getFunName()}
        />
        <button type="submit" value="Submit">
          Visist Store
        </button>
      </form>
    );
  }
}

export default StorePicker;
