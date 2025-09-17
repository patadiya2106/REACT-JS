import useGitHubUserFetch from "./Hook/useGitHubuserFetch"

function App() {

  const users = useGitHubUserFetch("https://api.github.com/users");
  console.log(users);
  

  return (
    <>
      <h1 className="text-black-500 text-4xl font-bold text-center m-5 hover:text-blue-400">GitHub Users</h1>
      {users.map((user , index) => (
       <div key={index}>
         <img src={user.avatar_url}/>
        <p >{user.login}</p>
       </div>
      ))}
    </>
  )
}

export default App
