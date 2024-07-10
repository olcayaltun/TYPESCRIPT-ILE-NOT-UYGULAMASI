import { Card, Stack, Badge } from "react-bootstrap";
import styles from "../src/Form/card.module.css";
import { useNavigate } from "react-router-dom";

type Props = {
  notes: Note;
};

const NoteCard = ({ notes }: Props) => {
  const navigate = useNavigate();
  return (
    <Card
      className={styles.background}
      onClick={() => navigate(`/note/${notes.id}`)}
    >
      <Card.Body>
        <Stack className="align-items-center">
          <span>{notes.title}</span>
          <Stack
            direction="horizontal"
            className="justify-content-center gap-2"
          >
            {notes.tags.map((tag) => (
              <Badge className=" justify-content-center">{tag.label}</Badge>
            ))}
          </Stack>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default NoteCard;
