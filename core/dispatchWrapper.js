export default function($actions) {
  const { dispatch } = $actions.VM.store
  const setActionState = (action, state) => {
    $actions.setState(action, state)
  }

  return async function(type, payload) {
    setActionState(type, $actions.STATES.PENDING)
    try {
      const result = await dispatch(type, payload)
      setActionState(type, $actions.STATES.DONE)
      return result
    } catch (error) {
      // Complete action on unhandled errors
      setActionState(type, $actions.STATES.DONE)
      throw error
    }
  }
}
