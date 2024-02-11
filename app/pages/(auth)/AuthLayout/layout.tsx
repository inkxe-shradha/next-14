
const AuthLayoutPage = ({children} : {
    children: React.ReactNode
}) => {
  return (
    <div>
        <h1>
            This is the group layout for the forgot password and the profile page.
        </h1>
        {children}
    </div>
  )
}

export default AuthLayoutPage