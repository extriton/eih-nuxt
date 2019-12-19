<template>
<div class="login-form">
    <h3 class="login-form__title">Регистрация</h3>
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
            Добавить
        </button>
    </form>
</div>
</template>

<script>
const MUST_BE_FILLED = "Необходимо заполнить поле"
const INVALID_VALUE = "Неверное значение поля"
const PASSWORDS_NOT_MATCH = "Пароли не совпадают"

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
            hasError: true
        }
    },
    methods: {
        onSubmit () {
            if (!this.validateForm()) return
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
        validateEmail () {
            this.errors.email = ''

            if (this.userdata.email === '') {
                this.errors.email = MUST_BE_FILLED
                this.hasError = true
                return
            }

            const pattern = /^[a-z0-9][a-z0-9-_]+[a-z0-9]$/
            if (!pattern.test(this.userdata.email)) {
                this.errors.email = INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validateFirstName () {
            this.errors.firstName = ''

            if (this.userdata.firstName === '') {
                this.errors.firstName = MUST_BE_FILLED
                this.hasError = true
                return
            }

            const pattern = /^[а-яА-ЯёЁa-zA-Z0-9]+$/
            if (!pattern.test(this.userdata.firstName)) {
                this.errors.firstName = INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validateSecondName () {
            this.errors.secondName = ''

            if (this.userdata.secondName === '') {
                this.errors.secondName = MUST_BE_FILLED
                this.hasError = true
                return
            }

            const pattern = /^[а-яА-ЯёЁa-zA-Z0-9]+$/
            if (!pattern.test(this.userdata.secondName)) {
                this.errors.secondName = INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validatePhone () {
            this.errors.phone = ''

            if (this.userdata.phone === '') {
                this.errors.phone = MUST_BE_FILLED
                this.hasError = true
                return
            }

            const pattern = /^(\+)\d{13,14}$/
            if (!pattern.test(this.userdata.phone)) {
                this.errors.phone = INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validateCountry () {
            this.errors.country = ''

            if (this.userdata.country === '') {
                this.errors.country = MUST_BE_FILLED
                this.hasError = true
                return
            }

            const pattern = /^[a-z]{2}$/
            if (!pattern.test(this.userdata.country)) {
                this.errors.country = INVALID_VALUE
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
        validatePasswordRepeat () {
            this.errors.passwordRepeat = ''

            if (this.userdata.passwordRepeat === '') {
                this.errors.passwordRepeat = MUST_BE_FILLED
                this.hasError = true
                return
            }

            if (this.userdata.password !== this.userdata.passwordRepeat) {
                this.errors.passwordRepeat = PASSWORDS_NOT_MATCH
                this.hasError = true
                return
            }
        },
        validateFinPassword () {
            this.errors.finPassword = ''

            if (this.userdata.finPassword === '') {
                this.errors.finPassword = MUST_BE_FILLED
                this.hasError = true
                return
            }
        },
        validateSkype () {
            this.errors.skype = ''

            if (this.userdata.skype !== '') {
                const pattern = /^[a-z0-9-_]+$/
                if (!pattern.test(this.userdata.skype)) {
                    this.errors.skype = INVALID_VALUE
                    this.hasError = true
                    return
                }
            }
        }
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
