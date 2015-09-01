import React, {Component} from 'react';
import _ from 'lodash';

export default class NoteListItem extends Component {

    constructor(props) {
        super(props);
        this.state = { note: this.props.note };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({note: nextProps.note});
    }

    handleChange(e) {
        var newState = _.assign({}, this.state.note);
        newState.content = e.target.value;
        console.log(newState);
        this.setState({note: newState});
    }

    submit(e) {
        e.preventDefault();
        this.props.addNew(this.state.note);
    }

    render() {
        return (
            <div>
                <h2>Adding New:</h2>
                <form>
                    <div className="form-group">
                        <label>
                            <textarea value={this.state.note.content} onChange={this.handleChange.bind(this)} cols="30" className="form-control" rows="10" ref="content"></textarea>
                        </label>
                    </div>
                    <div className="form-group">

                        <button onClick={this.submit.bind(this)} type="submit" className="btn btn-default">{this.state.note.id ? 'Edytuj' : 'Zapisz'}</button>
                    </div>
                </form>
            </div>
        );
    }
};