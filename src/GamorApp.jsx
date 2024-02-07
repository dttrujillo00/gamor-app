import { Route, Routes } from "react-router-dom"

import { Header } from "./components/Header/Header"
import { Home } from "./components/Home/Home"
import { Streams } from "./components/Streams/Streams"
import { Party } from "./components/Party/Party"
import { Premium } from "./components/Premium/premium"
import { ErrorPage } from "./components/ErrorPage/ErrorPage"


export const GamorApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Header /> }>
          <Route index element={ <Home /> } />
          <Route path="streams" element={ <Streams /> } />
          <Route path="party" element={ <Party /> } />
          <Route path="premium" element={ <Premium /> } />
          <Route path="*" element={ <ErrorPage /> } />
        </Route>
      </Routes>
    </>
  )
}
