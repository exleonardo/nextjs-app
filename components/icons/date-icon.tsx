import { SVGProps } from 'react'

function DateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill={'none'}
      stroke={'currentColor'}
      viewBox={'0 0 24 24'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path
        d={'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeWidth={2}
      />
    </svg>
  )
}

export default DateIcon
