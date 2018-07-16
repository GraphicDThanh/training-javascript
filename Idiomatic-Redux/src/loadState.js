export const getState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

export const setState = (state) => {
  console.log('testing setState 1', state);
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log('ERROR SET STATE', e)
  }
  console.log('testing setState 2');
}