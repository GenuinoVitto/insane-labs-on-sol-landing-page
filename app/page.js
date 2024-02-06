import Image from 'next/image'
import gif from './Vial_Upscaled.gif'
import x from './X.webp'
import tele from './tele.png'
import chart from './chart.png'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Insein title */}
      <div>
        <h1 className="font-spice text-8xl m-24 bg-neutral-900 p-10 rounded-2xl outline-dashed outline-orange-300 drop-shadow-2xl">Insane Labs on SOL</h1>
      </div>

      <span className="flex p-20 space-x-20 w-screen justify-center">
        <Image className="hover:opacity-25 ease-in-out transition-all animate-pulse" src={x} height={100} width={100}></Image>
        <Image className="hover:opacity-25 ease-in-out transition-all animate-pulse" src={tele} height={100} width={100}></Image>
        <Image className="hover:opacity-25 ease-in-out transition-all animate-pulse" src={chart} height={100} width={100}></Image>
      </span>

      {/* Insein description */}
      <div>
          <br></br>
          <h3 class="font-bungee text-center text-2xl drop-shadow-xl text-stone-300">
            Insane Scientists cooking it up on the Solana Ecosystem. <br></br> 
            Smoke $METH for various rewards and burning events. <br></br> <br></br>
            <span class="text-neutral-300">
              Check us out on X and telegram for the latest updates!
            </span>
          </h3>
          <br></br>
          <br></br>
      </div>
      {/* <Image src="/app/Vial_Upscaled.gif" width={500} height={500}/> */}
      {/* Insein body */}
      <div class="m-8">
        <p class="font-spice text-center text-6xl">Coming Soon!</p>
        
        <div class="flex m-12 h-auto w-auto justify-center items-center drop-shadow-2xl">
          <Image class="rounded-2xl"src={gif} height={300} width={300}/>
        </div>
        {/* Insein Pledge Tweet */}
        <a class="outline-double cursor-pointer drop-shadow-2xl m-20 flex btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-white bg-neutral-900 ease-out hover:translate-y-1 transition-all rounded-2xl" href="https://twitter.com/intent/tweet?text=I%20hereby%20pledge%20allegiance%20to%20@InseinLabs_SOL%20and%20their%20lab.%20Join%20us%20and%20don't%20miss%20out%20on%20the%20next%20%24SOL%20🧪🧑‍🔬&url=" target="_blank">
          <a class="font-spice text-l drop-shadow-2xl m-10 cursor-pointer" href="https://twitter.com/intent/tweet?text=I%20hereby%20pledge%20allegiance%20to%20@InseinLabs_SOL%20and%20their%20lab.%20Join%20us%20and%20don't%20miss%20out%20on%20the%20next%20%24SOL%20🧪🧑‍🔬&url=" target="_blank" rel="nofollow">PLEDGE ALLEGIANCE ON X</a>  
        </a>
      </div>

      <footer class="mb-auto w-screen bg-white shadow dark:bg-gray-900">
          <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div class="sm:flex sm:items-center sm:justify-between">
                  <a href="https://twitter.com/InsaneLabs_SOL" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                      <Image class="rounded-2xl"src={gif} height={30} width={30}/>
                      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Insane Labs</span>
                  </a>
                  <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                      <li>
                          <a href="https://twitter.com/InsaneLabs_SOL" target="_blank" class="hover:underline me-4 md:me-6">X</a>
                      </li>
                      <li>
                          <a href="https://t.me/InsaneLabsOnSOL" target="_blank" class="hover:underline">Telegram</a>
                      </li> 
                  </ul>
              </div>
              <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" class="hover:underline">Insane Labs on SOL</a>. All Rights Reserved.</span>
          </div>
      </footer>
    </main>
    
  )
}
