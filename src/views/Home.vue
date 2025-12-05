<template>
    <div class="home">
        <h1>Chào mừng đến với MyBlog</h1>
        <nav>
            <router-link :to="{name: 'Home'}">Trang chủ</router-link>
            <router-link :to="{name: 'BlogList'}">Danh sách Blog</router-link>
            <router-link :to="{name}"></router-link>
        </nav>
    </div>
</template>