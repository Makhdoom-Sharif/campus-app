import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

const auth = getAuth();
async function loginUser(authParams){
    const {email, password, roll } = authParams
    // const { user: { uid } } =
    try{ 
     const { user: { uid } } = await signInWithEmailAndPassword(auth, email, password)
    console.log("sign In successfull",uid)
    const db = getDatabase();
    const dbRef = ref(getDatabase());
 await get(child(dbRef, `users/${uid}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val().roll);
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
     }
    catch(error){
        alert(error)
    }
    
  }
  



export {loginUser}