import React from 'react'


export const Beranda = () => {

    return (
        <div>
            {/* <!-- Header --> */}


            {/* <!-- Hero Section --> */}
            <section className=" bg-gradient-to-b from-[#29ADB2] to-[#124A4C] text-white py-20">
                <div className="container mx-auto px-6 text-center mt-20">
                    <img src="assets/images/beranda.png" alt="Hero Image" className="mx-auto mb-4 w-1/3 h-1/3" />
                    <h1 className="text-4xl font-bold mb-2">Selamat Datang <br />
                        di Website konsultasi Fiqih Keluarga</h1>
                    <p className="mb-6 text-gray-200">Di Bimbing Dengan Ilmu Fiqh sesuai Sunnah </p>
                    {/* <a href="#" className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">Get Started</a> */}
                </div>
            </section>

            {/* <!-- Features Section --> */}
            <section className="py-20" style={{ backgroundImage: "url('assets/images/bg-ustadz')" }}>
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10 border-l-4 border-[#29ADB2] pl-2">Pilihan <span className='text-[#29ADB2]'>Ustadz</span></h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <img src="assets/images/ustadz/ustadz-adi-hidayat.jpg" alt="Hero Image" className="mx-auto mb-4 w-1/3 h-1/3 rounded-full" />
                                <h3 className="text-xl font-bold mb-2 text-center">Ustadz Adi Hidayat</h3>
                                <p className="text-gray-700 mb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, ipsam. Omnis deleniti tempora numquam distinctio eius at sit ratione quasi.</p>
                                <a href="#" className="bg-[#29ADB2] text-white px-20 py-2 rounded-3xl font-semibold hover:bg-[#124A4C]">Konsultasi</a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <div className=" text-blue-500 text-3xl mb-4">⚡</div>
                                <h3 className="text-xl font-bold mb-2">Fitur Unggulan 2</h3>
                                <p className="text-gray-700">Deskripsi singkat mengenai fitur unggulan kedua.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <div className="text-blue-500 text-3xl mb-4">🚀</div>
                                <h3 className="text-xl font-bold mb-2">Fitur Unggulan 3</h3>
                                <p className="text-gray-700">Deskripsi singkat mengenai fitur unggulan ketiga.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-6 text-center">
                    <p>&copy; 2024 Brand Name. All rights reserved.</p>
                </div>
            </footer>
        </div >
    )
}
