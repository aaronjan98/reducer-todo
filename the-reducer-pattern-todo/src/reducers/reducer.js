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
          return [
            state.map(item => {
                item.completed =  true
            })
          ];
        case 'CLEAR_TODO':
            return [
                ...state, 
                state.filter(item => item.completed === true)
            ];
        default:
          return state;
      }
}