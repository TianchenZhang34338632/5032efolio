<template>
    <pre>{{count}}</pre>
</template>

<script setup>
import axios from 'axios';
import {ref} from 'vue';
const count = ref('');
const error = ref('');

const getBookCount = async () => {
    try {
            const response = await axios.get('https://countbooks-ms47cdl5eq-uc.a.run.app/countbooks');
            count.value = response.data;
            error = null;
        } catch (error) {
            console.error('Error feching book count:',err);
            error = error;
            count.value = null;
        }
    }
getBookCount()
</script>
