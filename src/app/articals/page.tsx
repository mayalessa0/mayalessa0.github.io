
const ArticalsPage = async ()=> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articals = await response.json();
  console.log(articals);
  return (
    <div>Articals</div>
  )
}

export default ArticalsPage