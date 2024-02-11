'use client'

/**
 * * Used for handling the component error with {@param error} and {@param reset function} methods which is used to trigger the reset click event which is try to reload the component again.
 * @param param0 
 * @returns 
 */
const ErrorBoundary = ({ error, reset }: {error: Error, reset: () => void}) => {
  return (
    <div className="text-red-500 flex flex-col text-2xl font-extrabold text-center my-10">
        {error.message}
        <button className="bg-red-200" onClick={reset}>Reset</button>
    </div>
  )
}

export default ErrorBoundary