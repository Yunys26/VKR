import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const requestAuthorization = createAsyncThunk('counter/requestAuthorization', 
  async (valueInputName, valueInputLastName, valueInputdateOfBirth) => {
    await axios.post('http://localhost:9999/', {
        name:  valueInputName,
        lastName: valueInputLastName,
        dateOfBirth: valueInputdateOfBirth,
      }
    )
      .then( res => console.log(res))
      .catch( err => console.log(err))
  }
);

export const requestRegistry = createAsyncThunk('counter/requestRegistry',
  async (valueInputLogin, valueInputPassword) => {
    await axios.post('http://localhost:9999/', {
        login: valueInputLogin,
        password: valueInputPassword,
      }
    )
      .then( res => console.log(res))
      .catch( err => console.log(err))
  }
);

const sliceRegistration = createSlice({
    name: 'sliceRegistration',

    initialState: {

    },

    reducers: {

    },

    extraReducers: {
        
    },
}) 

export default sliceRegistration.reducer;

// export const {} = sliceRegistration.actions;