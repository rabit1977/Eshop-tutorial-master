import axios from "axios";
import { server } from "../../server";

// Use async/await syntax and try/catch blocks for error handling
// Use camelCase for naming variables and functions
// Use constants for action types
// Use arrow functions for action creators

// create event
export const CREATE_EVENT_REQUEST = "CREATE_EVENT_REQUEST";
export const CREATE_EVENT_SUCCESS = "CREATE_EVENT_SUCCESS";
export const CREATE_EVENT_FAIL = "CREATE_EVENT_FAIL";

export const createEvent = (newForm) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_EVENT_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/event/create-event`,
      newForm,
      config
    );
    dispatch({ type: CREATE_EVENT_SUCCESS, payload: data.event });
  } catch (error) {
    dispatch({
      type: CREATE_EVENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get all events of a shop
export const GET_ALL_EVENTS_SHOP_REQUEST = "GET_ALL_EVENTS_SHOP_REQUEST";
export const GET_ALL_EVENTS_SHOP_SUCCESS = "GET_ALL_EVENTS_SHOP_SUCCESS";
export const GET_ALL_EVENTS_SHOP_FAIL = "GET_ALL_EVENTS_SHOP_FAIL";

export const getAllEventsShop = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_EVENTS_SHOP_REQUEST });

    const { data } = await axios.get(`${server}/event/get-all-events/${id}`);
    dispatch({ type: GET_ALL_EVENTS_SHOP_SUCCESS, payload: data.events });
  } catch (error) {
    dispatch({
      type: GET_ALL_EVENTS_SHOP_FAIL,
      payload: error.response.data.message,
    });
  }
};

// delete event of a shop
export const DELETE_EVENT_REQUEST = "DELETE_EVENT_REQUEST";
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS";
export const DELETE_EVENT_FAIL = "DELETE_EVENT_FAIL";

export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_EVENT_REQUEST });

    const { data } = await axios.delete(
      `${server}/event/delete-shop-event/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({ type: DELETE_EVENT_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: DELETE_EVENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get all events
export const GET_ALL_EVENTS_REQUEST = "GET_ALL_EVENTS_REQUEST";
export const GET_ALL_EVENTS_SUCCESS = "GET_ALL_EVENTS_SUCCESS";
export const GET_ALL_EVENTS_FAIL = "GET_ALL_EVENTS_FAIL";

export const getAllEvents = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_EVENTS_REQUEST });

    const { data } = await axios.get(`${server}/event/get-all-events`);
    dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: data.events });
  } catch (error) {
    dispatch({
      type: GET_ALL_EVENTS_FAIL,
      payload: error.response.data.message,
    });
  }
};



/* older code is down */

// import axios from 'axios';
// import { server } from '../../server';

// // create event
// export const createevent = (newForm) => async (dispatch) => {
//   try {
//     dispatch({
//       type: 'eventCreateRequest',
//     });

//     const config = { headers: { 'Content-Type': 'multipart/form-data' } };

//     const { data } = await axios.post(
//       `${server}/event/create-event`,
//       newForm,
//       config
//     );
//     dispatch({
//       type: 'eventCreateSuccess',
//       payload: data.event,
//     });
//   } catch (error) {
//     dispatch({
//       type: 'eventCreateFail',
//       payload: error.response.data.message,
//     });
//   }
// };

// // get all events of a shop
// export const getAllEventsShop = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: 'getAlleventsShopRequest',
//     });

//     const { data } = await axios.get(`${server}/event/get-all-events/${id}`);
//     dispatch({
//       type: 'getAlleventsShopSuccess',
//       payload: data.events,
//     });
//   } catch (error) {
//     dispatch({
//       type: 'getAlleventsShopFailed',
//       payload: error.response.data.message,
//     });
//   }
// };

// // delete event of a shop
// export const deleteEvent = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: 'deleteEventRequest',
//     });

//     const { data } = await axios.delete(
//       `${server}/event/delete-shop-event/${id}`,
//       {
//         withCredentials: true,
//       }
//     );

//     dispatch({
//       type: 'deleteEventSuccess',
//       payload: data.message,
//     });
//   } catch (error) {
//     dispatch({
//       type: 'deleteEventFailed',
//       payload: error.response.data.message,
//     });
//   }
// };

// // get all events
// export const getAllEvents = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: 'getAlleventsRequest',
//     });

//     const { data } = await axios.get(`${server}/event/get-all-events`);
//     dispatch({
//       type: 'getAlleventsSuccess',
//       payload: data.events,
//     });
//   } catch (error) {
//     dispatch({
//       type: 'getAlleventsFailed',
//       payload: error.response.data.message,
//     });
//   }
// };
