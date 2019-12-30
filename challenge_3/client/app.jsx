
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ADAM</h1>
        <Form1 />
        <Form2 />
        <Form3 />

      </div>
    );
  }
}
class Form1 extends App {
  render() {
    return (
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
      </div>
    );
  }
}
class Form2 extends App {
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
      </div>
    );
  }
}

class Form3 extends App {
  render() {
    return (
      <div>
        <h1>
          This is form three !!!
        </h1>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;