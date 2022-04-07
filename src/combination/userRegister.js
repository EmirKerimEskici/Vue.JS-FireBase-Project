import {ref} from 'vue';
import { auth } from '../firebase/config';

const hata=ref(null) //bir hata ref'i oluşurdum 
const signUp=async(email,parola)=>{
    hata.value=null; //önce hatanın içini boş verdik
    try{
        if(email.trim() ===''){
            throw new Error('E-mail alanı boş kaldı!! veya Parola alanı boş kaldı !!') //hatayı oluşturduk şimdide bu hatayı register içerisinde import etmemiz lazım
        }
        const res=await auth.createUserWithEmailAndPassword(email,parola); //methodu kullanıcıdan email adresi ile parola alıyor ve login isteğinde bulunuyor
         //burada ise createfonksiyonuna email ve parola değişkenini verdim
        if (!res) { 
            throw new Error('Kayıt Gerçekleşemedi');
        }
      await res.user.updateProfile({email:email})  //!!!eğer ki giriş yaptığımızda hata olmazsa adisplaynameyi değiştirmiş oluyoruz
        hata.value=null; //değil ise null kalsın yine 
        return res;
    }catch(error){
        hata.value=error.message // !!!burası artık tamam şimdi register içerisinde üyeol metodunu çalıştırabilirim
    } 
}
const userRegister=()=>{
    return {hata,signUp}
}
export default userRegister