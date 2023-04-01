const videosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { ...action.payload, id: state.length + 1 }];

    case 'DELETE':
      return state.filter((video) => video.id !== action.payload);

    case 'UPDATE':
      const newState = [...state];
      console.log(action.payload);
      const index = newState.findIndex((ind) => ind.id === action.payload.id);

      newState.splice(index, 1, action.payload);

      return newState;
    default:
      state;
  }
};

export default videosReducer;
