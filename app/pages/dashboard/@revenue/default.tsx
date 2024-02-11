import Revenue from "./page"

/**
 * * The default.tsx page is used for handling the unmatched routes when we trying to reload the page inside the parallel routes eg: dashboard/notifications/archived (For this example), if we are not going to use it then it will throw the 404 page not found error for other unmatched routes.
 * @returns 
 */
const DefaultRevenue = () => {
  return (
    <Revenue />
  )
}

export default DefaultRevenue