
const ProductLayoutPage = ({children} : {
    children: React.ReactNode
}) => {
  return (
    <div>
        <h1>
            This is the default product layout page
        </h1>
        {children}
    </div>
  )
}

export default ProductLayoutPage