<template>
  <h1>Sign in</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="signin">Sign in via Firebase</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const auth = getAuth();

const admin = "Admin001@gmail.com"
const normalUser = "User001@gmail.com"
const signin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Firebase Register Successful!");
      if(email.value == admin){
        alert("Welcome Admin!")
      }else if(email.value == normalUser){
        alert("Welcome User!")
      }
      router.push("/");
      console.log(auth.currentUser); // To check the current User signed in
    })
    .catch((error) => {
      console.log(error.code);
    });
};
</script>