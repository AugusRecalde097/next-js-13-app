import {LikeButton} from "./LikeButton"
import styles from "./Posts.module.css";
import Link from 'next/link';

const fetchPosts = () => { 
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
 }
 
 export  async function ListOfPost(){
     const posts = await fetchPosts()
     return posts.slice(0,10).map( post => (
             <article key={post.id} className={styles.containerPosted}>
                <Link href='./posts/[id]' as={`./posts/${post.id}`}  >
                 <h2 style={{color: '#C95C76'}}>{post.title}</h2>
                 <p>{post.body}</p>
                 {/* <LikeButton/>  */}
                 </Link>
             </article>
         )) 
 }