type changeThemeActionType = {
    type: 'SET_THEME_ID'
    id: number
}
type ActionType = changeThemeActionType
export type ThemeType = {
    themeId: number
}

const initState: ThemeType = {
    themeId: 1
}

export const changeThemeId = (id: number): changeThemeActionType => ({ type: 'SET_THEME_ID' as const, id })  // fix any


export const themeReducer = (state: ThemeType = initState, action: ActionType): ThemeType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.id,
            }
        }

        default:
            return state
    }
}

