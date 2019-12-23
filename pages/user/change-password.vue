<template>
    <change-password-form/>
</template>

<script>
import ChangePasswordForm from '~/components/user/ChangePasswordForm.vue'

export default {
    name: 'ChangePasswordPage',
    middleware: ['auth'],
    components: {
        ChangePasswordForm
    }
}
</script>
