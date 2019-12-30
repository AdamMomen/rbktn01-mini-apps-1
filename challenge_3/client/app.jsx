
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Form1: false,
      Form2: false,
      Form3: false,
    }
    this.checkout = this.checkout.bind(this);
    this.
  }
  checkout() {
    console.log("clicked")
    this.setState(state => ({
      Form1: true
    }));
  }
  goToForm2() {

  }
  render() {

    //console.log(this)
    return (
      <div>
        <h1>ADAM</h1>

        <button onClick={this.checkout}>Checkout</button>
        <Form1 Form1={this.state.Form1} />
        {/* <Form2 />
        <Form3 /> */}

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
    // console.log(this.props.isToggled)
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
          <button>NEXT</button>
        </div>
      )
      : '';
  }
}
class Form2 extends React.Component {
  render() {
    return (
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

        <br />
      </div>
    );
  }
}
//F3 collects credit card #, expiry date, CVV, and billing zip code.
class Form3 extends React.Component {
  render() {
    return (
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
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;