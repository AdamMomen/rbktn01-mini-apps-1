
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Form1: false,
      Form2: false,
      Form3: false,
    }
    this.checkout = this.checkout.bind(this);
    this.goToForm2 = this.goToForm2.bind(this);
    this.goToForm3 = this.goToForm3.bind(this);
  }
  checkout() {
    this.setState(state => ({
      Form1: true
    }));
  }
  goToForm2() {
    this.setState(state => ({
      Form1: false,
      Form2: true,
    }));
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
        <Form1 Form1={this.state.Form1} goToForm2={this.goToForm2} />
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

  }
  render() {
    return this.props.Form1 === true ?
      (
        <div>
          <label name="">FORM1</label>
          <form >
            <label name="">Name</label>
            <input type="text" name="" id="name" placeholder="Johny" />
            <br />

            <label name="">Email</label>

            <input type="text" name="" id="email" placeholder="Adam@abc.com" />
            <br />

            <label name="">Password</label>
            <input type="text" name="" id="password" placeholder="password" />
            <br />
            <input type="submit"></input>
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
    console.log('form2', this.props)
    return this.props.Form2 === true ?
      (
        <div>
          <label name="">FORM2</label>

          <form
          //  action="post"
          >
            <label name="">First Address</label>

            <input type="text" name="" id="Addres1" placeholder="US" />
            <br />

            <label name="">Second Address</label>

            <input type="text" name="" id="Addres2" placeholder="NYC" />
            <br />

            <label name="">CITY</label>
            <input type="text" name="" id="city" placeholder="city" />
            <br />

            <label name="">State</label>

            <input type="text" name="" id="state" placeholder="state" />
            <br />

            <label name="">zipCode</label>

            <input type="text" name="" id="zipCode" placeholder="zipCode" />

            <br />

            <br />
            <input type="submit"></input>
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
          <input type="text" name="" id="creditCard#" placeholder="123456789543" />
          <br />

          <label name="">Expiry Data</label>

          <input type="text" name="" id="expiryData" placeholder="e.g...13/12/2020" />
          <br />

          <label name="">CVV</label>
          <input type="text" name="" id="cvv" placeholder="333" />
          <br />
          <label name="">billing Zip Code</label>
          <input type="text" name="" id="billing" placeholder="44ss" />
          <input type="submit"></input>
        </form>
        <br />

        <br />
      </div>
    ) : '';
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;