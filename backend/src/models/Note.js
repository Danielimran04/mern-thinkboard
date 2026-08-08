import mongoose from "mongoose";


// first step You need to create a schema
// second step you need to create a model based off 0f that schema 

const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    content: {
        type:String,
        required: true
    },
},
{timestamps: true}
);

const Note = mongoose.model("Note", noteSchema);

export default Note;