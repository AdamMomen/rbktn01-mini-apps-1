class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Square />
            </div>

        )
    }

}

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            x: 0,
            y: 0,
        }
    }
    createBoard() {
        const row = 5,
            col = 5;
        return {

            for(let i = 0 ; i<row ; i++) {

        }
    }
}
render() {
    return (
        <div></div>
    )
}
}
ReactDOM.render(<App />, document.getElementById('app'));
