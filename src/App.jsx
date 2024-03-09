import { useState, useRef } from 'react'
import './App.css'
import parkNoCloudBg from './assets/park-no-cloud.png'
import cloud from './assets/cloud.png'
import envelope from './assets/envelope.png'
import megaphone from './assets/megaphone.png'
import paper from './assets/paper.webp'
import animatedCat from './assets/catGifBrown.gif'

function App() {
  const [isLetterOpened, setIsLetterOpened] = useState(false)
  const [isNameDialogOpened, setIsNameDialogOpened] = useState(false)
  const [name, setName] = useState('')

  return (
    <>
      <div className='charmonman-regular w-full h-screen bg-black flex justify-center items-center overflow-hidden'>
				<div className='relative w-full lg:w-1/3 h-full bg-blue-300 bg-cover' style={{ backgroundImage: `url(${parkNoCloudBg})`, height: 'calc(100vh - 80px)' }}>
					<img src={cloud} alt="" className='animate-pulse w-full absolute -left-10 top-0'/>
					<img src={animatedCat} alt="" onClick={() => setIsNameDialogOpened(true)} className={`scale-75 absolute -bottom-10 cursor-pointer`} width={800} height={600} />
					<img src={envelope} alt="" onClick={() => setIsLetterOpened(true)} className='w-1/6 absolute top-8 right-6 contrast-120 brightness-125 cursor-pointer animate-waving-envelope'/>
					<img src={megaphone} alt="" className='w-12 absolute top-8 left-6 cursor-pointer'/>
					{	isLetterOpened &&
						<div className='relative w-full h-screen'>
							<div className='absolute top-0 left-0 bg-black bg-opacity-70 w-full h-screen'></div>
							<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 bg-amber-700 bg-opacity-30 bg-cover z-30' style={{ backgroundImage: `url(${paper})` }}>
								<div className='w-full h-full relative flex items-center justify-between flex-wrap p-6'>
									<div>
										<h1>Hi, {name}!</h1>
										<div className='mt-8 flex gap-4 flex-col'>
											<p>Thank&apos;s for being gorgeous, slay, and kind to everyone!</p>
											<p>I know life doesn&apos;t always good, but you are the one that make it good even better</p>
											<p>Appreciate yourself, your works, and every lil step you take. You worth the world, gorgeous!</p>
											<p>Let&apos;s create more amazing moments till forever!</p>
										</div>
									</div>
									<div className='w-full flex flex-col items-end justify-end'>
										<p>your gurl,</p>
										<p>alysialfi </p>
									</div>
								</div>
							</div>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => setIsLetterOpened(false)} className="cursor-pointer text-white absolute z-30 top-32 right-10 w-8 h-8">
								<path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
							</svg>
						</div>
					}
					{	isNameDialogOpened &&
						<div className='relative w-full h-screen'>
							<div className='absolute top-0 left-0 bg-black bg-opacity-70 w-full h-screen'></div>
							<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 bg-amber-700 bg-opacity-30 bg-cover z-30' style={{ backgroundImage: `url(${paper})` }}>
								<div className='w-full h-full relative flex items-center justify-between flex-wrap p-6'>
									<div>
										<div className='mt-8 flex gap-4 flex-col'>
											<p>Hi there, I&apos;m Emon 😽</p>
											<p>May I know your name, pretty?</p>
											<div className='w-full flex gap-2'>
												<p>My name is: </p>
												<input type="text" value={name} onChange={(e) => setName(e.target.value)} className='h-6 bg-transparent focus:outline-none border-b border-black w-2/4'/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => setIsNameDialogOpened(false)} className="cursor-pointer text-white absolute z-30 top-32 right-10 w-8 h-8">
								<path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
							</svg>
						</div>
					}
				</div>
			</div>
    </>
  )
}

export default App
