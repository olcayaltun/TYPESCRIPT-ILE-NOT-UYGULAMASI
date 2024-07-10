import { Navigate, Outlet, useParams } from "react-router-dom";
import { Note } from "../Types";

type Props = {
  notes: Note[];
};

const index = ({ notes }: Props) => {
  const { id } = useParams();
  const found = notes.find((i) => i.id === id);
  if (!found) return <Navigate to="/" replace />;
  return <Outlet context={found} />;
};

export default index;
