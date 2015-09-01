import React, { Component } from 'react';
import TitleBox from './TitleBox';
import NotesList from './NotesList';
import NewNote from './NewNote';


const API_URL = 'http://0.0.0.0:3000/api';

export default class NotesManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            author: 'Jan',
            currentNote: {
                author: '',
                content: ''
            }
        };
    }

    loadNotes() {
        return fetch(API_URL + '/notes').then(r => r.json())
            .then(res => this.setState({notes: res}))
    }

    postNote(note) {
        note.created = new Date();
        note.author = this.state.author;
        return fetch(API_URL + '/notes', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        }).then(x => this.loadNotes());
    }

    putNote(note) {
        return fetch(API_URL + '/notes/' + note.id, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        }).then(x => this.loadNotes());
    }

    deleteNote(noteId) {
        console.log('deleting: ' + noteId);
        return fetch(API_URL + '/notes/' + noteId, {
            method: 'delete'
        }).then(x => this.loadNotes());
    }

    updateNote(updatedNote) {
        if(!updatedNote.id) {
            throw Error('provided element has no id');
        }
        return fetch(API_URL + '/notes/' + updatedNote.id)
    }


    setToEdit(note) {
        this.setState({currentNote: note});
    }

    submitNote(note) {
        debugger;
        if(note.hasOwnProperty('id')) {
            return this.putNote(note);
        } else {
            return this.postNote(note);
        }
    }


    componentDidMount() {
        this.loadNotes();
    }

    render() {
        return (
            <div>
                <TitleBox user={this.state.author}/>
                <NotesList deleteNote={this.deleteNote.bind(this)} setToEdit={this.setToEdit.bind(this)} notes={this.state.notes}/>
                <NewNote note={this.state.currentNote}
                         author={this.state.author}
                         addNew={this.submitNote.bind(this)} />
            </div>
        );
    }

}


