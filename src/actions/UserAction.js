export const updateUserDetail = (role , userName , token )=>{
    const UPDATE_USER_DETAIL = 'UPDATE_USER_DETAIL';
    return {
        type : UPDATE_USER_DETAIL ,
        payload : {
            role , token , userName
        }
    }
}

export const removeUserDetail = ()=>{
    const REMOVE_USER_DETAIL = 'REMOVE_USER_DETAIL';
    return {
        type : REMOVE_USER_DETAIL 
    }
}