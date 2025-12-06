<template>
  <div>
    <h1>Hồ sơ người dùng</h1>
    <nav>
      <router-link :to="{ name: 'UserProfileInfo' }">Thông tin cá nhân</router-link> |
      <router-link :to="{ name: 'UserProfileSettings' }">Cài đặt</router-link>
    </nav>
    <hr />
    <router-view></router-view>
  </div>
</template>