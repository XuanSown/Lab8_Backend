<script>
export default {
  name: 'App',
};
</script>

<template>
    <div id="app">
        <nav>
            <router-link :to="{name: 'Home'}">Trang chủ</router-link> |
            <router-link :to="{name: 'BlogList'}">Danh sách Blog</router-link> |
            <router-link :to="{name: 'UserProfile'}">Hồ sơ (Profile)</router-link> |
            <router-link to="/me">Hồ sơ (me)</router-link> |
            <router-link :to="{name: 'Dashboard'}">Dashboard (Cần Login)</router-link> |
        </nav>
        <router-view></router-view>
        <footer>
            <p>&copy; 2023 MyBlog. All rights reserved.</p>
        </footer>
    </div>
</template>

<style scoped></style>
