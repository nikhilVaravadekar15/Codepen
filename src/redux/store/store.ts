import { configureStore } from '@reduxjs/toolkit'
import themeSlice from '../slices/themeSlice'
import fontSizeSlice from '../slices/fontSizeSlice'
import htmlClassesSlice from '../slices/htmlClassesSlice'
import headSlice from '../slices/headSlice'
import styleSheetsSlice from '../slices/styleSheetsSlice'
import externalScriptsSlice from '../slices/externalScriptsSlice'

export default configureStore({
    reducer: {
        themeSlice,
        fontSizeSlice,
        htmlClassesSlice,
        headSlice,
        styleSheetsSlice,
        externalScriptsSlice
    }
})
