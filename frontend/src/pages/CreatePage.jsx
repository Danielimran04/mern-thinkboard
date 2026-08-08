import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
import api from "../../lib/axios";


const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState("");

  const Navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();{/* for this line is to prevent bila kita input something and submit dia tak refresh*/}

    {/* sebab ape letak trim if user letak empty value dia tak accept*/}
    if(!title.trim() || !content.trim())
    {
      toast.error("All Field Are Required")
      return;
    }
    
     {/* after dah lepas if system akan bawak ke api notes where boleh tukar then akan keluar toast and then navigate balik ke hompage*/}
    setLoading(true)
    try {
      {/* kalau tak sebelum nih kan pakai cmni tapi nak susah kene type full link untuk kita singkatkan kita buat lah axios,js dekat dalam lib folder untuk panggil je nanti
        await axios.post("http://localhost:5001/api/notes", {
        title,
        content
      })*/}

      {/* okay nih paling mudah just panggil je balik dekat lib=library buat sendiri */}
      await api.post("/notes", {
        title,
        content,
      });
      toast.success("Note Created Successfully")
      Navigate("/")
    } catch (error) {
      console.log("Error Creating note", error)
      toast.error("Failed to create note")
    }

  };


  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
          <ArrowLeftIcon className="size-5" />
          Back to Notes
          </Link>

         <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Note Title"
                    className="input input-bordered"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered h-32"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="card-actions justify-end">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Creating...": "Create Note"}

                  </button>

                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CreatePage