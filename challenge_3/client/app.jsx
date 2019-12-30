// var LinkedStateMixin = require('react-addons-linked-state-mixin');
// var createReactClass = require('create-react-class');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Form1: false,
      Form2: false,
      Form3: false,
      //f1
      name: '',
      email: '',
      pass: '',
      //f2
      add1: '',
      add2: '',
      city: '',
      state: '',
      zipCode: '',
      //f3
      creditCard: '',
      expiryDate: '',
      cvv: '',
      billing: '',
    }
    this.checkout = this.checkout.bind(this);
    this.goToForm2 = this.goToForm2.bind(this);
    this.goToForm3 = this.goToForm3.bind(this);
    //f1
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    //f2
    this.onChangeAdd1 = this.onChangeAdd1.bind(this)
    this.onChangeAdd2 = this.onChangeAdd2.bind(this)
    this.onChangeCity = this.onChangeCity.bind(this)
    this.onChangeState = this.onChangeState.bind(this)
    this.onChangeZip = this.onChangeZip.bind(this)
    //f3
    this.onChangeCredit = this.onChangeCredit.bind(this)
    this.onChangeExpiry = this.onChangeExpiry.bind(this)
    this.onChangeCvv = this.onChangeCvv.bind(this)
    this.onChangeBill = this.onChangeBill.bind(this)
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
  //f1
  onChangeName(event) {
    this.setState({
      name: event.target.value,
    })
    console.log(event.target.value)
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
  //f2
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
  }
  //f3
  onChangeCredit(event) {
    this.setState({
      creditCard: event.target.value,
    })
  }
  onChangeExpiry(event) {
    this.setState({
      expiryDate: event.target.value,
    })
  }
  onChangeCvv(event) {
    this.setState({
      cvv: event.target.value,
    })
  }
  onChangeBill(event) {
    this.setState({
      billing: event.target.value,
    })
    console.log(this.state.billing)
  }
  render() {
    return (
      <div>
        <h1>ADAM</h1>

        <button onClick={this.checkout}>Checkout</button>
        <Form1 Form1={this.state.Form1} goToForm2={this.goToForm2} name={this.state.name} email={this.state.email} pass={this.state.pass} onChangeName={this.onChangeName}
          onChange={this.onChangeEmail} onChange={this.onChangePass} />

        <Form2 Form2={this.state.Form2} goToForm3={this.goToForm3} add1={this.state.add1} add2={this.state.add2} city={this.state.city} state={this.state.state}
          zipCode={this.state.zipCode}
          onChangeAdd1={this.onChangeAdd1} onChangeAdd2={this.onChangeAdd2} onChangeCity={this.onChangeCity} onChangeState={this.onChangeState} onChangeZip={this.onChangeZip} />

        <Form3 Form3={this.state.Form3} creditCard={this.state.creditCard} onChange={this.onChangeCredit} expiryDate={this.state.expiryDate} onChange={this.onChangeExpiry}
          cvv={this.state.cvv} onChange={this.onChangeCvv} billing={this.state.billing} onChange={this.onChangeBill}
        />

      </div>
    );
  }
}

class Form1 extends React.Component {
  // need to put the funcion in the App class
  constructor(props) {
    super(props)

  }

  render() {
    return this.props.Form1 === true ?
      (
        <div>
          <label name="">FORM1</label>
          <form >
            <label name="">Name</label>
            <input type="text" value={this.props.name} id="name" placeholder="Johny" onChange={this.props.onChangeName} />
            <br />

            <label name="">Email</label>

            <input type="text" name="email" value={this.props.email} id="email" placeholder="Adam@abc.com" onChange={this.props.onChangeEmail} />
            <br />

            <label name="">Password</label>
            <input type="text" name="pass" value={this.props.pass} id="password" placeholder="password" onChange={this.props.onChangePass} />
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
            <input type="text" id="Addres1" value={this.props.add1} placeholder="US" onChange={this.onChangeAdd1} />
            <br />

            <label name="">Second Address</label>
            <input type="text" name="" id="Addres2" placeholder="NYC" value={this.props.add12} onChange={this.props.onChangeAdd2} />
            <br />

            <label name="">CITY</label>
            <input type="text" name="" id="city" placeholder="city" value={this.props.city} onChange={this.props.onChangeCity} />
            <br />

            <label name="">State</label>
            <input type="text" name="" id="state" placeholder="state" value={this.props.state} onChange={this.props.onChangeState} />
            <br />

            <label name="">zipCode</label>

            <input type="text" name="" id="zipCode" placeholder="zipCode" value={this.props.zipCode} onChange={this.props.onChangeZip} />
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

  }

  render() {
    return this.props.Form3 === true ? (
      <div>
        <label name="">FORM3</label>

        <form >
          <label name="">credit Card Number</label>
          <input type="text" name="creditCard#" id="creditCard#" placeholder="123456789543" value={this.props.creditCard} onChange={this.props.onChangeCredit} />
          <br />

          <label name="">Expiry Data</label>
          <input type="text" name="expiryDate" id="expiryData" placeholder="e.g...13/12/2020" value={this.props.expiryDate} onChange={this.props.onChangeExpiry} />
          <br />

          <label name="">CVV</label>
          <input type="text" name="cvv" id="cvv" placeholder="333" value={this.props.cvv} onChange={this.props.onChangeCvv} />
          <br />

          <label name="">billing Zip Code</label>
          <input type="number" name="Billing" id="billing" placeholder="44ss" value={this.props.billing} onChange={this.props.onChangeBill} />

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