import {RootState} from './store'
import {ThemeType} from './themeReducer'

export const selectThemes = (state: RootState): ThemeType => state.theme
