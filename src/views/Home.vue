<template>
  <div class="Home">
    <div class="denemediv" v-if="uyeKontrol">
     <h1>Giriş Yapma Ekranı</h1>
      <Login @login="entry" />
      <p>Üye Olmak İçin
         <span @click="uyeKontrol=false">Üye Ol</span> Sayfasına gidiniz </p>
    </div>
    <div v-else>
      <h1>Üye Olma Ekranı</h1>
      <Register @register="entry" />
      <p>Giriş Yapmak İçin <span @click="uyeKontrol=true">Giriş Yap</span> Sayfasına Gidiniz </p>
    </div>
  </div>
</template>
<script>
import Login from '../components/Login.vue';
import Register from '../components/register.vue';
import {ref} from 'vue'
import {useRouter} from 'vue-router'
export default {
  name: 'Home', // divlere yönlendirme verdik true veya false olma durumuna bağlı olarak
  components: { 
    Register,
    Login
  },
  setup() {
    const uyeKontrol = ref(true)
    const router=useRouter()
    const entry=()=>{   
      router.push({name:'Access'}) 
    }
    return{uyeKontrol,entry}
  }
}
</script>
<style>
span{
  color: red;
  cursor: pointer;
}
</style>