function useStates(initialState) {
  let state = initialState;

  function updateState(newState) {
    state = newState;
  }

  function getState() {
    return state;
  }

  return [getState, updateState];
}


const [count, setCount] = useStates(0);

console.log(count());

setCount(count() + 1);

console.log(count());