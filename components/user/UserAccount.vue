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
    <!-- User change form -->
    <form action="#" class="user-account__body" @submit.prevent="onSubmit">
        <!-- Username -->
        <div class="form-group">
            <label for="username">Логин</label>
            <input
                type="text"
                class="form-control"
                id="username"
                v-model="userdata.username"
            />
            <p v-show="errors.username" class="error"> {{ errors.username }}</p>
        </div>
        <!-- Sponsor -->
        <div class="form-group">
            <label for="sponsor">Спонсор</label>
            <input
                type="text"
                class="form-control"
                id="sponsor"
                v-model="userdata.sponsor"
            />
            <p v-show="errors.sponsor" class="error"> {{ errors.sponsor }}</p>
        </div>
        <!-- Email -->
        <div class="form-group">
            <label for="email">Email</label>
            <input
                type="text"
                class="form-control"
                id="email"
                v-model="userdata.email"
            />
            <p v-show="errors.email" class="error"> {{ errors.email }}</p>
        </div>
        <!-- First name -->
        <div class="form-group">
            <label for="firstName">Имя</label>
            <input
                type="text"
                class="form-control"
                id="firstName"
                v-model="userdata.firstName"
            />
            <p v-show="errors.firstName" class="error"> {{ errors.firstName }}</p>
        </div>
        <!-- Second name -->
        <div class="form-group">
            <label for="secondName">Фамилия</label>
            <input
                type="text"
                class="form-control"
                id="secondName"
                v-model="userdata.secondName"
            />
            <p v-show="errors.secondName" class="error"> {{ errors.secondName }}</p>
        </div>
        <!-- Birthday -->
        <div class="form-group">
            <label for="birthday">День рождения</label>
            <input
                type="date"
                class="form-control"
                id="birthday"
                v-model="userdata.birthday"
            />
        </div>
        <!-- Phone number -->
        <div class="form-group">
            <label for="phoneNumber">Номер телефона</label>
            <input
                type="text"
                class="form-control"
                id="phoneNumber"
                v-model="userdata.phoneNumber"
            />
            <p v-show="errors.phoneNumber" class="error"> {{ errors.phoneNumber }}</p>
        </div>
        <!-- Phone number 2 -->
        <div class="form-group">
            <label for="phoneNumber2">Номер телефона 2</label>
            <input
                type="text"
                class="form-control"
                id="phoneNumber2"
                v-model="userdata.phoneNumber2"
            />
            <p v-show="errors.phoneNumber2" class="error"> {{ errors.phoneNumber2 }}</p>
        </div>
        <!-- Skype -->
        <div class="form-group">
            <label for="skype">Скайп</label>
            <input
                type="text"
                class="form-control"
                id="skype"
                v-model="userdata.skype"
            />
            <p v-show="errors.skype" class="error"> {{ errors.skype }}</p>
        </div>
        <!-- Country -->
        <div class="form-group">
            <label for="country">Страна</label>
            <input
                type="text"
                class="form-control"
                id="country"
                v-model="userdata.country"
            />
            <p v-show="errors.country" class="error"> {{ errors.country }}</p>
        </div>
        <!-- State -->
        <div class="form-group">
            <label for="state">Регион / Область / Штат / Край</label>
            <input
                type="text"
                class="form-control"
                id="state"
                v-model="userdata.state"
            />
        </div>
        <!-- City -->
        <div class="form-group">
            <label for="city">Город</label>
            <input
                type="text"
                class="form-control"
                id="city"
                v-model="userdata.city"
            />
        </div>
        <!-- Address -->
        <div class="form-group">
            <label for="address">Адрес</label>
            <input
                type="text"
                class="form-control"
                id="address"
                v-model="userdata.address"
            />
        </div>
        <!-- ZIP code -->
        <div class="form-group">
            <label for="zipCode">Почтовый индекс</label>
            <input
                type="text"
                class="form-control"
                id="zipCode"
                v-model="userdata.zipCode"
            />
        </div>
        <!-- Site -->
        <div class="form-group">
            <label for="site">Сайт</label>
            <input
                type="text"
                class="form-control"
                id="site"
                v-model="userdata.site"
            />
        </div>
        <!-- Odnoklassniki -->
        <div class="form-group">
            <label for="odnoklassniki">Одноклассники</label>
            <input
                type="text"
                class="form-control"
                id="odnoklassniki"
                v-model="userdata.odnoklassniki"
            />
        </div>
        <!-- Vk -->
        <div class="form-group">
            <label for="vk">Вконтакте</label>
            <input
                type="text"
                class="form-control"
                id="vk"
                v-model="userdata.vk"
            />
        </div>
        <!-- Fb -->
        <div class="form-group">
            <label for="fb">Facebook</label>
            <input
                type="text"
                class="form-control"
                id="fb"
                v-model="userdata.fb"
            />
        </div>
        <!-- Youtube -->
        <div class="form-group">
            <label for="youtube">Youtube</label>
            <input
                type="text"
                class="form-control"
                id="youtube"
                v-model="userdata.youtube"
            />
        </div>
        <!-- Auto Extension BS -->
        <div class="form-check">
            <input
                type="checkbox"
                class="form-check-input"
                id="autoExtensionBS"
                v-model="userdata.autoExtensionBS"
            />
            <label for="autoExtensionBS" class="form-check-label">Авто продление</label>
        </div>
        <!-- Show mobile -->
        <div class="form-check">
            <input
                type="checkbox"
                class="form-check-input"
                id="showMobile"
                v-model="userdata.showMobile"
            />
            <label for="showMobile" class="form-check-label">Показывать мобильный</label>
        </div>
        <!-- Show Email -->
        <div class="form-check">
            <input
                type="checkbox"
                class="form-check-input"
                id="showEmail"
                v-model="userdata.showEmail"
            />
            <label for="showEmail" class="form-check-label">Показывать Email</label>
        </div>
        <!-- Show name -->
        <div class="form-check">
            <input
                type="checkbox"
                class="form-check-input"
                id="showName"
                v-model="userdata.showName"
            />
            <label for="showName" class="form-check-label">Показывать имя</label>
        </div>
        <!-- Delivery Email -->
        <div class="form-check">
            <input
                type="checkbox"
                class="form-check-input"
                id="deliveryEmail"
                v-model="userdata.deliveryEmail"
            />
            <label for="deliveryEmail" class="form-check-label">Рассылка Email</label>
        </div>
        <!-- Delivery SMS -->
        <div class="form-check">
            <input
                type="checkbox"
                class="form-check-input"
                id="deliverySMS"
                v-model="userdata.deliverySMS"
            />
            <label for="deliverySMS" class="form-check-label">Рассылка SMS</label>
        </div>
        <button
            type="submit"
            class="btn btn-primary"
        >
            Сохранить
        </button>
        <p v-show="userSaveError" class="error">{{ userSaveError }}</p>
    </form>
</div>
</template>

<script>
import { mapState } from 'vuex'
import errors from '~/utils/errors'
import axios from 'axios'

export default {
    name: 'UserAccount',
    data () {
        return {
            userdata: {
                token: '',
                username: '',
                sponsor: '',
                email: '',
                firstName: '',
                secondName: '',
                birthday: (new Date()).toISOString().substr(0, 10),
                phoneNumber: '',
                phoneNumber2: '',
                skype: '',
                country: 'ru',
                state: '',
                city: '',
                address: '',
                zipCode: '',
                site: '',
                odnoklassniki: '',
                vk: '',
                fb: '',
                autoExtensionBS: 0,
                showMobile: 0,
                showEmail: 0,
                showName: 0,
                deliveryEmail: 0,
                deliverySMS: 0
            },
            errors: {
                username: '',
                sponsor: '',
                email: '',
                firstName: '',
                secondName: '',
                phoneNumber: '',
                phoneNumber2: '',
                skype: '',
                country: '',
            },
            hasError: true,
            userSaveError: ''
        }
    },
    computed: {
        ...mapState('auth', ['loggedIn', 'user'])
    },
    methods: {
        async logout () {
            await this.$auth.logout()
            this.$router.push('/auth/login')
        },
        async onSubmit () {
            if (!this.validateForm()) return

            // Delete blank fields
            const userdata = Object.assign({}, this.userdata)
            for (let key in userdata)
                if (userdata[key] === '') delete userdata[key]
            
            // Prepare birthday field
            userdata.birthday = new Date(userdata.birthday)

            this.userSaveError = ''
            
            try {
                const result = await axios.put('http://localhost:3000/user/change', userdata)
            } catch (e) {
                this.userSaveError = errors.USER_SAVE_ERROR
            }
        },
        validateForm () {
            this.hasError = false

            this.validateUsername()
            this.validateSponsor()
            this.validateEmail()
            this.validateFirstName()
            this.validateSecondName()
            this.validatePhoneNumber()
            this.validatePhoneNumber2()
            this.validateSkype()
            this.validateCountry()

           
            return this.hasError ? false : true
        },
        validateUsername () {
            this.errors.username = ''

            if (this.userdata.username === '') return

            const pattern = /^[a-z0-9][a-z0-9-_]+[a-z0-9]$/
            if (!pattern.test(this.userdata.username)) {
                this.errors.username = errors.INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validateSponsor () {
            this.errors.sponsor = ''

            if (this.userdata.sponsor === '') return

            const pattern = /^[a-z0-9][a-z0-9-_]+[a-z0-9]$/
            if (!pattern.test(this.userdata.sponsor)) {
                this.errors.username = errors.INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validateEmail () {
            this.errors.email = ''

            if (this.userdata.email === '') return
            /*
            const pattern = /^[a-z0-9][a-z0-9-_]+[a-z0-9]$/
            if (!pattern.test(this.userdata.email)) {
                this.errors.email = errors.INVALID_VALUE
                this.hasError = true
                return
            }
            */
        },
        validateFirstName () {
            this.errors.firstName = ''

            if (this.userdata.firstName === '') return

            const pattern = /^[а-яА-ЯёЁa-zA-Z0-9]+$/
            if (!pattern.test(this.userdata.firstName)) {
                this.errors.firstName = errors.INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validateSecondName () {
            this.errors.secondName = ''

            if (this.userdata.secondName === '') return

            const pattern = /^[а-яА-ЯёЁa-zA-Z0-9]+$/
            if (!pattern.test(this.userdata.secondName)) {
                this.errors.secondName = errors.INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validatePhoneNumber () {
            this.errors.phoneNumber = ''

            if (this.userdata.phoneNumber === '') return

            const pattern = /^(\+)\d{13,14}$/
            if (!pattern.test(this.userdata.phoneNumber)) {
                this.errors.phoneNumber = errors.INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validatePhoneNumber2 () {
            this.errors.phoneNumber2 = ''

            if (this.userdata.phoneNumber2 === '') return

            const pattern = /^(\+)\d{13,14}$/
            if (!pattern.test(this.userdata.phoneNumber2)) {
                this.errors.phoneNumber2 = errors.INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validateSkype () {
            this.errors.skype = ''

            if (this.userdata.skype === '') return
            
            const pattern = /^[a-z0-9-_]+$/
            if (!pattern.test(this.userdata.skype)) {
                this.errors.skype = errors.INVALID_VALUE
                this.hasError = true
                return
            }
        },
        validateCountry () {
            this.errors.country = ''

            if (this.userdata.country === '') return

            this.userdata.country = this.userdata.country.toUpperCase()
            const pattern = /^[A-Z]{2}$/
            if (!pattern.test(this.userdata.country)) {
                this.errors.country = errors.INVALID_VALUE
                this.hasError = true
                return
            }
        },
    },
    beforeMount () {
        this.userdata.username = this.user.username
        this.userdata.sponsor = this.user.sponsor.username
        this.userdata.email = this.user.email
        this.userdata.firstName = this.user.firstName
        this.userdata.secondName = this.user.secondName
        this.userdata.phoneNumber = this.user.phoneNumber
        this.userdata.phoneNumber2 = this.user.phoneNumber2
        this.userdata.skype = this.user.skype
        this.userdata.country = this.user.country
        this.userdata.state = this.user.state
        this.userdata.city = this.user.city
        this.userdata.address = this.user.address
        this.userdata.zipCode = this.user.zipCode
        this.userdata.site = this.user.links.site
        this.userdata.odnoklassniki = this.user.links.odnoklassniki
        this.userdata.vk = this.user.links.vk
        this.userdata.fb = this.user.links.fb
        this.userdata.youtube = this.user.links.youtube
        this.userdata.autoExtensionBS = this.user.settings.autoExtensionBS
        this.userdata.showMobile = this.user.settings.showMobile
        this.userdata.showEmail = this.user.settings.showEmail
        this.userdata.showName = this.user.settings.showName
        this.userdata.deliveryEmail = this.user.settings.deliveryEmail
        this.userdata.deliverySMS = this.user.settings.deliverySMS
    },
    mounted() {
        if (localStorage['auth._token.local']) {
            this.userdata.token = localStorage['auth._token.local'].split(' ')[1]
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
    &__body {
        .error {
            position: absolute;
            font-size: 12px;
            color: red;
        }
    }
}
</style>
