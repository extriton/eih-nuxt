<template>
<div class="register-form">
    <h3 class="register-form__title">Регистрация</h3>
    <form action="#" class="register-form__body" @submit.prevent="onSubmit">
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
        <!-- Email -->
        <div class="form-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Email</div>
                <input
                    type="text"
                    class="form-control"
                    id="email"
                    v-model="userdata.email"
                />
            </div>
            <p v-show="errors.email" class="error"> {{ errors.email }}</p>
        </div>
        <!-- First Name -->
        <div class="form-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Имя</div>
                <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    v-model="userdata.firstName"
                />
            </div>
            <p v-show="errors.firstName" class="error"> {{ errors.firstName }}</p>
        </div>
        <!-- Second Name -->
        <div class="form-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Фамилия</div>
                <input
                    type="text"
                    class="form-control"
                    id="secondName"
                    v-model="userdata.secondName"
                />
            </div>
            <p v-show="errors.secondName" class="error"> {{ errors.secondName }}</p>
        </div>
        <!-- Phone -->
        <div class="form-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Номер телефона</div>
                <input
                    type="text"
                    class="form-control"
                    id="phone"
                    v-model="userdata.phone"
                />
            </div>
            <p v-show="errors.phone" class="error"> {{ errors.phone }}</p>
        </div>
        <!-- Country code -->
        <div class="form-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Код страны</div>
                <input
                    type="text"
                    class="form-control"
                    id="country"
                    v-model="userdata.country"
                    maxlength="2"
                />
            </div>
            <p v-show="errors.country" class="error"> {{ errors.country }}</p>
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
        <!-- Password repeat -->
        <div class="form-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Пароль ещё раз</div>
                <input
                    type="password"
                    class="form-control"
                    id="passwordRepeat"
                    v-model="userdata.passwordRepeat"
                />
            </div>
            <p v-show="errors.passwordRepeat" class="error"> {{ errors.passwordRepeat }}</p>
        </div>
        <!-- Finance password -->
        <div class="form-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Финансовый пароль</div>
                <input
                    type="text"
                    class="form-control"
                    id="finPassword"
                    v-model="userdata.finPassword"
                />
            </div>
            <p v-show="errors.finPassword" class="error"> {{ errors.finPassword }}</p>
        </div>
        <!-- Skype -->
        <div class="form-group">
            <div class="input-group-prepend">
                <div class="input-group-text">Skype</div>
                <input
                    type="text"
                    class="form-control"
                    id="skype"
                    v-model="userdata.skype"
                />
            </div>
            <p v-show="errors.skype" class="error"> {{ errors.skype }}</p>
        </div>
        <button
            type="submit"
            class="btn btn-primary"
        >
            Зарегистрироваться
        </button>
         или 
        <router-link to="/auth/login" class="btn btn-outline-secondary btn-sm">Войти</router-link>
        <p v-show="registerError" class="error">{{ registerError }}</p>
    </form>
</div>
</template>

<script>
import errors from '~/utils/errors'
import axios from 'axios'

export default {
    name: 'RegisterForm',
    data () {
        return {
            userdata: {
                username: '',
                email: '',
                firstName: '',
                secondName: '',
                phone: '',
                country: 'ru',
                password: '',
                passwordRepeat: '',
                finPassword: '',
                skype: ''
            },
            errors: {
                username: '',
                email: '',
                firstName: '',
                secondName: '',
                phone: '',
                country: '',
                password: '',
                passwordRepeat: '',
                finPassword: '',
                skype: ''
            },
            hasError: true,
            registerError: ''
        }
    },
    methods: {
        async onSubmit () {
            if (!this.validateForm()) return

            this.registerError = ''
            
            try {
                const result = await axios.post('http://localhost:3000/user/register', this.userdata)
            } catch (e) {
                this.registerError = errors.REGISTER_ERROR
                this.$router.push({ path: '/user/register' })
                return
            }
            
            this.$router.push({ path: '/auth/login' })
            
        },
        validateForm () {
            this.hasError = false

            this.validateUsername()
            this.validateEmail()
            this.validateFirstName()
            this.validateSecondName()
            this.validatePhone()
            this.validateCountry()
            this.validatePassword()
            this.validatePasswordRepeat()
            this.validateFinPassword()
            this.validateSkype()

            return this.hasError ? false : true
        },
        validateUsername () {
            this.errors.username = ''

            if (this.userdata.username === '') {
                this.errors.username = errors.MUST_BE_FILLED
                this.hasError = true
                return
            }

            const pattern = /^[a-z0-9][a-z0-9-_]+[a-z0-9]$/
            if (!pattern.test(this.userdata.username)) {
                this.errors.username = errors.INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validateEmail () {
            this.errors.email = ''

            if (this.userdata.email === '') {
                this.errors.email = errors.MUST_BE_FILLED
                this.hasError = true
                return
            }

            const pattern = /^[a-z0-9][a-z0-9-_]+[a-z0-9]$/
            if (!pattern.test(this.userdata.email)) {
                this.errors.email = errors.INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validateFirstName () {
            this.errors.firstName = ''

            if (this.userdata.firstName === '') {
                this.errors.firstName = errors.MUST_BE_FILLED
                this.hasError = true
                return
            }

            const pattern = /^[а-яА-ЯёЁa-zA-Z0-9]+$/
            if (!pattern.test(this.userdata.firstName)) {
                this.errors.firstName = errors.INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validateSecondName () {
            this.errors.secondName = ''

            if (this.userdata.secondName === '') {
                this.errors.secondName = errors.MUST_BE_FILLED
                this.hasError = true
                return
            }

            const pattern = /^[а-яА-ЯёЁa-zA-Z0-9]+$/
            if (!pattern.test(this.userdata.secondName)) {
                this.errors.secondName = errors.INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validatePhone () {
            this.errors.phone = ''

            if (this.userdata.phone === '') {
                this.errors.phone = errors.MUST_BE_FILLED
                this.hasError = true
                return
            }

            const pattern = /^(\+)\d{13,14}$/
            if (!pattern.test(this.userdata.phone)) {
                this.errors.phone = errors.INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validateCountry () {
            this.errors.country = ''

            if (this.userdata.country === '') {
                this.errors.country = errors.MUST_BE_FILLED
                this.hasError = true
                return
            }

            this.userdata.country = this.userdata.country.toLowerCase()
            const pattern = /^[a-z]{2}$/
            if (!pattern.test(this.userdata.country)) {
                this.errors.country = errors.INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validatePassword () {
            this.errors.password = ''

            if (this.userdata.password === '') {
                this.errors.password = errors.MUST_BE_FILLED
                this.hasError = true
                return
            }
        },
        validatePasswordRepeat () {
            this.errors.passwordRepeat = ''

            if (this.userdata.passwordRepeat === '') {
                this.errors.passwordRepeat = errors.MUST_BE_FILLED
                this.hasError = true
                return
            }

            if (this.userdata.password !== this.userdata.passwordRepeat) {
                this.errors.passwordRepeat = errors.PASSWORDS_NOT_MATCH
                this.hasError = true
                return
            }
        },
        validateFinPassword () {
            this.errors.finPassword = ''

            if (this.userdata.finPassword === '') {
                this.errors.finPassword = errors.MUST_BE_FILLED
                this.hasError = true
                return
            }
        },
        validateSkype () {
            this.errors.skype = ''

            if (this.userdata.skype !== '') {
                const pattern = /^[a-z0-9-_]+$/
                if (!pattern.test(this.userdata.skype)) {
                    this.errors.skype = errors.INVALID_VALUE
                    this.hasError = true
                    return
                }
            }
        }
    },
}
</script>

<style lang="scss">
.register-form {
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
