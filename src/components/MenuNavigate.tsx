import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { useEffect, useState } from 'react'

export class ListNavigation {
  id!: number
  image: string = ''
  name: string = ''
  constructor(init?: Partial<ListNavigation>) {
    Object.assign(this, init)
  }
}

function MenuNavigate() {
  const [lstNavigation, setListNavigation] = useState<ListNavigation[]>([])
  useEffect(() => {
    let lstNavigation: ListNavigation[] = []
    for (let i = 0; i < 20; i++) {
      lstNavigation.push(
        new ListNavigation({
          id: Math.floor(Math.random() * 1000),
          image: require('../assets/images/island.jpg'),
          name: `国立公園 ${i}`
        })
      )
    }
    setListNavigation(lstNavigation)
  }, [])

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className='mySwiper w-full mr-2'
      slidesPerView={10}
      slidesPerGroup={10}
    >
      {lstNavigation.map((item: ListNavigation) => {
        return (
          <SwiperSlide
            key={item.id}
            className='flex items-center overflow-hidden'
          >
            <div className='flex items-center justify-center flex-col pr-3 mr-2'>
              <div className='w-6 h-6 mb-1'>
                <img src={item.image} alt='' />
              </div>
              <div className='text-xs whitespace-nowrap'>{item.name}</div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default MenuNavigate
