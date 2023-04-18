export const useBlogStore = defineStore({
  id: "blog",

  state: () => ({
    number: 1,
  }),

  getters: {},

  actions: {
    fetch() {
      return new Promise((resolve, reject) => {
        //
      });
    },

    decrease() {
      this.number +=1;
    },
  },
});
