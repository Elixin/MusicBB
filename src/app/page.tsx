
import Nav from './ui/nav/nav'
import ShringkingBar from './ui/shrinking-bar/shrinking-bar'



export default function Home() {

  return (
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
