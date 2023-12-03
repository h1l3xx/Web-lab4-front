import {createSlice} from "@reduxjs/toolkit"

const dotSlice = createSlice({
    name : 'dot',
    initialState:{
        dots : []
    },
    reducers : {
        addDot(state, action) {

            console.log(state)
            console.log(action)

            state.dots.push({
                dot : action.payload
            })
        },
        clearDots(state) {
            state.dots = []
        }
    }
})

export const {addDot, clearDots} = dotSlice.actions

export default dotSlice.reducer