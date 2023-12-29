import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEmojis = createAsyncThunk('emojis/fetchEmojis', async () => {
  const response = await axios.get('https://emojihub.yurace.pro/api/all//category/smileys-and-people');
  return response.data

});


const emojisSlice = createSlice({
  name: 'emojis',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmojis.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmojis.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchEmojis.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default emojisSlice.reducer;



