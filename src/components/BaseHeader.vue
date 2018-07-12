<template>
  <header>
    <router-link to="/">
      <img src="@/assets/imgs/logo.svg">
    </router-link>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  width: 100vw;
  padding: 40px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 26px;
    height: 26px;
    &:hover {
      animation-name: pulse;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }

  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }

  .pulse {
    animation-name: pulse;
  }
}
</style>
