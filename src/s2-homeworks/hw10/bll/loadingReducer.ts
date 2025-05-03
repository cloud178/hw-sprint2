type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

type LoadingReducerType = LoadingActionType

type LoadnigType = {
    isLoading: boolean
}

const initState: LoadnigType = {
    isLoading: false,
}
export const loadingReducer = (state = initState, action: LoadingReducerType): LoadnigType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}
