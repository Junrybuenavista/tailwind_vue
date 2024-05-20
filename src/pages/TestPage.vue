<template>
    <div :class="{ 'fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50': isOpen }">
      <div class="bg-white p-8 rounded-lg">
        
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  };
  </script>