import { useRouteError } from 'react-router-dom'
import { Error } from '../components/Error/Error.jsx'

export const ErrorPage = () => {
  const { statusText, message } = useRouteError()
  return (
    <main>
      <Error errorText={message} statusError={statusText} />
    </main>
  )
}
