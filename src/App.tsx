import { UpdateFollower } from 'react-mouse-follower'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import Service from './components/Services/Service'

function App() {

  return (
    <main className='overflow-x-hidden'>
    <UpdateFollower mouseOptions={{
      backgroundColor: "white",
      zIndex: 999,
      followSpeed: 1.5,
    }}>
      <Navbar/>
      <Hero/>
    </UpdateFollower>
    <Service/>
    </main>
  )
}

export default App


// import { UpdateFollower } from 'react-mouse-follower'
// import './App.css'
// import Navbar from './components/NavBar/Navbar'
// import Hero from './components/Hero/Hero'
// import { lazy,Suspense } from 'react'

// const MyComponent = lazy(() => import('./components/Hero/Hero'))
// function App() {

//   return (
//     <>
//     <UpdateFollower mouseOptions={{
//       backgroundColor: "white",
//       zIndex: 999,
//       followSpeed: 1.5,
//     }}>
//       <Navbar/>
//    <Suspense fallback={<div className='text-6xl text-white'>Loading...</div>}>
//   <MyComponent/>
//   </Suspense>    
//   </UpdateFollower>
//     </>
//   )
// }

// export default App
