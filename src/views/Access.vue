<template>
    <div>
      <p>Hoşgeldin</p>
    </div>
    <button @click="exit" class="btn btn-danger">Çıkış Yap</button>
</template>
<script>
import {auth} from '../firebase/config'
import {useRouter} from 'vue-router'
export default {
setup() {
  const router=useRouter();
  const exit=async()=>{
    await auth.signOut().then(()=>{ //signOut metodunu kullandık ve arkasından promise yapısı gereği başarılı olursa eğer then yapısı çalışacak
      router.push({name:'Home'})
    })
  }
  return {exit}
}}
</script>