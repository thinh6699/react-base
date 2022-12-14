import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import MenuNavigate from '../components/MenuNavigate'

export class Project {
  id!: number
  title: string = ''
  description: string = ''
  price: number = 0
  photos: string[] = []
  constructor(init?: Partial<Project>) {
    Object.assign(this, init)
  }
}

function Home() {
  const [lstProjects, setListProjects] = useState<Project[]>([])

  useEffect(() => {
    let lstProjects: Project[] = []
    for (let i = 0; i < 10; i++) {
      lstProjects.push(
        new Project({
          id: Math.floor(Math.random() * 1000),
          title: `ICTLホテルの紹介案件 ${i}`,
          description: `description ${i}`,
          price: Math.floor(Math.random() * 10000),
          photos: [
            require('../assets/images/abiansemal.webp'),
            require('../assets/images/abiansemal2.webp'),
            require('../assets/images/abiansemal3.webp')
          ]
        })
      )
    }
    setListProjects(lstProjects)
  }, [])

  return (
    <div className='top-page mt-36 md:mt-20 mb-10'>
      <div className='flex items-center justify-between mb-10'>
        <div className='list-navigation w-full hidden md:block mt-10 min-w-142'>
          <MenuNavigate />
        </div>
        <div className='hidden md:flex items-center border border-solid border-secondary-200 rounded-2xl p-3 mt-10 cursor-pointer'>
          <i className='text-sm fas fa-sliders-h mr-2'></i>
          <span className='whitespace-nowrap'>フィルター</span>
        </div>
      </div>

      {/* List Project */}
      <div className='list-project'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6'>
          {lstProjects.map((project: Project) => {
            return (
              <div key={project.id} className='project-item cursor-pointer'>
                <Swiper
                  pagination={true}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className='mySwiper'
                  slidesPerView={1}
                >
                  {project.photos.map((photo: any, index: number) => {
                    return (
                      <SwiperSlide key={index} className='w-100'>
                        <figure className='mb-3 relative pt-p-80'>
                          <img
                            className='w-full h-full object-cover rounded-2xl absolute top-0'
                            src={photo}
                            alt=''
                          />
                          <i className='fal fa-heart absolute top-4 right-4 text-xl text-white'></i>
                        </figure>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
                <p className='mb-2 font-bold truncate'>{project.title}</p>
                <div className='flex items-center justify-between'>
                  <div className='font-bold truncate'>
                    {project.description}
                  </div>
                  <div className='flex items-center'>
                    <i className='text-danger-200 text-xl fab fa-instagram mx-4'></i>
                    <div className='font-bold truncate'>
                      {project.price} 人以上
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
