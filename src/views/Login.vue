<template>
    <div>
        <h1>Đăng nhập</h1>
        <button @click="login">Đăng nhập ngay</button>
    </div>
</template>

<script>
export default {
    methods: {
        login(){
            localStorage.setItem("isAuthenticated", "true");

            // Chuyển hướng đến trang Dashboard sau khi đăng nhập
            this.$router.push({ name: 'Dashboard' });
        },
    },
};
</script>