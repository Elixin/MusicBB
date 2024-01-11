
import Nav from './ui/nav/nav'
import ShringkingBar from './ui/shrinking-bar/shrinking-bar'



export default function Home() {

  return (
    // <div>
    //   <div className="absolute z-40 ml-0 mt-0 bg-gray-400">z-40</div>
    //     <div className="absolute z-30 ml-2 mt-2 bg-gray-500">z-30</div>
    //     <div className="absolute z-20 ml-4 mt-4 bg-gray-600">z-20</div>
    //     <div className="absolute z-10 ml-6 mt-6 bg-gray-700">z-10</div>
    //     <div className="absolute z-0 ml-8 mt-8 bg-gray-800">z-0</div>
    // </div>
    <div className='flex'>
      <div className='w-[16%] h-screen bg-gray-50'>
        <Nav />
      </div>
      <div className='w-[84%] h-screen bg-white'>
        <ShringkingBar/>
      </div>
    </div>
  )
}
