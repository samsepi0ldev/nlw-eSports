interface GameBannerProps {
  title: string
  bannerUrl: string
  adsCount: number
}

export function GameBanner ({ title, bannerUrl, adsCount }: GameBannerProps) {
  return (
    <a href="" className='w-fit relative overflow-hidden rounded-lg'>
      <img src={bannerUrl} alt='League of Legends' />
      <div className='w-full bg-game-gradient absolute bottom-0 left-0 right-0 pt-16 pb-4 px-4'>
        <span className='text-white font-bold block whitespace-nowrap'>{title}</span>
        <span className='text-sm text-zinc-400 block'>{adsCount} anúncios(s)</span>
      </div>
    </a>
  )
}