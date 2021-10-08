import React from 'react'
function Message({variant,children}) {
    return (
        <>
        {variant ==='true' && (<div className='bg-green-400 w-2/4 mx-auto rounded'>
                <h1 className='font-bold text-2xl text-center p-2'>{children}</h1></div>)}
        {variant ==='false' && (<div className='bg-red-500 w-2/4 mx-auto rounded'>
                <h1 className='font-bold text-2xl text-center p-2'>{children}</h1></div>)}


            {/* <div className='bg-green-400 w-2/4 mx-auto rounded'>
                <h1 className='font-bold text-2xl text-center p-2'>{children}</h1>
            </div> */}
        </>
    )
}

Message.defaultProps = {
    variant: 'info'
}

export default Message
