<template>
<div class="login-form">
    <h3 class="login-form__title">Авторизация</h3>
    <form action="#" class="login-form__body" @submit.prevent="onSubmit">
        <!-- Username -->
        <div class="form-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Логин</div>
                <input
                    type="text"
                    class="form-control"
                    id="username"
                    v-model="userdata.username"
                />
            </div>
            <p v-show="errors.username" class="error"> {{ errors.username }}</p>
        </div>
        <!-- Password -->
        <div class="form-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Пароль</div>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="userdata.password"
                />
            </div>
            <p v-show="errors.password" class="error"> {{ errors.password }}</p>
        </div>
        <button
            type="submit"
            class="btn btn-primary"
        >
            Войти
        </button>
        <p v-show="loginError" class="error">{{ loginError }}</p>
    </form>
</div>
</template>

<script>
const MUST_BE_FILLED = "Необходимо заполнить поле"
const INVALID_VALUE = "Неверное значение поля"
const INVALID_USERNAME = "Неверное имя пользователя или пароль"

export default {
    name: 'LoginForm',
    data () {
        return {
            userdata: {
                username: '',
                password: '',
            },
            errors: {
                username: '',
                password: '',
            },
            hasError: true,
            loginError: ''
        }
    },
    methods: {
        onSubmit () {
            if (!this.validateForm()) return

            this.login()
        },
        async login () {
            this.loginError = ''
            const credentials = {
                username: this.userdata.username,
                password: this.userdata.password
            }
            try {
                await this.$auth.loginWith('local', { data: credentials })
                this.$router.push({ path: '/user/account/' })
            } catch (e) {
                this.loginError = INVALID_USERNAME
                this.$router.push({ path: '/auth/login' })
            }
        },
        validateForm () {
            this.hasError = false

            this.validateUsername()
            this.validatePassword()

            return this.hasError ? false : true
        },
        validateUsername () {
            this.errors.username = ''

            if (this.userdata.username === '') {
                this.errors.username = MUST_BE_FILLED
                this.hasError = true
                return
            }

            const pattern = /^[a-z0-9][a-z0-9-_]+[a-z0-9]$/
            if (!pattern.test(this.userdata.username)) {
                this.errors.username = INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validatePassword () {
            this.errors.password = ''

            if (this.userdata.password === '') {
                this.errors.password = MUST_BE_FILLED
                this.hasError = true
                return
            }
        },
    },
}
</script>

<style lang="scss">
.login-form {
    width: 40%;
    padding: 0 30px 20px 30px;
    border: 1px solid #d5dddf;
    border-radius: 15px;
    text-align: left;
    background-color: #eee;
    &__title {
        padding: 10px 0;
        background-color: #ccc;
        text-align: center;
        border-radius: 0 0 15px 15px;
    }
    &__body {
        font-size: 14px;
        .form-group {
            margin-bottom: 25px;
            position: relative;
            .input-group-text {
                width: 350px;
                font-size: 14px;
            }
            input {
                font-size: 14px;
            }
        }
        .error {
            position: absolute;
            font-size: 12px;
            color: red;
        }
    }
}
</style>
