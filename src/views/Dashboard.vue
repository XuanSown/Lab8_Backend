<template>
    <div>
        <h1>Dashboard</h1>
        <p>Chào mừng bạn!</p>
        <button @click="logout">Đăng xuất</button>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem("isAuthenticated");
            alert("Bạn đã đăng xuất thành công!");
            this.$router.push({ name: "Login" });
        },
    },
};
</script>