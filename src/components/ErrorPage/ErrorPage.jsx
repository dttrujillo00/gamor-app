import { Link } from "react-router-dom"


export const ErrorPage = () => {
  return (
    <>
      <h2>Oops!!</h2>
      <p>This URL doesn&apos;t exist</p>
      <Link to='/'>Go to home page</Link>
    </>
  )
}
