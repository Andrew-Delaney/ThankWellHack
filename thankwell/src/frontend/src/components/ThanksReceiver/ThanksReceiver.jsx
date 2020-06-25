import React, {Component} from 'react';
import "./ThanksReceiver.scss";

export default class ThanksReceiver extends Component {

    constructor(props) {
        super(props);
        this.state = {thanks: {id: null, message: null, recipient: null, imageId: null}, image: null};
    }

    componentDidMount() {
        fetch(`/api/thanks/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({...this.state, thanks: data});
                return data;
            })
            .then(data => {
                if (data.imageId !== undefined) {
                    fetch(`/api/image/${data.imageId}`)
                        .then(response => response.json())
                        .then(data => this.setState({...this.state, image: data}))
                }
            });
    }

    render() {
        return (
            <div className="ThanksComposer">
                <h1 className="recipient-name pb-5">Dear {this.state.thanks.recipient}...</h1>
                <div className="message-content d-flex flex-column justify-content-between mr-2">
                    <div className="d-flex justify-content-center align-items-center">
                        <span>{this.state.thanks.message}</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                    {this.state.image && this.state.image.decodedContent && <img className="image"
                                                                                 src={`data:image/${this.state.image.type};base64,${this.state.image.decodedContent}`}
                                                                                 alt="Thank You!"/>}
                    </div>
                </div>
                <h1 className="recipient-name pb-4 pt-2">Thank you.</h1>
            </div>
        );
    };
};
