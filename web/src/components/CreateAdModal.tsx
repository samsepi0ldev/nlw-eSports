import * as Dialog from '@radix-ui/react-dialog'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, CheckCircle, GameController, WarningCircle, X } from 'phosphor-react'
import { FormEvent, ReactElement, useEffect, useState } from 'react'
import axios from 'axios'

import { Input } from './Form/Input'
import { promise } from '../utils/promise'

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

type MessageType = {
  title: string
  content: string
  icon: ReactElement
  name?: string
}

export function CreateAdModal() {
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)
  const [games, setGames] = useState<Game[]>([])
  const [isOpenMessage, setIsOpenMessage] = useState(false)
  const [message, setMessage] = useState<MessageType>()
  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])

  async function submitHandle (e: FormEvent) {
    e.preventDefault()
    const formElm = e.target as HTMLFormElement
    const data = Object.fromEntries(new FormData(formElm).entries()) as unknown as any
    if (!data.name) return
    const [err, res] = await promise(axios.post(`http://localhost:3333/games/${data.gameId}/ads`, {
      name: data.name,
      yearsPlaying: Number(data.yearsPlaying),
      discord: data.discord,
      weekDays: weekDays.join(','),
      hoursStart: data.hoursStart,
      hoursEnd: data.hoursEnd,
      useVoiceChannel
    }))
    if (err) {
      setMessage({
        title: 'Erro',
        content: 'Houve um erro ao criar o anuncio.',
        icon: <WarningCircle className='text-red-400' size={64} weight='bold' />
      })
      setIsOpenMessage(true)
      return
    }
    setMessage({
      title: 'Sucesso',
      content: 'Anuncio criado com sucesso.',
      icon: <CheckCircle className='text-emerald-400' size={64} weight='bold' />,
      name: res.data.name
    })
    setIsOpenMessage(true)
  }
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 fixed inset-0 flex items-center justify-center'>
        <Dialog.Content className='w-[488px] bg-[#2A2634] px-10 py-8 rounded-lg text-white shadow-md shadow-black/25'>
          <Dialog.Title className='font-black text-3xl mb-8'>Publique um anúncio</Dialog.Title>
          <form onSubmit={submitHandle}>
            <div className='mt-4 flex flex-col gap-2'>
              <label htmlFor='game' className='font-semibold'>Qual o game?</label>
              <select className='px-3 py-4 rounded bg-zinc-900 text-zinc-500 placeholder:text-zinc-500 appearance-none' name='gameId' id='game' defaultValue=''>
                <option value='' disabled>Selecione o game que deseja jogar</option>
                {games.map(game => (
                  <option key={game.id} value={game.id}>{game.title}</option>
                ))}
              </select>
            </div>
            <div className='mt-4 flex flex-col gap-2'>
              <label htmlFor='game' className='font-semibold'>Seu nome (ou nickname)</label>
              <Input type='text' name='name' placeholder='Como te chamam dentro do game?' />
            </div>
            <div className='mt-4 grid grid-cols-2 gap-6'>
              <div className='flex-1 flex flex-col gap-2'>
                <label htmlFor='game' className='font-semibold'>Joga há quantos anos?</label>
                <input className='px-3 py-4 rounded bg-zinc-900 text-zinc-500 placeholder:text-zinc-500 appearance-none' type='number' name='yearsPlaying' placeholder='Tudo bem ser ZERO' />
              </div>
              <div className='flex-1 flex flex-col gap-2'>
                <label htmlFor='game' className='font-semibold'>Qual seu Discord?</label>
                <Input type='text' name='discord' placeholder='Usuario#0000' />
              </div>
            </div>
            <div className='mt-4 grid grid-cols-2 gap-6'>
              <div className='flex-1'>
                <label>Quando costuma jogar?</label>
                <ToggleGroup.Root
                  type='multiple'
                  className='grid grid-cols-4 gap-2 mt-2'
                  value={weekDays}
                  onValueChange={setWeekDays}>
                  <ToggleGroup.Item
                    value='0'
                    title='Domingo'
                    className={`w-10 h-10 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                    D
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='1'
                    title='Segunda'
                    className={`w-10 h-10 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='2'
                    title='Terça'
                    className={`w-10 h-10 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                    T
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='3'
                    title='Quarta'
                    className={`w-10 h-10 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='4'
                    title='Quinta'
                    className={`w-10 h-10 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='5'
                    title='Sexta'
                    className={`w-10 h-10 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='6'
                    title='Sábado'
                    className={`w-10 h-10 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}>
                    S
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>
              <div>
                <label>Qual horário do dia?</label>
                <div className='flex gap-2 mt-2 text-xs'>
                  <Input type='time' name='hoursStart' placeholder='de' />
                  <Input type='time' name='hoursEnd' placeholder='ate' />
                </div>
              </div>
            </div>
            <label className='mt-6 flex items-center gap-2 text-sm cursor-pointer'>
              <Checkbox.Root
                checked={useVoiceChannel}
                onCheckedChange={(checked: boolean) => setUseVoiceChannel(checked)}
                className='w-6 h-6 p-1 rounded bg-zinc-900'>
                <Checkbox.Indicator>
                  <Check className='h-4 w-4 text-emerald-400' />
                </Checkbox.Indicator>
              </Checkbox.Root>
              Costumo me conectar ao chat de voz
            </label>
            <footer className='mt-8 flex justify-end gap-4'>
              <Dialog.Close className='bg-zinc-500 hover:bg-zinc-600 text-white rounded-md font-semibold px-5 py-3 transition-colors'>
                Cancelar
              </Dialog.Close>
              <button className='flex gap-4 bg-violet-500 hover:bg-violet-600 text-white rounded-md font-semibold px-5 py-3 transition-colors' type='submit'>
                <GameController size={24} />
                Encontrar duo
              </button>
            </footer>
          </form>
        </Dialog.Content>
        <Dialog.Root open={isOpenMessage} onOpenChange={setIsOpenMessage}>
          <Dialog.Overlay className='absolute inset-0 bg-black/60' />
          <Dialog.Content className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2A2634] px-10 py-8 rounded-lg flex flex-col items-center justify-center'>
            {message?.icon}
            <h1 className='text-white text-2xl font-black mt-6'>{message?.title}</h1>
            <span className='text-zinc-400'>{message?.content}</span>
            
              {message?.name ? (
                <span className='text-base mt-5 font-medium bg-zinc-900 rounded-md py-3 px-10 w-full flex items-center justify-center text-white'>{message.name}</span>
              ): null}
            
            <Dialog.Trigger className='w-8 h-8 rounded-full hover:bg-white/5 absolute top-2 right-2 flex items-center justify-center transition-colors'>
              <X className='text-zinc-500' size={24} />
            </Dialog.Trigger>
          </Dialog.Content>
        </Dialog.Root>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}