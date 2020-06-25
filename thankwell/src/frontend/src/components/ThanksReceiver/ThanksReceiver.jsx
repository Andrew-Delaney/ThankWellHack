import React, {Component} from 'react';

export default class ThanksReceiver extends Component {

    constructor(props) {
        super(props);
        this.state = {thanks: { id: null, message: null, recipient: null, imageId: null }, image: null };
    }

    componentDidMount() {
        fetch(`/api/thanks/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => { this.setState({...this.state, thanks: data }); return data;})
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
                <span>To {this.state.thanks.recipient}</span><br/>
                <span>{this.state.thanks.message}</span><br/>
                {this.state.image && <img src={`data:image/${this.state.image.type};base64,${this.state.image.decodedContent}`} alt="Thank You!"/>}
            </div>
        )
    };
};
