// Import the createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the event
const initialState = {
  isLoading: true,
};

// Create a slice of the state for the event
const eventSlice = createSlice({
  // Give the slice a name
  name: "event",
  // Pass the initial state
  initialState,
  // Define the reducers for the slice
  reducers: {
    // Create an event
    eventCreateRequest: (state) => {
      state.isLoading = true;
    },
    eventCreateSuccess: (state, action) => {
      state.isLoading = false;
      state.event = action.payload;
      state.success = true;
    },
    eventCreateFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },

    // Get all events of a shop
    getAlleventsShopRequest: (state) => {
      state.isLoading = true;
    },
    getAlleventsShopSuccess: (state, action) => {
      state.isLoading = false;
      state.events = action.payload;
    },
    getAlleventsShopFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Delete an event of a shop
    deleteEventRequest: (state) => {
      state.isLoading = true;
    },
    deleteEventSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    deleteEventFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Get all events
    getAlleventsRequest: (state) => {
      state.isLoading = true;
    },
    getAlleventsSuccess: (state, action) => {
      state.isLoading = false;
      state.allEvents = action.payload;
    },
    getAlleventsFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Clear errors
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

// Export the reducer and action creators from the slice
export const {
  eventCreateRequest,
  eventCreateSuccess,
  eventCreateFail,
  getAlleventsShopRequest,
  getAlleventsShopSuccess,
  getAlleventsShopFailed,
  deleteEventRequest,
  deleteEventSuccess,
  deleteEventFailed,
  getAlleventsRequest,
  getAlleventsSuccess,
  getAlleventsFailed,
  clearErrors,
} = eventSlice.actions;

export const eventReducer = eventSlice.reducer;




/* Older code from down refactored */

// import { createReducer } from '@reduxjs/toolkit';

// const initialState = {
//   isLoading: true,
// };

// export const eventReducer = createReducer(initialState, {
//   eventCreateRequest: (state) => {
//     state.isLoading = true;
//   },
//   eventCreateSuccess: (state, action) => {
//     state.isLoading = false;
//     state.event = action.payload;
//     state.success = true;
//   },
//   eventCreateFail: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//     state.success = false;
//   },

//   // get all events of shop
//   getAlleventsShopRequest: (state) => {
//     state.isLoading = true;
//   },
//   getAlleventsShopSuccess: (state, action) => {
//     state.isLoading = false;
//     state.events = action.payload;
//   },
//   getAlleventsShopFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },

//   // delete event of a shop
//   deleteEventRequest: (state) => {
//     state.isLoading = true;
//   },
//   deleteEventSuccess: (state, action) => {
//     state.isLoading = false;
//     state.message = action.payload;
//   },
//   deleteEventFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },

//   // get all events
//   getAlleventsRequest: (state) => {
//     state.isLoading = true;
//   },
//   getAlleventsSuccess: (state, action) => {
//     state.isLoading = false;
//     state.allEvents = action.payload;
//   },
//   getAlleventsFailed: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },

//   clearErrors: (state) => {
//     state.error = null;
//   },
// });
