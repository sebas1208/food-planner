import { defineStore } from "pinia";
import { darkModeKey, basic } from "@/assets/styles/styles";

const createStyleStore = (style: typeof basic) => Object.keys(style)
  .reduce((prev, curr) => ({ ...prev, [`${curr}Style`]: basic[(<keyof typeof basic>curr)] }), {})

export const useStyleStore = defineStore("style", {
  state: () => ({
    ...createStyleStore(basic),

    /* Dark mode */
    darkMode: false,
  }),
  actions: {
    setDarkMode(payload = null) {
      this.darkMode = payload !== null ? payload : !this.darkMode;

      if (typeof localStorage !== "undefined") {
        localStorage.setItem(darkModeKey, this.darkMode ? "1" : "0");
      }

      if (typeof document !== "undefined") {
        document.body.classList[this.darkMode ? "add" : "remove"](
          "dark-scrollbars"
        );

        document.documentElement.classList[this.darkMode ? "add" : "remove"](
          "dark-scrollbars-compat"
        );
      }
    },
  },
});
