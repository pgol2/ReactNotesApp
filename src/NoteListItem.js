import React, {Component} from 'react';
import moment from 'moment';


export default class NoteListItem extends Component {


    constructor(props) {
        super(props);
        var match = this.props.noteData.content.match(/(https?:\/\/.*\.(?:png|jpg|gif))/i);
        var url = '';
        if(match) {
            url = match[0];
        }
        this.state = {imgUrl: url, matched: !!match, created: moment(this.props.noteData.created).format('DD.MM.YYYY')};
    }


    render() {
        return (
            <div className="note-item">
                <strong>{this.props.noteData.author} </strong>
                <small>
                    {this.state.created}
                </small>
                <p>
                    <button onClick={this.props.setToEdit} type="button" className="btn btn-primary btn-xs">edit</button>
                    <button onClick={this.props.deleteNote} type="button" className="btn btn-default btn-xs">delete</button>
                </p>
                <p>
                    {this.props.noteData.content}
                </p>
                {this.state.matched ? <img src={this.state.imgUrl} width="300" height="200" /> : null}
            </div>
        );
    }
};