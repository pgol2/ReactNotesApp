import React, {Component} from 'react';
import NoteListItem from './NoteListItem';

export default class NotesList extends Component {
    render() {

        var items;
        if(this.props.notes && this.props.notes.length) {
            items = this.props.notes.map(note => {


                return (
                    <NoteListItem key={note.id} deleteNote={this.props.deleteNote.bind(this, note.id)} setToEdit={this.props.setToEdit.bind(this, note)} noteData={note} />
                );
            });
        } else {
            items = 'brak notatek';
        }


        return (
            <div>
                {items}
            </div>
        );
    }
};