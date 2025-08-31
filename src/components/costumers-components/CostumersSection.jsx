export const CostumersSection = ({ img_path, title }) => {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-medium text-center">{title}</h1>
      <div className='flex gap-4 mt-8'>
        {
          img_path.map((image, index) => (
            <div className='flex flex-col items-center' key={index}>
                <img key={index} src={image.img} alt={`Customer ${index + 1}`} className="w-48 h-24 object-contain" />
                <p className='text-gray-600 text-sm mt-2'>{image.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
