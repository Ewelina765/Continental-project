import Link from 'next/link'

import {
  FacebookIcon,
  GithubIcon,
  YouTubeIcon,
  LinkedinIcon,
  TikTokIcon,
  InstagramIcon,
} from '@/icons'

type SocialMediaIconPickerProps = {
  url: string
}

const SocialMediaIconPicker: React.FC<SocialMediaIconPickerProps> = ({
  url,
}) => {
  let iconUrl: React.ReactElement

  switch (true) {
    case url.includes('facebook.com'):
      iconUrl = <FacebookIcon />
      break
    case url.includes('tiktok.com'):
      iconUrl = <TikTokIcon />
      break
    case url.includes('instagram.com'):
      iconUrl = <InstagramIcon />
      break
    case url.includes('linkedin.com'):
      iconUrl = <LinkedinIcon />
      break
    case url.includes('github.com'):
      iconUrl = <GithubIcon />
      break
    case url.includes('youtube.com'):
      iconUrl = <YouTubeIcon />
      break
    default:
      iconUrl = <FacebookIcon />
  }

  return (
    <Link href={url} target='_blank'>
      {iconUrl}
    </Link>
  )
}

export default SocialMediaIconPicker
