<template>
  <v-flex xs12 v-if="isloaded">
      <v-alert
      v-model="alert"
      dismissible
      type="warning">
      <h4>{{error}}</h4>
      </v-alert>
      <v-alert
      v-model="succes"
      dismissible
      type="success">
      <h4>{{succed}}</h4>
      </v-alert>
    <v-data-table
    :headers="headers"
    :items="users"
    hide-actions
    class="elevation-1">
    <template slot="items" slot-scope="props">
      <td>{{ props.item.id }}</td>
      <td class="text-xs-left">{{ props.item.email }}</td>
      <td class="text-xs-left">{{ props.item.createdAt }}</td>
      <td class="text-xs-left">{{ props.item.isAdmin ? 'Admin' : 'User' }}</td>
      <td class="justify-center layout px-0">
      <v-icon small @click="deleteUser(props.item)">
        delete
      </v-icon>
      </td>
    </template>
    <template slot="no-data">
    <v-alert :value="true" color="error" icon="warning">
      Sorry, no user found :(
    </v-alert>
  </template>
  </v-data-table>
  </v-flex>
</template>
<script>
import DBViwerService from '@/services/dbViewerService'
export default {
  data () {
    return {
      headers: [
        {
          text: 'User ID',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Email', value: 'email' },
        { text: 'Created at', value: 'createdAt' },
        { text: 'Rank', value: 'isAdmin', sortable: true },
        { text: 'Actions', sortable: false }

      ],
      users: [],
      isloaded: false,
      error: '',
      succed: '',
      alert: false,
      succes: false
    }
  },
  async mounted () {
    this.loadUsers()
  },
  methods: {
    async deleteUser (user) {
      if (!this.$store.state.user.isAdmin) {
        this.error = 'You dont have the permisson to delet users.'
        this.alert = true
        return
      }
      try {
        const response = await DBViwerService.deleteUser({
          id: user.id,
          email: user.email
        })
        this.succed = `${response.data.email} has been deleted`
        this.loadUsers()
        this.succes = true
      } catch (error) {
        this.error = error.data
        this.alert = true
      }
    },
    async loadUsers () {
      if (!this.$store.state.isUserLoggedIn) {
        return this.$router.push({
          name: 'board'
        })
      }
      try {
        const response = await DBViwerService.index()
        this.users = response.data.users
      } catch (error) {
        console.log(error.data)
      }
      this.isloaded = true
    }
  }
}
</script>

<style scoped>
  .elevation-1{
    width: 100%;
  }
</style>
