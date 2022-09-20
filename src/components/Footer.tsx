import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className='border-t border-solid border-secondary-300 bg-secondary'>
      <div className='container py-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
          {/* Support */}
          <div className='py-4 border-b border-solid border-secondary-300 text-sm'>
            <p className='font-bold mb-3'>サポート</p>
            <NavLink className='mb-3 hover:underline' to=''>
              ヘルプセンター
            </NavLink>
            <NavLink className='mb-3 hover:underline' to=''>
              AirCover
            </NavLink>
            <NavLink className='mb-3 hover:underline' to=''>
              安全に関する情報
            </NavLink>
            <NavLink className='mb-3 hover:underline' to=''>
              障害のある方へのサポート
            </NavLink>
            <NavLink className='mb-3 hover:underline' to=''>
              キャンセルオプション
            </NavLink>
            <NavLink className='mb-3 hover:underline' to=''>
              Airbnbの新型コロナウイルスに対する取り組み
            </NavLink>
            <NavLink className='mb-3 hover:underline' to=''>
              近隣トラブルを報告する
            </NavLink>
          </div>

          {/* Community */}
          <div className='py-4 border-b border-solid border-secondary-300 text-sm'>
            <p className='font-bold mb-3'>コミュニティ</p>
            <NavLink className='mb-3 hover:underline' to=''>
              Airbnb.org：災害発生時の滞在先
            </NavLink>
            <NavLink className='mb-3 hover:underline' to=''>
              アフガン難民支援
            </NavLink>
            <NavLink className='mb-3 hover:underline' to=''>
              差別に対する取り組み
            </NavLink>
          </div>

          {/* Store */}
          <div className='py-4 border-b border-solid border-secondary-300 text-sm'>
            <p className='font-bold mb-3'>ホスティング</p>
            <NavLink className='mb-3 hover:underline' to=''>
              ホスティングをはじめる
            </NavLink>
            <NavLink className='mb-3 hover:underline' to=''>
              ホストのためのAirCover
            </NavLink>
            <NavLink className='mb-3 hover:underline' to=''>
              ホスト向けリソースを確認
            </NavLink>
            <NavLink className='mb-3 hover:underline' to=''>
              コミュニティフォーラムへ
            </NavLink>
            <NavLink className='mb-3 hover:underline' to=''>
              責任をもってホスティングする方法
            </NavLink>
          </div>

          {/* Airbnb */}
          <div className='py-4 border-b border-solid border-secondary-300 text-sm'>
            <p className='font-bold mb-3'>Airbnb</p>
            <NavLink className='mb-3 hover:underline' to=''>
              ニュースルーム
            </NavLink>
            <NavLink className='mb-3 hover:underline' to=''>
              新機能のご紹介
            </NavLink>
            <NavLink className='mb-3 hover:underline' to=''>
              Airbnb創業者からの手紙
            </NavLink>
            <NavLink className='mb-3 hover:underline' to=''>
              採用情報
            </NavLink>
            <NavLink className='mb-3 hover:underline' to=''>
              株主・投資家のみなさまへ
            </NavLink>
          </div>
        </div>

        <div className='pt-4 flex items-center justify-between flex-wrap'>
          <div className='flex items-center mb-3 text-sm lg:order-2'>
            <i className='mr-5 cursor-pointer far fa-globe'></i>
            <p className='hover:underline cursor-pointer font-bold mr-5'>
              日本語 (JP)
            </p>
            <p className='cursor-pointer font-bold mr-2'>¥</p>
            <p className='hover:underline cursor-pointer font-bold mr-8'>JPY</p>
            <div className='social-network flex items-center'>
              <div className='flex items-center justify-center w-8 h-8 mr-2 cursor-pointer'>
                <i className='text-base fab fa-facebook-f'></i>
              </div>
              <div className='flex items-center justify-center w-8 h-8 mr-2 cursor-pointer'>
                <i className='text-base fab fa-twitter'></i>
              </div>
              <div className='flex items-center justify-center w-8 h-8 cursor-pointer'>
                <i className='text-base fab fa-instagram-square'></i>
              </div>
            </div>
          </div>

          <div className='text-sm'>
            <p>
              Airbnb Global Services Limited
              観光庁長官(01)第S0001号(2018年6月15日-2023年6月14日)
            </p>
            <div className='md:flex items-center'>
              <p className='md:mr-2'>© 2022 Airbnb, Inc.</p>
              <div className='flex flex-wrap'>
                <NavLink className='hover:underline truncate' to=''>
                  プライバシー
                </NavLink>
                <div className='mx-2'>•</div>
                <NavLink className='hover:underline truncate' to=''>
                  利用規約
                </NavLink>
                <div className='mx-2'>•</div>
                <NavLink className='hover:underline truncate' to=''>
                  サイトマップ
                </NavLink>
                <div className='mx-2'>•</div>
                <NavLink className='hover:underline truncate' to=''>
                  企業情報
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
