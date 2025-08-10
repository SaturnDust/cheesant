import heroImage from '../assets/hero.png'
import { motion } from 'motion/react'
import { Navbar } from './Navbar'
import cheese1 from "../assets/1_cheese.jpg"
import cheese2 from "../assets/2_cheese.jpg"
import cheese3 from "../assets/3_cheese.jpg"
import cheese4 from "../assets/4_cheese.jpg"
import chef1 from "../assets/1_chef.png"
import chef2 from "../assets/2_chef.png"
import chef3 from "../assets/3_chef.png"
import ctaImage from "../assets/image_cta.png"
import { FaInstagram as InstagramIcon } from "react-icons/fa6";
import { FaFacebook as FacebookIcon } from "react-icons/fa";
import { MdEmail as EmailIcon } from "react-icons/md";


export function LandingPage() {
    return (
        <div className="font-onest">

            <header className="h-[100vh] bg-cover bg-center text-primaryWhite"
                style={{ backgroundImage: `url('${heroImage}')` }}>

                {/* Navbar di dalam header */}
                <Navbar />
                <div className="flex justify-center items-center h-[calc(100vh-5rem)]">
                    <div className="text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-[30px] font-bold mb-4 leading-[1.1]
                            md:text-[60px]"
                        >
                            Where Every Bite Tells a <br />
                            Creamy Story
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                            className="text-lg"
                        >
                            First Artisan, homemade cheese crafted with passion in Jakarta
                        </motion.p>
                    </div>
                </div>

            </header>

            <section>
                <div className="flex flex-col md:flex-row gap-8 p-12 md:py-40 max-w-300 mx-auto">
                    {/* Left Section: Title and Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="md:w-1/2 flex justify-center flex-col text-cocoa">
                        <h2 className="text-6xl font-bold mb-10 md:mb-20">Our Product Specialty</h2>
                        <hr />
                        <p className="text-gray-600 pt-5">
                            From creamy classics to bold new flavors, our cheeses are crafted with
                            care and passion. Every wheel, block, and slice is made using
                            time-honored techniques and the finest ingredients. Whether you crave a
                            smooth and mellow taste or a rich and complex bite, we have something
                            to delight your palate. Discover the perfect cheese for every moment.
                        </p>
                    </motion.div>

                    {/* Right Section: Product Grid */}
                    <div className="md:w-1/2 grid grid-cols-2 gap-4 max-w-200 md:ml-20 text-mocha">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="relative w-full pt-[100%] rounded-lg overflow-hidden">
                                <img
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    src={cheese1}
                                    alt="Citrus Cream cheese"
                                />
                            </div>
                            <div className="mt-2 flex items-center justify-between">
                                <h3 className="font-semibold text-lg">Citrus Cream</h3>
                                {/* Your icon component goes here */}
                                {/* <YourIconComponent /> */}
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="relative w-full pt-[100%] rounded-lg overflow-hidden">
                                <img
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    src={cheese2}
                                    alt="Rosemary Whisper cheese"
                                />
                            </div>
                            <div className="mt-2 flex items-center justify-between">
                                <h3 className="font-semibold text-lg">Rosemary Whisper</h3>
                                {/* Your icon component goes here */}
                                {/* <YourIconComponent /> */}
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.3 }}
                            viewport={{ once: true, amount: 0.2 }}

                        >
                            <div className="relative w-full pt-[100%] rounded-lg overflow-hidden">
                                <img
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    src={cheese3}
                                    alt="Smoked Cheddar cheese"
                                />
                            </div>
                            <div className="mt-2 flex items-center justify-between">
                                <h3 className="font-semibold text-lg">Smoked Cheddar</h3>
                                {/* Your icon component goes here */}
                                {/* <YourIconComponent /> */}
                            </div>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.5 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="relative w-full pt-[100%] rounded-lg overflow-hidden">
                                <img
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    src={cheese4}
                                    alt="Red Brie Blossom cheese"
                                />
                            </div>
                            <div className="mt-2 flex items-center justify-between">
                                <h3 className="font-semibold text-lg">Red Brie Blossom</h3>
                                {/* Your icon component goes here */}
                                {/* <YourIconComponent /> */}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section>
                <div className='bg-cover bg-center text-primaryWhite'
                    style={{ backgroundImage: `url(${ctaImage})` }}>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className='flex flex-col justify-center items-end max-w-300 mx-auto h-full'>
                        <h1 className='text-4xl md:text-[10rem] md:leading-40 font-bold text-right mt-10 md:mt-10'>
                            Taste a Fresh<br />
                            Cheese Now in <br />Our Store</h1>
                        <p className='text-right mr-5 text-sm my-5'>pssstt or just...</p>
                        <a className='cursor-pointer border-primaryWhite hover:bg-primaryWhite hover:text-jetblack mx-3 mb-15 border px-5 py-2 rounded-full transition duration-200'>Order Here</a>
                    </motion.div>

                </div>
            </section>

            <section className="px-6 py-10 md:py-20 max-w-300 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-2">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        key={1} className="relative group">

                        <img
                            src={chef1}
                            alt={chef1}
                            className="w-full h-64 md:h-[500px] object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>


                        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white tracking-widest text-sm md:text-base">
                            FEELS
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        key={2} className="relative group">

                        <img
                            src={chef2}
                            alt={chef2}
                            className="w-full h-64 md:h-[500px] object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>


                        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white tracking-widest text-sm md:text-base">
                            LIKE
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.4 }}
                        viewport={{ once: true, amount: 0.2 }}
                        key={3} className="relative group">

                        <img
                            src={chef3}
                            alt={chef3}
                            className="w-full h-64 md:h-[500px] object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>


                        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white tracking-widest text-sm md:text-base">
                            HOME
                        </div>
                    </motion.div>

                </div>

                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 2 }}
                        viewport={{ once: true, amount: 0.2 }}
                className="max-w-3xl mx-auto text-center mt-12 text-cocoa">
                    <h2 className="text-2xl md:text-3xl font-semibold text-brown-900">
                        Our Cheese Maker Once Said
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        From milk’s quiet dawn to curd’s slow bloom, homemade cheese is patience made tangible. Each slice holds the echo of careful hands, and the comfort of a craft born close to home.
                    </p>
                </motion.div>
            </section>

            <footer className='bg-jetblack'>
                <div className=' h-100 max-w-300 mx-auto'>
                    <div className='pt-15 px-20'>
                        <div className='mb-5'>
                            {/* Logo */}
                            <a
                                className={`font-bold text-[25px] cursor-pointer text-primaryWhite`}
                            >
                                Cheesant.
                            </a>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <p className='text-primaryWhite'>42 Meadow Lane, York,<br /> North Yorkshire, YO24 1AB,<br /> United Kingdom</p>
                            </div>
                            <div>
                                <p className='text-primaryWhite'>What to order some Cheese  ?<br /><span className='font-bold'>+44 7700 900123</span></p>
                            </div>
                            <div>
                                <p className='text-primaryWhite'>Check Our Social Media</p>
                                <div className='flex mt-2'>
                                    <InstagramIcon className='text-primaryWhite text-2xl mr-3' />
                                    <FacebookIcon className='text-primaryWhite text-2xl mx-2' />
                                    <EmailIcon className='text-primaryWhite text-2xl mx-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center py-3'>
                    <p className='text-primaryWhite text-[10px]'>© 2025 Cheesant – Crafted with care. All rights reserved.</p>
                </div>
            </footer>

        </div>
    )
}
