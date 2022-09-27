import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'

import nlwLogo from './assets/logo-nlw-esports.png'
import { CreateAdBanner } from './components/CreateAdBanner'
import { CreateAdModal } from './components/CreateAdModal'
import { GameBanner } from './components/GameBanner'

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export function App () {
  const [games, setGames] = useState<Game[]>([])
  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])
  return (
    <div className='w-full max-w-[1344px] mx-auto flex flex-col items-center mt-20'>
      <img src={nlwLogo} alt='nlw eSport' />
      <h1 className='text-6xl font-black text-white mt-20'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads} />
        ))}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}