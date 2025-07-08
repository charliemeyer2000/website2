import Page from "@/components/page/Page";
import axios from "axios";
import { useState, useEffect } from "react";
export default function useGuestbook() {
  // TODO: fetch notes
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const notes = await getNotes();
      const sortedNotes = notes.sort((a, b) => {
        return new Date(b.createdAt.S) - new Date(a.createdAt.S);
      });
      setNotes(sortedNotes);
    }
    fetchNotes();
  }, []);

  // add note

  // add note
  async function addNote({ note, author }) {
    console.log(`note: ${note}, author: ${author}`);
    try {
      const response = await axios.post("/api/dynamo/addNote", {
        note: note,
        author: author,
      });
      // add the note locally once it's added to db
      addNoteLocally({
        note: { S: note },
        createdAt: { S: new Date().toISOString() },
        author: { S: author },
      });
      return response;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return { error: "Be more creative - note already exists!" };
      } else {
        return { error: "An error occurred while adding the note." };
      }
    }
  }

  async function getNotes() {
    try {
      const response = await axios.get("/api/dynamo/getNotes");
      return response.data.notes;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  function addNoteLocally(note) {
    setNotes([note, ...notes]);
  }

  return { addNote, notes, addNoteLocally };
}
