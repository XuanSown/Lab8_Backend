<template>
    <div class="home">
        <h1>Chào mừng đến với MyBlog</h1>
        <nav>
            <router-link :to="{name: 'Home'}">Trang chủ</router-link>
            <router-link :to="{name: 'BlogList'}">Danh sách Blog</router-link>
            <router-link :to="{name: 'UserProfile'}">Hồ sơ (Profile)</router-link>
            <router-link to="/me">Hồ sơ (me)</router-link>
            <router-link :to="{name: 'Dashboard'}">Dashboard (Cần Login)</router-link>
        </nav>
    </div>
</template>