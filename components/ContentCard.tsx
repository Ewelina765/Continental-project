type ContentCardProps = {
  label: string
  content: string[]
}

const ContentCard: React.FC<ContentCardProps> = ({ label, content }) => {
  return (
    <div className='text-xs'>
      <p>{label}</p>
      <div className='flex items-center justify-between break-words rounded-lg bg-grey px-4 py-2 shadow-customShadow'>
        <div>
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ContentCard
