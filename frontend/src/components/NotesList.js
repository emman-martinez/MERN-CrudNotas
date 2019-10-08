import React, { Component } from 'react';
import axios from 'axios';

class NotesList extends Component {

    state = {
        notes:[]
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/notes');
        console.log(res.data);
        this.setState({
            notes: res.data,
        })
    }

    render() {

        const notes = this.state.notes;

        return (
            <div className="row">
                {
                    notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header">
                                    <h5>{note.title}</h5>
                                </div>
                                <div className="card-body">
                                    <p>{note.content}</p>
                                    <p>{note.author}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default NotesList;