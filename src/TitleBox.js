import React, {Component} from 'react';

export default class TitleBox extends Component {
    static defaultProps = {
        user: 'Guest'
    };
    static propTypes = {
        user: React.PropTypes.string
    };
    render() {
        return (
            <div>
                <h1>A1 Notes</h1>
                <h5>user: {this.props.user}</h5>
            </div>
        );
    }
};