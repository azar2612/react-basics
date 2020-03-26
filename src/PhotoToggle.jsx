import React, { Component } from "react";

class PhotoToggle extends Component {
  state = {
    showPhoto: false
  };
  render() {
    // console.log(this.state.showPhoto);

    const { showPhoto } = this.state;
    return (
      <>
        <p>Photo Toggle</p>
        <button
          type="button"
          onClick={() => this.setState({ showPhoto: !showPhoto })}
        >
          {showPhoto ? "Hide Photo" : "Show Photo"}
        </button>

        {showPhoto ? (
          <img src="https://placeimg.com/800/400/nature" alt="" />
        ) : (
          <p>Photo Hidden</p>
        )}
      </>
    );
  }
}
export default PhotoToggle;
