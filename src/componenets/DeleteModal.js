import {
  Dialog,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Xmark, Trash } from "iconoir-react";
import { useContext } from "react";
import { TodosContext } from "../contexts/todosContext";

export default function DeleteModal({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);

  function handleDeleteClick() {
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  }

  return (
    <Dialog>
      <Dialog.Trigger
        as={IconButton}
        className="border-red-500 bg-white hover:bg-slate-300"
        variant="outline"
        isCircular
      >
        <Trash color="red" />
      </Dialog.Trigger>
      <Dialog.Overlay>
        <Dialog.Content>
          <div className="flex items-center justify-between gap-4" dir="rtl">
            <Typography type="h6" className="text-right">
              تنبيه
            </Typography>

            <Dialog.DismissTrigger
              as={IconButton}
              size="sm"
              variant="ghost"
              color="secondary"
              className="absolute left-2 top-2"
              isCircular="true"
            >
              <Xmark className="h-5 w-5" />
            </Dialog.DismissTrigger>
          </div>
          <Typography className="mb-6 mt-2 text-foreground" dir="rtl">
            هل أنت متأكد من حذف هذه المهمة؟ لا يمكنك التراجع عن هذا الإجراء.
          </Typography>
          <div className="mb-1 flex items-center justify-end gap-2" dir="rtl">
            <Dialog.DismissTrigger as={Button} variant="ghost" color="error">
              إلغاء
            </Dialog.DismissTrigger>
            <Button onClick={handleDeleteClick}>تأكيد</Button>
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
  );
}
