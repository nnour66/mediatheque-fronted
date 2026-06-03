<script lang="ts" setup></script>

<template>
  <nav>
    <menu>
      <li>
        <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'Contact' }">Contact</RouterLink>
      </li>
    </menu>
  </nav>
  <RouterView />
</template>

<style scoped></style>
