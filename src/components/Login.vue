<template>
 <div class="card-body p-4 p-sm-5">
    <form @submit.prevent="beLogin">
        <div class="form-floating mb-3">      
    <input  class="form-control"  placeholder="Email Alanı" v-model="email">
        <label>Email Alanı</label>
    </div>
        <div class="form-floating mb-3">
    <input  class="form-control" type="password" placeholder="Parola" v-model="parola">
        <label >Parola</label>
    
        </div>
    <div class="d-grid">
        <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Giriş Yap</button>
    </div>
    </form>
    <h5 class="error"> {{hata}} </h5>
</div>
                
</template>
<script>
import {ref} from 'vue'  
import userLogin from '../combination/userLogin'
export default {
    name:'Login',
    setup(props,context) {
        const email = ref('')
        const parola =ref('')
        const {hata,login} =userLogin()  //useLogin içerisinde ki metodları getireceğim
        const beLogin=async ()=>{
           await login(email.value,parola.value);
            if(!hata.value){
                context.emit('login')
            }
        }
        return{email,parola,beLogin,hata}
    }
}
</script>
<style>
  .btn-login {
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    padding: 0.75rem 1rem;
  }
  .error{
      color: red;
      margin-top: 10px;
  }
</style>

