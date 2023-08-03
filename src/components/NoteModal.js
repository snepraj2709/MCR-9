import { useState } from "react";
import { useData } from "../context/DataContext";
import { MdCancel } from "../utils/icons";
import { toast } from "react-hot-toast";

function NoteModal({ close, currentVideo }) {
  const { updateNote } = useData();
  const [noteDetail, setNoteDetail] = useState({ title: "", description: "" });

  const submitNote = () => {
    const updatedVideo = { ...currentVideo, notes: { ...noteDetail } };
    updateNote(updatedVideo);
    toast.success("Added Note");
    close();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 dark:text-black">
      <div className="bg-slate-200 rounded-md p-4 w-96 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">Create new note</p>
          <MdCancel
            onClick={close}
            className="cursor-pointer text-gray-500 hover:text-gray-800 w-6 h-6"
          />
        </div>
        <div id="1">
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Title"
              className="h-8 rounded-md pl-2"
              value={noteDetail.title}
              onChange={(e) =>
                setNoteDetail({ ...noteDetail, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              className="h-8 rounded-md pl-2"
              value={noteDetail.description}
              onChange={(e) =>
                setNoteDetail({ ...noteDetail, description: e.target.value })
              }
            />
          </div>
          <div className="space-x-2">
            <button
              className="bg-blue-500 cursor-pointer hover:underline py-2 px-3 mt-2 rounded-full text-white text-sm"
              onClick={submitNote}>
              Submit
            </button>
            <button
              className="border border-gray-800 cursor-pointer hover:underline py-2 px-3 mt-2 rounded-full text-sm"
              onClick={submitNote}>
              Discard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteModal;
