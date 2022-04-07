import {ref} from 'vue';
import { auth } from '../firebase/config';
const hata=ref(null) 
const login=async(email,parola)=>{
    hata.value=null; 
    try{
        const res=await auth.signInWithEmailAndPassword(email,parola);//bu method bizim giriş yapmamızı sağlayacak 
        if (!res) { 
            throw new Error('Giriş Gerçekleşemedi');
        }
        hata.value=null;
        return res;
    } catch(error){
        hata.value=Error('Giriş Gerçekleşemedi')
    }
}
const userLogin=()=>{
    return {hata,login}
}
export default userLogin