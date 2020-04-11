import React, { Component } from "react";
import "./Gallery.scss";
import Holly1 from "./Images/100.jpg";
import Holly2 from "./Images/102.jpg";
import Holly3 from "./Images/103.jpeg";
import Holly4 from "./Images/104.jpeg";
import Holly5 from "./Images/105.jpeg";
import Holly6 from "./Images/101.jpg";

class GalleryDisplay extends Component {
  imageSwitch(title) {
    switch (title) {
      case "Holly1 ":
        return <img src={Holly1} alt="" />;
      case "Holly2":
        return <img src={Holly2} alt="" />;
      case "Holly3":
        return <img src={Holly3} alt="" />;
      case "Holly4":
        return <img src={Holly4} alt="" />;
      case "Holly5":
        return <img src={Holly5} alt="" />;
      case "Holly6":
        return <img src={Holly6} alt="" />;
      default:
        return <img src="https://placeimg.com/1200/400/random" alt="" />;
    }
  }

  render() {
    const { title } = this.props;
    return (
      <div className="gallery-display">
        <h2>{title}</h2>
        {this.imageSwitch(title)}
      </div>
    );
  }
}

class GalleryThumbnail extends Component {
  imageSwitch(title, select) {
    switch (title) {
      case "Holly1":
        return <img src={Holly1} onClick={() => select(title)} alt="" />;
      case "Holly2":
        return <img src={Holly2} onClick={() => select(title)} alt="" />;
      case "Holly3":
        return <img src={Holly3} onClick={() => select(title)} alt="" />;
      case "Holly4":
        return <img src={Holly4} onClick={() => select(title)} alt="" />;
      case "Holly5":
        return <img src={Holly5} onClick={() => select(title)} alt="" />;
      case "Holly6":
        return <img src={Holly6} onClick={() => select(title)} alt="" />;
      default:
        return <img src="" alt="" />;
    }
  }

  render() {
    const { title, select } = this.props;
    return this.imageSwitch(title, select);
  }
}

const data = ["Holly1", "Holly2", "Holly3", "Holly4", "Holly5", "Holly6"];

// Parent Component
class Gallery extends Component {
  state = {
    galleySelected: "Hey",
  };

  optionSelected = (name) => this.setState(() => ({ galleySelected: name }));

  render() {
    const { galleySelected } = this.state;
    return (
      <>
        <GalleryDisplay title={galleySelected} />
        <div className="gallery-options">
          {data.map((g) => (
            <GalleryThumbnail title={g} select={this.optionSelected} />
          ))}
        </div>
      </>
    );
  }
}

export default Gallery;
