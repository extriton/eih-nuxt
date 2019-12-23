<template>
<div class="user-partners-list">
    <table>
        <thead>
            <tr>
                <th>Логин</th>
                <th>Email</th>
                <th>Online</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in partnersList" :key="index">
                <td>{{ item.username }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.online }}</td>
            </tr>
        </tbody>
    </table>
    <h2 v-show="partnersList.length === 0" class="message-not-found">Партнёры не найдены</h2>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'UserPartnersList',
    data () {
        return {
            partnersList: []
        }
    },
    methods: {
    },
    async mounted () {
        let token
        if (localStorage['auth._token.local']) {
            token = localStorage['auth._token.local'].split(' ')[1]
        }

        let result = null
        try {
            result = await axios.get(`http://localhost:3000/user/partners?token=${token}`)
        } catch (e) {
            this.partnersList = []
            return
        }

        this.partnersList = result.data
    }
}
</script>

<style lang="scss">
.user-partners-list {
    display: block;
    width: 100%;
    padding: 20px 30px;
    text-align: left;
    background-color: #eee;
    table {
        width: 100%;
        tr {
            th {
                width: 33%;
                border: 1px solid gray;
                padding: 10px;
                text-align: center;
            }
            td {
                width: 33%;
                border: 1px solid gray;
                padding: 10px;
            }
        }
    }
    .message-not-found {
        margin-top: 30px;
        text-align: center;
        font-style: italic;
    }
}
</style>
