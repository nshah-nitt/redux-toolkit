const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numoficecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numoficecreams--;
        },
        restocked:(state,action)=>{
            state.numoficecreams += action.payload;
        }
    }
})

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions; 