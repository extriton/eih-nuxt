<template>
<div class="change-password-form">
    <h3 class="change-password-form__title">Смена пароля</h3>
    <form action="#" class="change-password-form__body" @submit.prevent="onSubmit">
        <!-- Old password -->
        <div class="form-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Текущий пароль</div>
                <input
                    type="password"
                    class="form-control"
                    id="oldPassword"
                    v-model="userdata.oldPassword"
                />
            </div>
            <p v-show="errors.oldPassword" class="error"> {{ errors.oldPassword }}</p>
        </div>
        <!-- New password -->
        <div class="form-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Новый пароль</div>
                <input
                    type="password"
                    class="form-control"
                    id="newPassword"
                    v-model="userdata.newPassword"
                />
            </div>
            <p v-show="errors.newPassword" class="error"> {{ errors.newPassword }}</p>
        </div>
        <!-- Password repeat -->
        <div class="form-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Новый пароль ещё раз</div>
                <input
                    type="password"
                    class="form-control"
                    id="newPasswordRepeat"
                    v-model="userdata.newPasswordRepeat"
                />
            </div>
            <p v-show="errors.newPasswordRepeat" class="error"> {{ errors.newPasswordRepeat }}</p>
        </div>
        <button
            type="submit"
            class="btn btn-primary"
        >
            Сменить пароль
        </button>
        <p v-show="changePasswordError" class="error">{{ changePasswordError }}</p>
    </form>
</div>
</template>

<script>
import errors from '~/utils/errors'
import axios from 'axios'

export default {
    name: 'UserChangePassword',
    data () {
        return {
            userdata: {
                token: '',
                oldPassword: '',
                nwePassword: '',
                newPasswordRepeat: '',
                type: 0
            },
            errors: {
                oldPassword: '',
                nwePassword: '',
                newPasswordRepeat: ''
            },
            hasError: true,
            changePasswordError: ''
        }
    },
    methods: {
        async onSubmit () {
            if (!this.validateForm()) return

            this.registerError = ''
            
            try {
                const result = await axios.post('http://localhost:3000/user/changePassword', this.userdata)
            } catch (e) {
                this.registerError = errors.USER_CHANGE_PASSWORD_ERROR
                return
            }
            
            await this.$auth.logout()
            this.$router.push({ path: '/auth/login' })
            
        },
        validateForm () {
            this.hasError = false

            this.validateOldPassword()
            this.validateNewPassword()
            this.validateNewPasswordRepeat()

            return this.hasError ? false : true
        },
        validateOldPassword () {
            this.errors.oldPassword = ''

            if (this.userdata.oldPassword === '') {
                this.errors.oldPassword = errors.MUST_BE_FILLED
                this.hasError = true
                return
            }
        },
        validateNewPassword () {
            this.errors.newPassword = ''

            if (this.userdata.newPassword === '') {
                this.errors.newPassword = errors.MUST_BE_FILLED
                this.hasError = true
                return
            }
        },
        validateNewPasswordRepeat () {
            this.errors.newPasswordRepeat = ''

            if (this.userdata.newPasswordRepeat === '') {
                this.errors.newPasswordRepeat = errors.MUST_BE_FILLED
                this.hasError = true
                return
            }

            if (this.userdata.newPassword !== this.userdata.newPasswordRepeat) {
                this.errors.newPasswordRepeat = errors.PASSWORDS_NOT_MATCH
                this.hasError = true
                return
            }
        }
    },
    mounted() {
        if (localStorage['auth._token.local']) {
            this.userdata.token = localStorage['auth._token.local'].split(' ')[1]
        }
    }
}
</script>

<style lang="scss">
.change-password-form {
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
