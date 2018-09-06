import React, { Component } from "react";

class App extends Component {
  state = {
    name: "",
    image: null,
    imageURL: null,
  };

  handleSubmit = event => {
    event.preventDefault();

    const data = new FormData();
    data.append("name", this.state.name);
    data.append("image", this.state.image);

    fetch("http://localhost:3000/cats", {
      method: "POST",
      body: data,
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({ imageURL: json.url });
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFileUpload = event => {
    console.log(event.nativeEvent, event.target.files, event.target.files[0]);
    this.setState({
      image: event.target.files[0],
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input type="file" onChange={this.handleFileUpload} />
          <input type="submit" value="Upload" />
        </form>

        {!!this.state.imageURL ? (
          <img src={this.state.imageURL} alt="img" />
        ) : null}
      </div>
    );
  }
}

export default App;
