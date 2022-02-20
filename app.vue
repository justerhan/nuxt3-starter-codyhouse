<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
export default {
  head: {
    // Add codyhouse global scripts...
    script: [
      { src: "/js/codyhouse/pe.js" },
      { src: "/js/codyhouse/util.js", body: true }
    ],
  },
};
</script>
