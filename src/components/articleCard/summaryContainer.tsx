import React from 'react'

type SummaryContainerProps = {
  summary: string
}

const SummaryContainer = ({ summary }: SummaryContainerProps) => {
  return (
    <div>
      <p className='text-xs overflow-ellipsis line-clamp-4'>{summary}</p>
    </div>
  )
}

export default SummaryContainer