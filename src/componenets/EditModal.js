import {
  Dialog,
  Button,
  Input,
  Typography,
  IconButton,
  Switch,
} from "@material-tailwind/react";
import { Xmark, EditPencil } from "iconoir-react";
import { useState, useContext } from "react";
import { TodosContext } from "../contexts/todosContext";

export default function EditModal({ todo }) {
  const [open, setOpen] = useState(false);

  const { todos, setTodos } = useContext(TodosContext);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  function handelSaveClick() {
    const newTodos = todos.map((t) => {
      console.log(isCompleted);
      if (t.id === todo.id) {
        return {
          ...t,
          title,
          description,
          isCompleted,
        };
      }
      return t;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setOpen(false);
  }

  return (
    <Dialog size="sm" open={open} handler={setOpen}>
      <Dialog.Trigger
        as={IconButton}
        isCircular
        variant="outline"
        className="border-blue-500 bg-white hover:bg-slate-300"
        onClick={() => setOpen(true)}
      >
        <EditPencil className="h-4 w-4 stroke-2" color="#3b82f6" />
      </Dialog.Trigger>
      <Dialog.Overlay>
        <Dialog.Content dir="rtl">
          <Typography type="h6" className="mb-1">
            تعديل المهمة
          </Typography>
          <Dialog.DismissTrigger
            as={IconButton}
            size="sm"
            variant="ghost"
            color="secondary"
            className="absolute left-2 top-2"
            isCircular
            onClick={() => setOpen(false)}
          >
            <Xmark className="h-5 w-5" />
          </Dialog.DismissTrigger>
          <Typography className="text-foreground">
            {/* Enter your email and password to Sign In. */}
          </Typography>
          <div className="mt-6">
            <div className="mb-4 mt-2 space-y-1.5">
              <Typography
                as="label"
                htmlFor="title"
                type="small"
                color="default"
                className="font-semibold"
              >
                عنوان المهمة
              </Typography>
              <Input
                id="title"
                placeholder="عنوان المهمة"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4 space-y-1.5">
              <Typography
                as="label"
                htmlFor="description"
                type="small"
                color="default"
                className="font-semibold"
              >
                الوصف
              </Typography>
              <Input
                placeholder="الوصف"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 mb-4 space-y-1.5">
              <Switch
                id="switch"
                color="success"
                checked={isCompleted}
                onChange={(e) => setIsCompleted(e.target.checked)}
              />
              <Typography
                as="label"
                htmlFor="switch"
                className="cursor-pointer"
              >
                تم الانتهاء من المهمة
              </Typography>
            </div>

            <div className="flex flex-row items-center justify-between gap-2">
              <Button
                isFullWidth
                onClick={(e) => {
                  handelSaveClick();
                }}
              >
                تعديل
              </Button>

              <Button
                isFullWidth
                onClick={(e) => {
                  setTitle(todo.title);
                  setDescription(todo.description);
                  setIsCompleted(todo.isCompleted);
                  setOpen(false);
                }}
                className=" border-red-500 bg-red-500 hover:bg-red-600"
              >
                إلغاء
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
  );
}
