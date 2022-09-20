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
          name: `国立公園 ${i + 1}`
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
      slidesPerView={4}
      slidesPerGroup={4}
      spaceBetween={20}
      breakpoints={{
        640: {
          slidesPerView: 6,
          slidesPerGroup: 6,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 6,
          slidesPerGroup: 6,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 8,
          slidesPerGroup: 8,
          spaceBetween: 20
        },
        1280: {
          slidesPerView: 10,
          slidesPerGroup: 10,
          spaceBetween: 20
        },
        1536: {
          slidesPerView: 12,
          slidesPerGroup: 12,
          spaceBetween: 20
        }
      }}
    >
      {lstNavigation.map((item: ListNavigation) => {
        return (
          <SwiperSlide
            key={item.id}
            className='flex items-center overflow-hidden'
          >
            <div className='flex items-center justify-center flex-col w-full'>
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
