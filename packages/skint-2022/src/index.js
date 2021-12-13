import Root from "./theme";

export default {
  name: "skint-2022",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isUrlVisible: true
    }
  },
  actions: {
    theme: {
      toggleUrl: ({state}) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      }
    }
  }
};
