import React from 'react'

/**
 * @description
 * * Layout is used to reserve the keep the state with in the component only update the child node and keep all it state in cache for the better performance.
 * * Where as Template is used to re-render each time the component and its children.
 * * It is possible to used both layout and template the format is likely -> Layout.tsx -> template.tsx -> Page Template file
 * @param param0 
 * @returns 
 */
const LayoutTemplate = ({children}: {children: React.ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

export default LayoutTemplate