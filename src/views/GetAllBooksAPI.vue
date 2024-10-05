<template>
    <pre>{{books}}</pre>
</template>

<script setup>
import axios from 'axios';
import {ref} from 'vue';
const books = ref('');
const error = ref('');

const getAllBook = async () => {
    try {
            const response = await axios.get('https://getallbooks-ms47cdl5eq-uc.a.run.app/');
            books.value = response.data;
            error = null;
        } catch (error) {
            console.error('Error feching book count:',err);
            error.value = error;
            count.value = null;
        }
    }
getAllBook()
</script>
