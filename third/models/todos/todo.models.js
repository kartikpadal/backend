import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    complete: {
      type: Boolean,
      default: false
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    subTodos:
    [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo"
      }
    ]// Array of Sub-Tods
  },{timestamps: true})

export const Todo = mongoose.model("Todo", todoSchema)
// when 'Todo' gets stored in the databse its name becomes : 'todos'