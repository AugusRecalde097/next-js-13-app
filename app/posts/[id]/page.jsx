const fetchPosts = ({ id }) => { 
    console.log(id)
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
 }
 
 export default async function ListOfPost({ params }){
    const id = params
    const post = await fetchPosts(id)
    
     return (
        <article >
            <h2 style={{color: '#C95C76'}}>{post.title}</h2>
            <p>{post.body}</p> 
        </article>
     )


 }