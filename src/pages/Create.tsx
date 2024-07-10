import FormC from "../Form/FormC";
import { NoteData, Tag } from "../Types";
export type createProps = {
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
  handleSubmit: (noteData: NoteData) => void;
} & Partial<NoteData>;
const Create = ({ createTag, handleSubmit, availableTags }: createProps) => {
  console.log(handleSubmit);
  return (
    <div className=" container">
      <h2 className=" text-primary fst-italic">Yeni Not olustur</h2>
      <FormC
        handleSubmit={handleSubmit}
        createTag={createTag}
        availableTags={availableTags}
      />
    </div>
  );
};

export default Create;
