class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Form1: false,
      Form2: false,
      Form3: false,
      name: '',
      email: '',
      password: '',
    }
    this.checkout = this.checkout.bind(this);
    this.goToForm2 = this.goToForm2.bind(this);
    this.goToForm3 = this.goToForm3.bind(this);
  }
  checkout() {
    this.setState(state => ({
      Form1: true,
    }));
  }
  goToForm2(e) {
    this.setState({
      Form1: false,
      Form2: true,
    });
  }
  goToForm3() {
    this.setState(state => ({
      Form1: false,
      Form2: false,
      Form3: true,
    }));
  }

  render() {
    return (
      <div>
        <h1>ADAM</h1>

        <button onClick={this.checkout}>Checkout</button>
        <Form1 Form1={this.state.Form1} goToForm2={this.goToForm2} name={this.state.name} />
        <Form2 Form2={this.state.Form2} goToForm3={this.goToForm3} />
        <Form3 Form3={this.state.Form3} />

      </div>
    );
  }
}


class Form1 extends React.Component {
  // need to put the funcion in the App class
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      pass: '',
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
  }
  onChangeName(event) {
    this.setState({
      name: event.target.value,
    })

  }
  onChangeEmail(event) {
    this.setState({
      email: event.target.value,
    })
  }
  onChangePass(event) {
    this.setState({
      pass: event.target.value,
    })
  }
  render() {
    return this.props.Form1 === true ?
      (
        <div>
          <label name="">FORM1</label>
          <form >
            <label name="">Name</label>
            <input type="text" value={this.state.name} id="name" placeholder="Johny" onChange={this.onChangeName} />
            <br />

            <label name="">Email</label>

            <input type="text" name="email" value={this.state.email} id="email" placeholder="Adam@abc.com" onChange={this.onChangeEmail} />
            <br />

            <label name="">Password</label>
            <input type="text" name="pass" value={this.state.pass} id="password" placeholder="password" onChange={this.onChangePass} />
            <br />
          </form>
          <br />
          <br />
          <button onClick={this.props.goToForm2}>NEXT</button>
        </div>
      )
      : '';
  }
}
class Form2 extends React.Component {
  constructor(props) {




    super(props);
    this.state = {
      add1: '',
      add2: '',
      city: '',
      state: '',
      zipCode: '',
    }

    this.onChangeAdd1 = this.onChangeAdd1.bind(this)
    this.onChangeAdd2 = this.onChangeAdd2.bind(this)
    this.onChangeCity = this.onChangeCity.bind(this)
    this.onChangeState = this.onChangeState.bind(this)
    this.onChangeZip = this.onChangeZip.bind(this)
  }
  onChangeAdd1(event) {
    this.setState({
      add1: event.target.value,
    })
  }
  onChangeAdd2(event) {
    this.setState({
      add2: event.target.value,
    })
  }
  onChangeCity(event) {
    this.setState({
      city: event.target.value,
    })
  }
  onChangeState(event) {
    this.setState({
      state: event.target.value,
    })
  }
  onChangeZip(event) {
    this.setState({
      zipCode: event.target.value,
    });
    console.log(event.target.value)
  }
  render() {
    //  console.log(this.props.name)
    return this.props.Form2 === true ?
      (
        <div>
          <label name="">FORM2</label>
          <form
          //  action="post"
          >
            <label name="">First Address</label>
            <input type="text" id="Addres1" value={this.state.add1} placeholder="US" onChange={this.onChangeAdd1} />
            <br />

            <label name="">Second Address</label>
            <input type="text" name="" id="Addres2" placeholder="NYC" value={this.state.add12} onChange={this.onChangeAdd2} />
            <br />

            <label name="">CITY</label>
            <input type="text" name="" id="city" placeholder="city" value={this.state.city} onChange={this.onChangeCity} />
            <br />

            <label name="">State</label>
            <input type="text" name="" id="state" placeholder="state" value={this.state.state} onChange={this.onChangeState} />
            <br />

            <label name="">zipCode</label>

            <input type="text" name="" id="zipCode" placeholder="zipCode" value={this.state.zipCode} onChange={this.onChangeZip} />
            <br />
            <br />
            {/* <input type="submit"></input> */}
          </form>
          <br />
          <button onClick={this.props.goToForm3}>NEXT</button>
          <br />
        </div>
      ) : '';
  }
}
//F3 collects credit card #, expiry date, CVV, and billing zip code.
class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return this.props.Form3 === true ? (
      <div>
        <label name="">FORM3</label>

        <form >
          <label name="">credit Card Number</label>
          <input type="text" name="creditCard#" id="creditCard#" placeholder="123456789543" />
          <br />

          <label name="">Expiry Data</label>
          <input type="text" name="expiryData" id="expiryData" placeholder="e.g...13/12/2020" />
          <br />

          <label name="">CVV</label>
          <input type="text" name="cvv" id="cvv" placeholder="333" />
          <br />

          <label name="">billing Zip Code</label>
          <input type="number" name="Billing" id="billing" placeholder="44ss" />
          {/* <input type="submit"></input> */}
        </form>

        <br />
        <br />
        <button>Proceed to checkout</button>
      </div>
    ) : '';
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;