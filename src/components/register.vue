<template>
    <div class="card-body p-4 p-sm-5">
    <form @submit.prevent="uyeOl">
        <div class="form-floating mb-3">      
    <input  class="form-control"  placeholder="Email Alanı" v-model="email">
        <label>Email Alanı</label>
    </div>
        <div class="form-floating mb-3">
    <input  class="form-control" type="password" placeholder="Parola" v-model="parola">
        <label >Parola</label>
    <h5 class="error"> {{hata}} </h5>
        </div>
    <div class="d-grid">
        <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Üye Ol</button>
    </div>
    </form>
</div>
</template>
<script>
import {ref} from 'vue' //basit bir üye ol ekranı
import userRegister from '../combination/userRegister'
export default {
    name: 'register',
    setup(props,context) {
        const email = ref('')
        const parola =ref('')
        const {hata,signUp}=userRegister()
        const uyeOl=async ()=>{
         await signUp(email.value,parola.value); //buraya useLogindeki girişi aktardık
            if(!hata.value){
                context.emit('register')
            }
        }
        return{email,parola,uyeOl,hata}
    }
}
</script>
<style >
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