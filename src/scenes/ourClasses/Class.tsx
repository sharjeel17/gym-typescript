import React from 'react'

type Props = {
    name: string,
    description?: string,
    image: string
}

const Class = ({name, description = "some default description", image}: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex flex-col h-full w-full items-center justify-center
    whitespace-normal bg-primary-500 text-white text-center opacity-0 transition duration-500 hover:opacity-90`
  return (
    <li className="relative mx-5 inline-block h-full w-[300px] md:w-[500px] ">
        <div className={overlayStyles}>
            <p className="text-lg md:text-2xl">{name}</p>
            <p className="text-sm md:pt-2">{description}</p>
        </div>
        <img src={image} alt={`${image}`}/>
    </li>
  )
}

export default Class