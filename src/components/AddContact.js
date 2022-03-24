import React from "react";

class AddContact extends React.Component {
  
  state = {
    name: "",
    number: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.number === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", number: "", email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2 style={{fontSize: '25px', fontWeight: '600', marginTop: '1rem'}}>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label style={{fontSize: '18px', marginBottom: '1rem' }}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label style={{fontSize: '18px', marginBottom: '1rem' }}>Number</label>
            <input
              type="number"
              name="tel"
              placeholder="Number"
              value={this.state.number}
              onChange={(e) => this.setState({ number: e.target.value })}
            />
          </div>
          <div className="field">
            <label style={{fontSize: '18px', marginBottom: '1rem' }}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue" 
          style={{ padding: '10px', backgroundColor: '#2962ff', fontSize: '15px'}}>Add Contact</button>
        </form>
      </div>
    );
  }
}

export default AddContact;