class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            x: 0,
            y: 0,
        }
    }
    render() {
        return (
            <div>
                <Square x={5} y={0} />
                <Square x={5} y={1} />
                <Square x={5} y={2} />
                <Square x={5} y={2} />
                <Square x={5} y={2} />
                <Square x={5} y={2} />
                {/* <Square x={5} y={2} />
                <Square x={5} y={2} />
                <Square x={5} y={2} />
                <Square x={5} y={2} />
                <Square x={5} y={2} />
                <Square x={5} y={2} />
                <Square x={5} y={2} />
                <Square x={5} y={2} /> */}

            </div>

        )
    }

}

class Square extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        var squares = [];
        for (let i = 0; i < this.props.x; i++) {
            // need to style them here
            squares.push(< div key={i} className="col" data-x={this.props.x} data-y={this.props.y}></div>)
        }
        return (

            <div
                className="row"
            >{squares}</div>

        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
