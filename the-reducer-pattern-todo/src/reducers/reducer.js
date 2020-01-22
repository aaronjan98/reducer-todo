export const initialState = [
      {
        todo: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }
]

export const reducer = (state, action) => {
  //  console.log('this is state when passed through reducer', state);

    switch (action.type) {
        case 'ADD_TODO':
          return [
                ...state, {
                    todo: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ];
        case 'COMPLETE_TODO':
         const completedState = state.map(item => {
            if(item.id === action.payload.id){
                item.completed = !item.completed;
            }
            return item;
          })
          return completedState;
        case 'CLEAR_TODO':
          const clearedState =  state.filter(item => item.completed === false)
            return clearedState;
        default:
          return state;
      }
}