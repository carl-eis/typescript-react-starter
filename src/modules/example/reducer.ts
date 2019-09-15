const initialState = {};

const exampleReducer = (state: any = initialState, action: any = {}) => {
  const { data, type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default exampleReducer;
