import React from 'react'

const Card = ({ img_path, description, index = 0, ...props }) => {
    return (

        <div className="flex items-center p-2 max-w-5xl">
            <img
                className="w-64 h-48 object-fit rounded-lg"
                src={img_path}
                alt={`Customer ${index + 1}`}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-200">{description}</p>
            </div>
        </div>

    )
}

export default Card