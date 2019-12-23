<template>
<div class="user-account">
    <h3 class="user-account__title">
        Аккаунт пользователя
        <button
            type="button"
            class="btn btn-outline-info"
            @click="logout"
        >
            Выйти
        </button>
        <button
            type="button"
            class="btn btn-outline-info"
        >
            Изменить пароль
        </button>
    </h3>
    <user-change-form />
    <hr />
    <user-partners-list />
</div>
</template>

<script>
import UserChangeForm from '~/components/user/ChangeForm.vue'
import UserPartnersList from '~/components/user/PartnersList.vue'

export default {
    name: 'UserAccount',
    components: {
        UserChangeForm,
        UserPartnersList
    },
    methods: {
        async logout () {
            await this.$auth.logout()
            this.$router.push('/auth/login')
        }
    }
}
</script>

<style lang="scss">
.user-account {
    display: block;
    width: 100%;
    padding: 20px 30px;
    text-align: left;
    background-color: #eee;
    &__title {
        padding: 10px;
        background-color: #ccc;
        text-align: center;
        button {
            float: right;
            margin-right: 10px;
        }
    }
}
</style>
