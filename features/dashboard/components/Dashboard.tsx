import { useTranslations } from 'next-intl'

const Dashboard = () => {
  const t = useTranslations('sidebar')

  return <div>{t('dashboard')}</div>
}

export default Dashboard
