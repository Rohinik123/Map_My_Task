import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);

  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <>
      <div className="container mt-4">
        <table className="table table-striped">
          <thead>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Edit & Update</th>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{note.title}</th>
              <td>{note.description}</td>
              <td>{note.tag}</td>
              <td>
                {" "}
                <i
                  className="fa-solid fa-trash-can mx-2"
                  onClick={() => {
                    deleteNote(note._id);
                    props.showAlert("Deleted Successfull", "success");
                  }}
                ></i>
                <i
                  className="fa-solid fa-pen-to-square mx-2"
                  onClick={() => {
                    updateNote(note);
                  }}
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NoteItem;
