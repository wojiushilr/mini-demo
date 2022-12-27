<template>
  <header class="header">
    <h1 class="title">Any Todo</h1>
    <ul>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/todos">Todo一覧</nuxt-link>
      </li>
    </ul>
  </header>
</template>


<script>
export default {
  name: "AppHeader"
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dotted rgb(124, 109, 109);
}
.header .title {
  font-size: 3rem;
  color: #7b95c8;
}
.header ul {
  display: flex;
}
.header a {
  display: inline-block;
  background: rgb(255, 255, 255);
  color: rgb(7, 6, 6);
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
}
</style>