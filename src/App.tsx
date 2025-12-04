import { useUsers } from './api/features/users/user-queries'
import './App.css'

function App() {
  const {data, isLoading, error} = useUsers();

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>An error occured</p>
  return (
    <>
      <h1 className='text-5xl text-red-500'>Hello</h1>
      <p>User list</p>
      <div>
        {data.map(() => {})} {/** Render all users */}
      </div>
    </>
  )
}

export default App
