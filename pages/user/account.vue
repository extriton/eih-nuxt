<template>
    <user-account/>
</template>

<script>
import UserAccount from '~/components/user/UserAccount.vue'

export default {
    name: 'AccountPage',
    middleware: ['auth'],
    components: {
        UserAccount
    }
}
</script>
