import FormC from "../Form/FormC";
import { NoteData, Tag, Note } from "../Types";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
type Props = {
  handleSubmit: (id: string, updataData: NoteData) => void;
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
};
const Edit = ({ createTag, availableTags, handleSubmit }: Props) => {
  const note = useOutletContext<Note>();

  return (
    <div className=" container">
      <Link to="/new">
        <h2 className=" text-primary fst-italic">Notu Düzenle</h2>
      </Link>
      <FormC
        createTag={createTag}
        availableTags={availableTags}
        handleSubmit={(updataData) => handleSubmit(note.id, updataData)}
        markdown={note.markdown}
        title={note.title}
        tags={note.tags}
      />
    </div>
  );
};

export default Edit;
