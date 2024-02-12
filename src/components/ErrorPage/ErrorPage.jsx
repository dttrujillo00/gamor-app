import { Link } from "react-router-dom"


export const ErrorPage = () => {
  return (
    <div className="other_pages">
      <h2>Oops!!</h2>
      <Link to='/'> <em>Go to home page</em></Link>
    </div>
  )
}
