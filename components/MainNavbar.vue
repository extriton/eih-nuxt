<template>
  <div class="main-navbar">
    <router-link to="/auth/login" class="btn btn-outline-secondary btn-sm">Войти</router-link>
    <router-link to="/auth/register" class="btn btn-info btn-sm">Регистрация</router-link>
  </div>
</template>

<script>
export default {
  name: 'MainNavbar'
}
</script>

<style lang="scss">
.main-navbar {
  width: 80%;
  margin: 20px auto 0 auto;
  padding: 15px 0;
  border-top: 1px solid #d5dddf;
  border-bottom: 1px solid #d5dddf;
  text-align: right;
}
</style>
