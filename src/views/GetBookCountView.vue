<template>
    <div id="app">
        <h1>Book Counter</h1>
        <button @click="getBookCount">Get book Count</button>
        <p v-if="count !== null">Total number of books: {{ count }} </p>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            count: null,
            error: null,
        };
    }, 
    methods: {
        async getBookCount() {
            try {
                const response = await axios.get('http://127.0.0.1:5001/week7-tianchen-zhang/us-central1/countBooks');
                this.count = response.data.count;
                this.error = null;
            } catch (error) {
                console.error('Error feching book count:',error);
                this.error = error;
                this.count = null;
            }
        }
    }
}
</script>
