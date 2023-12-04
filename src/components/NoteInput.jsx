import React from "react";
export default class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const title = event.target.value;
    const currentLength = title.length;
    const maxLength = 50;

    if (currentLength <= maxLength) {
      this.setState(() => {
        return {
          title: title,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }
  calculateRemaining() {
    const maxLength = 50;
    const currentLength = this.state.title.length;
    const remainingChar = maxLength - currentLength;
    return remainingChar;
  }
  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa karakter : {this.calculateRemaining()}</p>
          <input className="note-input__title" type="text" placeholder="Ini adalah judul..." required value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <textarea className="note-input__body" placeholder="Tuliskan catatanmu disini..." name="" id="" cols="30" rows="10" required value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}
