<template>
  <div>
    <ul>
    <h1>Book list</h1>
      <li v-for="book in books" :key="book.id">
        {{ book.isbn }} - {{ book.name }} - {{ book.id }}
        <button @click="editBook(book.id)">Edit</button>
        <button @click="deleteBook(book.id,book.isbn,book.name)">Delete</button>
      </li>
    <button @click="fetchByISBN">Fetch by ISBN >1000</button>
    <button @click="fetchOrderedBooks">Fetch isbn Ordered Books</button>
    <button @click="fetchLimitedBooks">Fetch Limited 5 Books</button>
    </ul>
  </div>
</template>


<script>
import router from '../router'
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js';
import { collection, query, where, orderBy, limit, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default {
  setup() {
    const books = ref([]);

    const fetchBooks = async () => {
      try {
        const q = query(collection(db, 'books'));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
      } catch (error) {
        console.error('Error fetching books: ', error);
      }
    };

    const editBook = (bookId,bookisbn,bookname) => {
        console.log(bookId);
        localStorage.setItem('bookData', JSON.stringify({ id: bookId, name: bookname,isbn: bookisbn }));
        router.push({ name: 'Editbook'});
        alert("you will edit bookID: " + bookId) 
    };

    const deleteBook = async (bookId) => {
      try {
        await deleteDoc(doc(db, 'books', bookId));
        alert("delete successful")
        fetchBooks(); 
      } catch (error) {
        console.error('Error deleting book: ', error);
      }
    };

    onMounted(() => {
      fetchBooks();
    });

    const fetchByISBN = async () => {
      try {
        const q = query(collection(db, 'books'), where('isbn', '>', 1000));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
      } catch (error) {
        console.error('Error fetching books by ISBN: ', error);
      }
    };

     const fetchOrderedBooks = async () => {
      try {
        const q = query(collection(db, 'books'), orderBy('isbn'));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
      } catch (error) {
        console.error('Error fetching ordered books: ', error);
      }
    };

    const fetchLimitedBooks = async () => {
      try {
        const q = query(collection(db, 'books'), limit(5));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray;
      } catch (error) {
        console.error('Error fetching limited books: ', error);
      }
    };

    return {
      books,
      editBook,
      deleteBook,
      fetchByISBN,
      fetchOrderedBooks,
      fetchLimitedBooks
    };
  }
};

    


</script>
