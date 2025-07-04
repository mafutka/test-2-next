
import axios from "axios";

export type Note = {
    id: string;
  title: string;
  content: string;
  categoryId: string;
  category: {
    name: string;
  };
  createdAt: string;
  updatedAt: string;
}

export type NotelistResponse = {
    notes: Note[];
    total: number;
}

axios.defaults.baseURL = "https://next-docs-api.onrender.com";

const delay = (ms: number) => new Promise ((resolve) => setTimeout(resolve, ms));

export const getNotes = async () => {
    await delay(2000);
    const res = await axios.get<NotelistResponse>('/notes')
    
    return res.data;
}

export const getSingleNote = async (id: string) => {
    const res = await axios.get<Note>(`/notes/${id}`)
    
    return res.data;
}