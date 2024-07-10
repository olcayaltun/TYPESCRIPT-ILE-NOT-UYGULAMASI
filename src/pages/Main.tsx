import { Stack, Button, FormControl, Form, Row, Col } from "react-bootstrap";
import { Tag, Note } from "../Types";
import { Link } from "react-router-dom";
import Card from "../Card";
import { useState } from "react";
import ReactSelect from "react-select";
interface Props {
  notes: Note[];
  availableTags: Tag[];
}

const Main = ({ notes, availableTags }: Props) => {
  console.log(notes);
  const [title, setTitle] = useState<string>("");
  const [selectedTags, setSeletedTags] = useState<Tag[]>([]);
  // const filterd = notes.filter((note) =>
  // note.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
  // );
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()) &&
      selectedTags.every((iTag) =>
        note.tags.some((notetag) => notetag.value === iTag.value)
      )
  );

  return (
    <div className=" bg-black container  py-5 mt-5 rounded">
      <Stack direction="horizontal" className="justify-content-between">
        <h1 className=" text-primary fst-italic">Notlar</h1>
        <Link to="/new">
          <Button> Olustur</Button>
        </Link>
      </Stack>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label className=" text-white">Basliga Göre Ara</Form.Label>

              <Form.Control onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label className=" text-white">Taga Göre Ara</Form.Label>

              <ReactSelect
                onChange={(alltags) => setSeletedTags(alltags as Tag[])}
                isMulti
                options={availableTags}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row>
        {filteredNotes.map((notes) => (
          <Col className=" mt-5">
            <Card key={notes.id} notes={notes} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Main;
