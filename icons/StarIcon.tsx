import IconWrapper from '@/components/IconWrapper'

import { SvgProps } from './iconTypes'

const StarIcon: React.FC<SvgProps> = ({ fill, size, stroke }) => {
  return (
    <IconWrapper fill={fill} size={size} stroke={stroke}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='21'
        height='20'
        viewBox='0 0 21 20'
        fill='none'
      >
        <path
          d='M11.479 1.71204L13.846 6.51204C13.884 6.5895 13.9402 6.65656 14.0099 6.70743C14.0796 6.7583 14.1606 6.79146 14.246 6.80404L19.54 7.57304C19.6389 7.58672 19.7321 7.6279 19.8088 7.69188C19.8856 7.75586 19.9428 7.84009 19.9741 7.93499C20.0053 8.02989 20.0093 8.13165 19.9856 8.22871C19.9619 8.32577 19.9114 8.41424 19.84 8.48405L16.01 12.218C15.9478 12.2785 15.9014 12.3531 15.8745 12.4355C15.8477 12.5179 15.8413 12.6056 15.856 12.691L16.756 17.963C16.7728 18.0613 16.7619 18.1623 16.7244 18.2546C16.6868 18.347 16.6242 18.427 16.5435 18.4855C16.4629 18.5441 16.3675 18.579 16.268 18.5861C16.1686 18.5933 16.0692 18.5725 15.981 18.526L11.247 16.037C11.1699 15.9963 11.0841 15.975 10.997 15.975C10.9098 15.975 10.824 15.9963 10.747 16.037L6.01696 18.523C5.92875 18.5695 5.82931 18.5903 5.72989 18.5831C5.63047 18.576 5.53504 18.5411 5.45439 18.4825C5.37375 18.424 5.31111 18.344 5.27357 18.2516C5.23602 18.1593 5.22508 18.0583 5.24196 17.96L6.14196 12.688C6.1566 12.6026 6.15023 12.5149 6.1234 12.4325C6.09657 12.3501 6.05009 12.2755 5.98796 12.215L2.15796 8.48104C2.08648 8.41124 2.03602 8.32277 2.01232 8.22571C1.98861 8.12865 1.99261 8.02689 2.02386 7.93199C2.05512 7.83709 2.11236 7.75286 2.1891 7.68888C2.26584 7.62489 2.35899 7.58372 2.45796 7.57004L7.75196 6.80005C7.83731 6.78746 7.91833 6.7543 7.98801 6.70343C8.0577 6.65256 8.11396 6.5855 8.15196 6.50805L10.519 1.70804C10.5632 1.61826 10.6318 1.54272 10.7169 1.49003C10.8019 1.43734 10.9001 1.40962 11.0002 1.41004C11.1003 1.41046 11.1982 1.43899 11.2829 1.49239C11.3675 1.54579 11.4355 1.6219 11.479 1.71204Z'
          stroke='#FFFFFF'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </IconWrapper>
  )
}
export default StarIcon
