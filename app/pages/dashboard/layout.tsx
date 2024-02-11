
const layout = ({children, user, revenue, notification,login, ...rest} : {
    children: React.ReactNode,
    user: React.ReactNode,
    revenue: React.ReactNode,
    notification: React.ReactNode,
    login: React.ReactNode
}) => {
  const isLoggedIn = true
  return isLoggedIn ? (
    <div> 
        {children}
        <div className="flex w-full">
            {/* 
                * This is the concept of the parallel routing where we can load different components without importing it and have more on control like loading the states for the these components are different and setting error handling is different. etc...
                * Sub navigation experience in a complex navigation.
            */}
            <div className="flex flex-col">
                <div>{user}</div>
                <div>{revenue}</div>
            </div>
            <div className="flex flex-1">
                {notification}
            </div>
        </div>
    </div>
  ): login
}

export default layout