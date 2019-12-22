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
    </h3>
        <div class="user-account__body">
        ------------------- loggedIn ----------------<br />
        {{ loggedIn }}<br />
        ------------------- user ----------------<br />
        <pre>
            {{ user }}
        </pre>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'UserAccount',
    data () {
        return {
        }
    },
    computed: {
        ...mapState('auth', ['loggedIn', 'user'])
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
        }
    }
}
</style>
