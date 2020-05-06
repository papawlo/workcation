<template>
  <div class="relative">
    <button
      type="button"
      class="block focus:outline-none"
      @click="toggle" 
      @focus="buttonHasFocus = true"
      @blur="buttonHasFocus = false"
    >
      <slot name="trigger" :hasFocus="buttonHasFocus" :isOpen="isOpen"></slot>
    </button>
    <div :class="[isOpen ? 'block' : 'hidden']">
      <button
        type="button"
        @click="isOpen = false"
        class="z-30 block fixed opacity-0 inset-0 w-full h-full cursor-default"
      ></button>
      <div class="absolute z-40 right-0">
        <slot name="dropdown"></slot>
      </div>
      <!-- dropdown -->
      <!-- <div
        class="mt-5 bg-white w-48 rounded-lg absolute mt-12 top-0 right-0 py-2 shadow-lg z-10"
      >
        <a
          href="#account"
          class="block text-gray-400 hover:text-white hover:bg-indigo-500 text-gray-800 px-4 py-2"
          rel="noopener noreferrer"
        >Account settings</a>
        <a
          href="#support"
          class="mt-3 block text-gray-400 hover:text-white hover:bg-indigo-500 text-gray-800 px-4 py-2 mt-0"
          rel="noopener noreferrer"
        >Suport</a>
        <a
          href="#sign-out"
          class="mt-3 block text-gray-400 hover:text-white hover:bg-indigo-500 text-gray-800 px-4 py-2 mt-0"
          rel="noopener noreferrer"
        >Sign out</a>
      </div>-->
      <!-- end dropdown -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {},
  data() {
    return {
      isOpen: false,
      buttonHasFocus: false
    };
  },
  mounted() {
    const onEscape = e => {
      if (!this.isOpen || e.key !== "Escape") {
        return;
      }
      this.isOpen = false;
    };
    document.addEventListener("keydown", onEscape);
    this.$on("hook:destroyed", () => {
      document.removeEventListener("keydown", onEscape);
    });
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style>
</style>