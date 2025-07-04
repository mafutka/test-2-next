import { Note } from '../../lib/api';
import NoteItem from '../Noteitem/NoteItem';
import css from './NoteList.module.css'

type Props = {
    notes: Note[];
}

const NoteList = ({notes}: Props) => {

    console.log(notes);
    
    return (
        <div className={css.notes}>
        <ul>
            {notes.map((note) => (
                <NoteItem key={note.id} item={note}/>
            ))}

        </ul>
        </div>
    )
}

export default NoteList;