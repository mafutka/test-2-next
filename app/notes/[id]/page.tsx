import { getSingleNote } from '../../../lib/api'

type Props = {
    params: Promise<{id: string}>;
};
 const NoteDetails = async ({params}: Props) => {
    const { id } = await params;
    const note = await getSingleNote(id);
    const formatedDate = note.updatedAt
    ? `updated at: ${note.updatedAt}`
    : `created at: ${note.createdAt}`

    console.log(note);
    

    return (
        <div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <button>Edit note</button>
        <p>{formatedDate}</p>
        </div>
    )
}

export default NoteDetails;
