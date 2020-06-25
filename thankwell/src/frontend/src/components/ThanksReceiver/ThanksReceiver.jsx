import React, {Component} from 'react';

export default class ThanksReceiver extends Component {

    constructor(props) {
        super(props);
        this.state = {id: null, message: null, recipient: null};
    }

    componentDidMount() {
        fetch(`/api/thanks/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => this.setState(data));
    }

    render() {
        return (
            <div className="ThanksComposer">
                <span>test - {JSON.stringify(this.state)}</span>
            </div>
        )
    };
};
