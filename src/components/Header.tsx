import { useSearchParams } from 'react-router-dom'
import MenuNavigate from './MenuNavigate'

function Header() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  return (
    <header className='fixed top-0 left-0 right-0 z-1030 border-b border-solid border-secondary-200 bg-white'>
      {/* Mobile search */}
      <div className='md:hidden flex items-center h-36 px-6 flex-wrap'>
        <div className='mobile-search flex items-center w-full p-1 border border-solid border-secondary-200 rounded-3xl shadow-md cursor-pointer'>
          <i className='far fa-search px-4'></i>
          <div className='flex flex-col w-full min-w-43'>
            <span className='text-sm font-bold'>行き先は？</span>
            <div className='flex text-sm'>
              <div className='truncate'>どこでも</div>
              <div className='mx-1'>•</div>
              <div className='truncate'>週の指定なし</div>
              <div className='mx-1'>•</div>
              <div className='truncate'>ゲスト数を追加</div>
            </div>
          </div>
          <div
            style={{ marginRight: '2px' }}
            className='flex items-center justify-center flex-shrink-0 h-10 w-10 border border-solid border-secondary-200 rounded-full'
          >
            <i className='fas fa-sliders-h'></i>
          </div>
        </div>

        <div className='mobile-navigation w-full md:hidden'>
          <MenuNavigate />
        </div>
      </div>

      <div className='container hidden md:block'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <div className='logo flex-shrink-0 cursor-pointer'>
            <img src={require('../assets/images/mashup-logo.png')} alt='' />
          </div>

          {/* Search Input */}
          <div className='hover:shadow-md flex items-center min-w-63 p-1 mx-4 border border-solid border-secondary-200 rounded-3xl cursor-pointer transition-all duration-200 ease-linear'>
            {(() => {
              if (id) {
                return (
                  <span className='text-sm font-bold px-4 truncate w-full'>
                    検索をはじめる
                  </span>
                )
              } else {
                return (
                  <div className='flex items-center min-w-50'>
                    <span className='text-sm font-bold px-4 truncate'>
                      どこでも
                    </span>
                    <span className='text-sm font-bold px-4 truncate border-l border-r border-solid border-secondary-200'>
                      週の指定なし
                    </span>
                    <span className='text-sm px-4 truncate'>
                      ゲスト数を追加
                    </span>
                  </div>
                )
              }
            })()}
            <div className='flex items-center justify-center flex-shrink-0 h-10 w-10 bg-danger-300 rounded-full'>
              <i className='text-sm far fa-search text-white'></i>
            </div>
          </div>

          <div className='other-info flex items-center'>
            <div className='hover:bg-secondary py-2 px-3 rounded-3xl text-sm whitespace-nowrap cursor-pointer transition-all duration-200 ease-linear'>
              ゲストはこちら
            </div>
            <div className='flex items-center'>
              <div className='hover:bg-secondary flex items-center justify-center h-10 w-10 mr-3 rounded-full cursor-pointer transition-all duration-200 ease-linear'>
                <i className='far fa-globe'></i>
              </div>
              <div className='hover:shadow-md flex items-center p-1 rounded-3xl border border-solid border-secondary-200 cursor-pointer transition-all duration-200 ease-linear relative'>
                <i className='text-sm ml-2 mr-4 fas fa-bars'></i>
                <div className='user-avatar h-8 w-8 rounded-full relative'>
                  <div className='text-10 bg-danger-300 text-white h-4 w-4 flex items-center justify-center rounded-full absolute -top-1 -right-1'>
                    2
                  </div>
                  <img
                    className='w-full h-full object-cover rounded-full'
                    src={require('../assets/images/user-default.jpg')}
                    alt=''
                  />
                </div>
                {/* Sub Menu */}
                <div className='hidden sub-menu w-52 rounded-3xl p-2 bg-white shadow absolute right-0 top-12'>
                  <div className='py-1 px-2'>メッセージ</div>
                  <div className='py-1 px-2'>通知</div>
                  <div className='py-1 px-2'>予約</div>
                  <div className='py-1 px-2'>応募</div>
                  <div className='py-1 px-2'>お気に入り</div>
                  <div className='py-1 px-2'>アカウント</div>
                  <div className='py-1 px-2'>QRコード</div>
                  <div className='py-1 px-2'>ヘルプ</div>
                  <div className='py-1 px-2'>ログアウト</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
