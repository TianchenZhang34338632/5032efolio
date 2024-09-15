<template>
  <div>
    <h1>Edit Book</h1>
    <form @submit.prevent="editBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required  />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import router from '../router'
import { ref } from 'vue';
import db from '../firebase/init.js';
import { doc, setDoc } from 'firebase/firestore';

export default {
  setup() {
    const bookData = JSON.parse(localStorage.getItem('bookData'));
    const bookId = bookData.id;
    const isbn = ref(bookData.isbn);
    const name = ref(bookData.name);

    const editBook = async () => {
      try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number');
          return;
        }

        const docRef = doc(db, 'books', bookId);

        await setDoc(docRef,{
          isbn: isbnNumber,
          name: name.value
        });

        isbn.value = '';
        name.value = '';
        router.push({ name: 'Addbook'}); 
        alert('Book saved successfully!');
      } catch (error) {
        console.error('Error saving book: ', error);
      }
    };

    return {
      isbn,
      name,
      bookId,
      editBook
    };
  }
};
</script>
