import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import { v4 } from "uuid";
import Layout from "./Layout/index";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Tag, Note, NoteData } from "./Types";
const App = () => {
  const deleteNote = (id: string): void => {
    setNotes(notes.filter((n) => n.id !== id));
  };
  const [notes, setNotes] = useLocalStorage<Note[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  const createTag = (tag: Tag): void => {
    setTags([...tags, tag]);
  };
  const createNote = (noteData: NoteData): void => {
    const newNote: Note = {
      id: v4(),
      ...noteData,
    };
    setNotes([...notes, newNote]);
  };
  const updataNote = (id: string, updataData: NoteData): void => {
    const updateArr = notes.map((note) =>
      note.id == id ? { id, ...updataData } : note
    );
    setNotes(updateArr);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main notes={notes} availableTags={tags} />} />
        <Route
          path="/new"
          element={
            <Create
              createTag={createTag}
              handleSubmit={createNote}
              availableTags={tags}
            />
          }
        />
        <Route path="/note/:id" element={<Layout notes={notes} />}>
          <Route index element={<Detail deleteNote={deleteNote} />} />
          <Route
            path="edit"
            element={
              <Edit
                handleSubmit={updataNote}
                createTag={createTag}
                availableTags={tags}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
