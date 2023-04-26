<template>
    <div class="RegisterView">
        <div class="row">
            <div class="col-lg-4 mx-auto border shadow rounded p-4 mt-3">
                <h1 class="text-center mt-3 mb-4">Register</h1>
                <form @submit.prevent="doRegister">
                    <div class="form-group">
                        <label for="usernameInput">Username:</label>
                        <input type="text" class="form-control" id="usernameInput" v-model="username" :class="{
                            'is-invalid': this.usernameE === true,
                            'is-valid': this.usernameE === false,
                        }">
                        <div class="invalid-feedback" v-if="usernameE">
                            {{ usernameEM }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="passwordInput">Password:</label>
                        <input type="password" class="form-control" id="passwordInput" v-model="password" :class="{
                            'is-invalid': this.passwordE === true,
                            'is-valid': this.passwordE === false
                        }">
                        <div class="invalid-feedback" v-if="passwordE">
                            {{ passwordEM }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="passwordInput2">Confirm Password:</label>
                        <input type="password" class="form-control" id="passwordInput2" v-model="password2" :class="{
                            'is-invalid': this.password2E === true,
                            'is-valid': this.password2E === false
                        }">
                        <div class="invalid-feedback" v-if="password2E">
                            {{ password2EM }}
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Register',
    data() {
        return {
            username: '',
            password: '',
            password2: '',
            usernameE: null,
            passwordE: null,
            password2E: null,
            usernameEM: null,
            passwordEM: null,
            password2EM: null,
        }
    },
    methods: {
        doRegister() {
            let access = true
            if (this.username.length < 5) {
                access = false
                this.usernameE = true
                if (this.username.length == 0) {
                    this.usernameEM = 'username required.'
                } else {
                    this.usernameEM = 'username must be at least 5 characters long.'
                }
            } else {
                this.usernameE = false
                this.usernameEM = ''
            }

            if (this.password.length < 6) {
                access = false
                this.passwordE = true
                if (this.password.length == 0) {
                    this.passwordEM = 'Password required.'
                } else {
                    this.passwordEM = 'Password must be at least 6 characters long.'
                }
            } else {
                this.passwordE = false
                this.passwordEM = ''
            }

            if (this.password2.length < 6) {
                access = false
                this.password2E = true
                if (this.password2.length == 0) {
                    this.password2EM = 'Confirm Password required.'
                } else {
                    this.password2EM = 'Confirm Password must be at least 6 characters long.'
                }
            } else {
                this.password2E = false
                this.password2EM = ''
            }

            if (this.password != this.password2) {
                access = false
                this.passwordE = true
                this.password2E = true
                this.passwordEM = 'Passwords aren\'t same.'
            } else {
                if (!this.passwordEM && !this.password2EM) {
                    this.passwordEM = ''
                }
            }

            if (access) {
                this.$store.commit('login', `${this.username}:${this.password}`)
                this.$router.push('/profile')
            }
        }
    }
}
</script>
  