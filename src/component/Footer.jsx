import logo from '../assets/img/logo.svg'

export default function Footer() {
    return (
        

        <footer class="bg-slate-900 mt-20">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                    <img src={logo} alt="logo" className='pt-5 md:w-20 md:h-20 ml-5 '  />
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold uppercase Specialtext">Resources</h2>
                            <ul class="text-white font-medium">
                                <li class="mb-4">
                                    <a href="" class="hover:underline">Flowbite</a>
                                </li>
                                <li>
                                    <a href="" class="hover:underline">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold  uppercase Specialtext">Follow us</h2>
                            <ul class="font-medium text-white" >
                                <li class="mb-4">
                                    <a href="#" class="hover:underline ">Twitter</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold  uppercase Specialtext">Legal</h2>
                            <ul class="text-white font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>


            </div>
        </footer>

    )
}
