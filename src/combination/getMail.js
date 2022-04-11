import {ref} from 'vue'
import {auth} from '../firebase/config'

const detailMail=ref(auth.currentUser)
auth.onAuthStateChanged(d=>{ //girilen profil hakkında ki değişiklikleri takip etmemi sağlıyor
    detailMail.value=d;
})

const getMail=()=>{
    return {detailMail}
}

export default getMail