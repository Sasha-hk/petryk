import { FC } from 'react';

export const EditOnGitHub: FC<{
  url: string
}> = ({ url }) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      className='
        mt-16
        flex
        space-x-1.5
        items-start
      text-primary-400
      dark:text-primary
      '
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width='1.1rem'
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="vt-icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        ></path>
      </svg>

      <span>Edit this page on GitHub</span>
    </a>
  )
}


