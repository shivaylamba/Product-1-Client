export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("xtreme-worker-state");
    if (!serializedState) {
      return null;
    }
    const state = JSON.parse(serializedState);
    return state;
  } catch (error) {
    return null;
  }
};

export const saveState = state => {
  if (state && typeof window !== "undefined") {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("xtreme-worker-state", serializedState);
    } catch (error) {
      console.log(error);
    }
  }
};
