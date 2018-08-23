export default (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_PHRASE_TEXT':
      return Object.assign({}, state, {
        textValue: action.newText
      });
    default:
      return state
  }
};
