export const ActionType = {
    PLUS_ORDER: "PLUS_ORDER",
    MINUS_ORDER: "MINUS_ORDER",
    SET_DATA_KTP: "SET_DATA_KTP",
    UPDATE_DATA_KTP: "UPDATE_DATA_KTP",
    TEST_ACTION: "TEST_ACTION"
}


export const setKTPData = (payload) => {
    console.log("PAYLOAD :", payload)
    return {
        type: ActionType.SET_DATA_KTP,
        payload: payload
    }
}

export const updateKTPData = (key, value) => {
    return {
        type: ActionType.UPDATE_DATA_KTP,
        key: key,
        value: value
    }
}

export const testUpdateState = (newData) => {
    console.log("NEW DATA :", newData)
    return {
        type: ActionType.TEST_ACTION,
        data: newData
    }
}