<template>
    <div>
      <h2>Hoşgeldiniz<h3>{{detailMail.email}} adresi ile giriş yaptınız</h3></h2>
    </div>
    <button @click="exit" class="btn btn-danger">Çıkış Yap</button>
</template>
<script>
import {auth} from '../firebase/config'
import {useRouter} from 'vue-router'
import getMail from '../combination/getMail'
export default {
setup() {
  const router=useRouter();
  const {detailMail}=getMail();
  const exit=async()=>{
    await auth.signOut().then(()=>{ //signOut metodunu kullandık ve arkasından promise yapısı gereği başarılı olursa eğer then yapısı çalışacak
      router.push({name:'Home'})
    })
  }
  return {exit,detailMail}
}}
</script>