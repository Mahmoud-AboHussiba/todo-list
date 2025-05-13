import React from "react";
import {
  IconButton,
  Input,
  List,
  ListItem,
  Dialog,
  Button,
  Typography,
  Switch,
} from "@material-tailwind/react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useMemo } from "react";
import { useTodos } from "../contexts/todosContext";
import { Xmark } from "iconoir-react";
import toast from "react-hot-toast";

export default function TodoList() {
  const [ todosReducerState, dispatchTodosReducer ]= useTodos();
  const [titleInput, setTitleInput] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [openDeleteModal, setOpenDeleteModal] = useState();
  const [openEditModal, setOpenEditModal] = useState();
  const [modalTodo, setModalTodo] = useState({});

  const completedTodos = useMemo(() => {
    return todosReducerState.filter((todo) => todo.isCompleted);
  }, [todosReducerState]);
  const notCompletedTodos = useMemo(() => {
    return todosReducerState.filter((todo) => !todo.isCompleted);
  }, [todosReducerState]);

  let filteredTodos = [];

  if (statusFilter === "completed") {
    filteredTodos = completedTodos;
  } else if (statusFilter === "notCompleted") {
    filteredTodos = notCompletedTodos;
  } else {
    filteredTodos = todosReducerState;
  }

  function showDeleteModal(todo) {
    setModalTodo(todo);
    setOpenDeleteModal(true);
  }

  function showEditModal(todo) {
    setModalTodo(todo);
    setOpenEditModal(true);
  }

  useEffect(() => {
    dispatchTodosReducer({ type: "GET_TODOS", payload: {} });
  }, []);

  function handleAddClick(e) {
    e.preventDefault();
    dispatchTodosReducer({
      type: "ADD_TODO",
      payload: {
        id: uuidv4(),
        title: titleInput,
        description: "",
        isCompleted: false,
      },
    });
    setTitleInput("");
    toast.success("تم إضافة المهمة بنجاح");
  }

  function handelSaveClick() {
    dispatchTodosReducer({ type: "UPDATE_TODO", payload: modalTodo });
    setOpenEditModal(false);
    setModalTodo({});
    toast.success("تم تعديل المهمة بنجاح");
  }

  function handleDeleteClick() {
    dispatchTodosReducer({ type: "DELETE_TODO", payload: modalTodo });
    setModalTodo({});
    setOpenDeleteModal(false);
    toast.success("تم حذف المهمة بنجاح");
  }

    const todosJsx = filteredTodos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        showDeleteModal={showDeleteModal}
        showEditModal={showEditModal}
      ></Todo>
    ));

  return (
    <>
      <Dialog size="sm" open={openDeleteModal} handler={setOpenDeleteModal}>
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
                onClick={() => setOpenDeleteModal(false)}
              >
                <Xmark className="h-5 w-5" />
              </Dialog.DismissTrigger>
            </div>
            <Typography className="mb-6 mt-2 text-foreground" dir="rtl">
              هل أنت متأكد من حذف هذه المهمة؟ لا يمكنك التراجع عن هذا الإجراء.
            </Typography>
            <div className="mb-1 flex items-center justify-end gap-2" dir="rtl">
              <Dialog.DismissTrigger
                as={Button}
                variant="ghost"
                color="error"
                onClick={() => setOpenDeleteModal(false)}
              >
                إلغاء
              </Dialog.DismissTrigger>
              <Button onClick={handleDeleteClick}>تأكيد</Button>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog>

      {/*Start Edit Modal */}
      <Dialog size="sm" open={openEditModal} handler={setOpenEditModal}>
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
              onClick={() => setOpenEditModal(false)}
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
                  value={modalTodo.title}
                  onChange={(e) =>
                    setModalTodo({ ...modalTodo, title: e.target.value })
                  }
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
                  value={modalTodo.description}
                  onChange={(e) =>
                    setModalTodo({ ...modalTodo, description: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center gap-2 mb-4 space-y-1.5">
                <Switch
                  id="switch"
                  color="success"
                  checked={modalTodo.isCompleted}
                  onChange={(e) =>
                    setModalTodo({
                      ...modalTodo,
                      isCompleted: e.target.checked,
                    })
                  }
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
                  onClick={() => {
                    handelSaveClick();
                  }}
                >
                  تعديل
                </Button>

                <Button
                  isFullWidth
                  onClick={(e) => {
                    setOpenEditModal(false);
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
      {/*End Edit Modal */}

      <div className="container size-10/12 py-5 bg-white rounded-lg border-2 border-gray-300 scroll-m-2 ">
        <div className="py-2">
          <h1 className="text-5xl text-center">مهامي</h1>
          <hr></hr>
        </div>

        {/* Start Nav */}
        <List
          className="flex justify-center py-4 flex-row gap-0"
          value={statusFilter}
        >
          {[
            { label: "الكل", value: "all" },
            { label: "منجز", value: "completed" },
            { label: "غير منجز", value: "notCompleted" },
          ].map((item) => (
            <ListItem
              key={item.value}
              onClick={() => setStatusFilter(item.value)}
              className={`border border-gray-300 rounded-sm
        ${
          statusFilter === item.value
            ? "bg-red-100 text-red-600 font-semibold"
            : "text-gray-700 hover:bg-gray-100"
        }`}
            >
              {item.label}
            </ListItem>
          ))}
        </List>
        {/* End Nav */}

        {/* Start Tasks List */}
        <div className="flex flex-col gap-4  max-h-96 overflow-y-auto">
          {todosJsx}
        </div>
        {/* End Tasks List */}

        {/* Start Add Task */}
        <form className="flex flex-row gap-3 pt-4">
          <div className="w-3/4">
            <Input
              placeholder="عنوان المهمة"
              className="text-right"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
          </div>
          <div className="w-1/4">
            <IconButton
              type="submit"
              className="w-full bg-red-800"
              onClick={handleAddClick}
              disabled={!titleInput}
            >
              إضافة
            </IconButton>
          </div>
        </form>
        {/* Start Add Task */}
      </div>
    </>
  );
}
