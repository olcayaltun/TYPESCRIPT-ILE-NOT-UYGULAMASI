import { Link, useOutlet, useOutletContext } from "react-router-dom";
import { Note } from "../Types";
import { Row, Col, Stack, Badge, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
type Props = {
  deleteNote: (id: string) => void;
};
const Detail = ({ deleteNote }: Props) => {
  const note = useOutletContext<Note>();

  return (
    <div className=" container py-5 mx-auto ">
      <Row>
        <Col>
          <h1 className=" ">{note.title}</h1>
          <Stack direction="horizontal" gap={5}>
            {note.tags.map((tag) => (
              <Badge>{tag.label}</Badge>
            ))}
          </Stack>
        </Col>
        <Col>
          <Stack direction="horizontal" gap={2}>
            <Link to="/">
              {" "}
              <Button variant="secondary">Geri</Button>
            </Link>
            <Link to="edit">
              <Button>Düzenle</Button>
            </Link>
            <Button onClick={() => deleteNote(note.id)} variant="danger">
              Sil
            </Button>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </div>
  );
};

export default Detail;
