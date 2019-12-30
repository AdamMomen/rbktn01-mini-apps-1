
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
        <form action="submit">
          <input type="text" name="" id="name" placeholder="Johny" />
          <input type="text" name="" id="email" placeholder="Adam@abc.com" />
          <input type="text" name="" id="password" placeholder="password" />
          <br />
          <input type="submit"></input>
        </form>

      </div>
    );
  }
}
class Form2 extends App {
  render() {
    return (
      <div>
        <form action="post">
          <label name=""></label>
          <input type="text" name="" id="Addres1" placeholder="US" />
          <input type="text" name="" id="Addres2" placeholder="NYC" />
          <input type="text" name="" id="city" placeholder="city" />
          <input type="text" name="" id="state" placeholder="state" />
          <input type="text" name="" id="zipCode" placeholder="zipCode" />

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