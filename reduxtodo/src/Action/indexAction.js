export const addTodo = (data) => {
    return {
        type : "Add_Todo",
        payload : {
            id: new Date().getTime().toString(),
            data: data,
            isChecked:false,
            }
    }
}

//update item
export const editItem = (id, data) => {
    return {
        type : "EditItem",
        id,
        data
    }
}

export const editTodo = (id, text) => {
    return {
        type : "Edit_Todo",
            id,
            text
    }
}

export const deleteTodo = (id) => {
    return {
    type : "Delete_Todo",
    id
    }
}

export const removeAll = () => {
    return {
    type : "Remove_All"
    }
}

export const checkItem = (id) => {
    return {
        type : "CheckItem",
        id
    }
}

export const checked = () => {
    return {
        type: "Checked"
   }
}

export const unChecked = () => {
    return {
        type: "UnChecked"
    }
}

export const showAll = () => {
    return {
        type: "Show_All"
    }
}
