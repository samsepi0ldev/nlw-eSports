import * as Dialog from '@radix-ui/react-dialog'
import { MagnifyingGlassPlus } from 'phosphor-react'

export function CreateAdBanner() {
  return (
    <div className='w-full mt-8 bg-nlw-gradient rounded-lg pt-1 self-stretch overflow-hidden'>
      <div className='bg-[#2A2634] px-8 py-6 flex items-center justify-between'>
        <div>
          <span className='font-black text-white text-2xl block'>Não encontrou seu duo?</span>
          <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
        </div>
        <Dialog.Trigger className='text-white font-medium flex items-center gap-4 bg-violet-500 hover:bg-violet-600 transition rounded-md py-3 px-4'>
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}