const initData = {
    list : [],
    tempItemList: []
}
const indexRed = (state=initData, action) => {

    switch (action.type) {
        
        case "Add_Todo":
            const { id, data, isChecked } = action.payload; 

            if (data === ""){
                alert("plz Fill The Data");
                return state
                //console.log(state);
            }   
                return {
                    ...state,
                    list : [
                        ...state.list,
                    {
                        id,
                        data,
                        isChecked
                    }
                    ],
                    tempItemList : [
                        ...state.tempItemList,
                        action.payload
                    ],
                }

        case "Edit_Todo":
                const newEdit = state.tempItemList.map((elem) =>  elem.id === action.id)
                // console.log(newEdit);
                    return {
                         ...state,
                        tempItemList: newEdit
                    }

        case "EditItem":    // Update Item
                console.log("data",action.data)
                    return {
                        ...state,
                         list: state.list.map((elem) => elem.id === action.id ? {...elem, data : action.data} : elem)
                     }
            
        case "Delete_Todo":
           const newList = state.list.filter((elem) => elem.id !== action.id)
                return {
                    ...state,
                    list: newList
                }

        case "Remove_All":
            return{
                ...state,
                list: []
            }

        case "CheckItem":
            const chID = action.id;
            const tempItemList = [...state.list];
            tempItemList[chID] = {
                ...tempItemList[chID]
            }
            return {
                ...state,
                list : [...tempItemList],
                tempItemList : [...tempItemList]
            }

        case "Checked":
            return{
                ...state,
                list : state.tempItemList.filter((elem) => elem.isChecked === true)
            }
        
        case "UnChecked":
            return {
                ...state,
                list: state.tempItemList.filter((elem) => elem.isChecked !== true)
            }
        
        case "Show_All":
            return {
                ...state,
                list: state.tempItemList
            }
            default: return state ;
    }
}

export default indexRed;

