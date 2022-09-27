import { prisma } from '@/infra/db/prisma'
import { CreateAdRepository, LoadAdByGameRepository, LoadAdByIdRepository } from '@/data/protocols'

export class PrismaAdRepository implements CreateAdRepository, LoadAdByGameRepository, LoadAdByIdRepository {
  async create (input: CreateAdRepository.Input): Promise<CreateAdRepository.Output> {
    const adModel = await prisma.ad.create({
      data: {
        name: input.name,
        discord: input.discord,
        hoursEnd: this.convertStringToMinutes(input.hoursEnd),
        hoursStart: this.convertStringToMinutes(input.hoursStart),
        useVoiceChannel: input.useVoiceChannel,
        weekDays: input.weekDays,
        yearsPlaying: input.yearsPlaying,
        gameId: input.gameId
      }
    })
    return adModel
  }

  async loadById ({ id }: LoadAdByIdRepository.Input): Promise<LoadAdByIdRepository.Output> {
    const ad = await prisma.ad.findUniqueOrThrow({ where: { id } })
    return ad
  }

  async loadByGame ({ gameId }: LoadAdByGameRepository.Input): Promise<LoadAdByGameRepository.Output> {
    const ads = await prisma.ad.findMany({
      where: { gameId },
      select: {
        id: true,
        name: true,
        hoursEnd: true,
        hoursStart: true,
        useVoiceChannel: true,
        weekDays: true,
        yearsPlaying: true
      },
      orderBy: {
        createAt: 'desc'
      }
    })
    return ads.map(ad => ({
      ...ad,
      weekDays: ad.weekDays.split(',').map(Number),
      hoursEnd: this.convertMinutesToHourString(ad.hoursEnd),
      hoursStart: this.convertMinutesToHourString(ad.hoursStart)
    }))
  }

  private convertStringToMinutes (hourString: string): number {
    const [hours, minutes] = hourString.split(':').map(Number)
    const minutesAmount = (hours * 60) + minutes
    return minutesAmount
  }

  private convertMinutesToHourString (minutesAmount: number): string {
    const hours = Math.floor(minutesAmount / 60)
    const minutes = minutesAmount % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
  }
}
