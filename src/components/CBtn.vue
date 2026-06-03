<template>
  <button>
    <slot />
  </button>
</template>

<style lang="css" scoped>
button {
  background-color: oklch(0.2 1 120);
  border: none;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
}
</style>
