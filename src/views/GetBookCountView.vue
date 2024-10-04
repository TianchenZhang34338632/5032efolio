<template>
    <div id="app">
        <h1>Book Counter</h1>
        <button @click="getBookCount">Get book Count</button>
        <p v-if="count !== null">Total number of books: {{ count }} </p>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script setup>
import axios from 'axios';
import {ref} from 'vue';
const count = ref('');
const error = ref('');

const getBookCount = async () => {
    try {
            const response = await axios.get('https://countbooks-ms47cdl5eq-uc.a.run.app/');
            console.log("response",response.data)
            count.value = response.data.count;
            error.value = null;
        } catch (error) {
            console.error('Error feching book count:',err);
            error.value = error;
            count.value = null;
        }
}
</script>
