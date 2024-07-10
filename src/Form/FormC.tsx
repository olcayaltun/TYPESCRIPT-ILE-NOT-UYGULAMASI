import { Form, Col, Row, Stack, Button } from "react-bootstrap";
import { createProps } from "../pages/Create";
import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactSelect from "react-select/creatable";
import { v4 } from "uuid";
import { Tag } from "../Types";
const FormC = ({
  availableTags,
  handleSubmit,
  createTag,
  markdown = "",
  title = "",
  tags = [],
}: createProps) => {
  const [selectedTags, setSeletedTags] = useState<Tag[]>(tags);

  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  console.log(handleSubmit);
  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit({
      title: inputRef.current?.value as string,
      markdown: textAreaRef.current?.value as string,
      tags: selectedTags,
    });
    navigate("/");
  };
  console.log(selectedTags);

  return (
    <Form onSubmit={handleSend}>
      <Stack>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Baslik</Form.Label>
              <Form.Control defaultValue={title} ref={inputRef} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Etiketler</Form.Label>
              <ReactSelect
                onChange={(alltags) => setSeletedTags(alltags as Tag[])}
                value={selectedTags}
                className="text-black"
                isMulti
                onCreateOption={(text: string) => {
                  const newTag: Tag = { label: text, value: v4() };
                  createTag(newTag);
                  setSeletedTags([...selectedTags, newTag]);
                }}
                options={availableTags}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group>
          <Form.Label>Icerik</Form.Label>
          <Form.Control
            defaultValue={markdown}
            ref={textAreaRef}
            as="textarea"
            style={{ minHeight: "300px", maxHeight: "500px" }}
          />
        </Form.Group>
      </Stack>
      <Stack
        gap={4}
        direction="horizontal"
        className=" justify-content-end mt-4"
      >
        <Button type="submit">Kaydet</Button>
        <Button type="button" variant="secondary">
          Geri
        </Button>
      </Stack>
    </Form>
  );
};

export default FormC;
