import React from 'react'

const AuthorSection = () => {
  return (
    <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
      <div className="flex items-center gap-3">
        <div className="relative h-5 w-5 flex-shrink-0">
          <img
            alt="Mario Sanchez"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="rounded-full object-cover"
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: 'transparent',
            }}
            sizes="20px"
          />
        </div>
        <span className="truncate text-sm">Mario Sanchez</span>
      </div>
      <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
      <time
        className="truncate text-sm"
        dateTime="2022-10-21T06:05:00.000Z"
      >
        October 21, 2022
      </time>
    </div>
  )
}

export default AuthorSection