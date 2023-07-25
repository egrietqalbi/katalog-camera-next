import React from "react";

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  const [showModal4, setShowModal4] = React.useState(false);
  const [showModal5, setShowModal5] = React.useState(false);
  const [showModal6, setShowModal6] = React.useState(false);

  const data = [
    {
      status: true,
      nama: "Sony A7 mark ii",
      harga: "Rp. 1.200.000",
      deskripsi: ["tombol berfungsi dengan baik", "tulisan jelas"],
      kelengkapan: ["box", "cas ada", "lensa lengkap"],
      gambar: "s.jpeg",
    },
    {
      status: true,
      nama: "Nikon D3200",
      harga: "Rp. 2.000.000",
      deskripsi: ["tombol 100% berfungsi dengan baik", "tulisan jelas"],
      kelengkapan: ["box", "cas ada", "lensa lengkap"],
      gambar: "d3200.png",
    },
    {
      status: true,
      nama: "lumix g7",
      harga: "Rp. 5.500.000",
      deskripsi: ["tombol 100% berfungsi dengan baik", "tulisan jelas"],
      kelengkapan: ["box", "cas ada", "lensa lengkap"],
      gambar: "g7.png",
    },
    {
      status: true,
      nama: "canon m100",
      harga: "Rp. 4.700.000",
      deskripsi: ["tombol 100% berfungsi dengan baik", "tulisan jelas"],
      kelengkapan: ["box", "cas ada", "lensa lengkap"],
      gambar: "m100.png",
    },
    {
      status: true,
      nama: "sony a5100",
      harga: "Rp. 4.800.000",
      deskripsi: ["tombol 100% berfungsi dengan baik", "tulisan jelas"],
      kelengkapan: ["box", "cas ada", "lensa lengkap"],
      gambar: "a5100.png",
    },
    {
      status: true,
      nama: "canon Eosm3",
      harga: "Rp. 4.500.000",
      deskripsi: ["tombol 100% berfungsi dengan baik", "tulisan jelas"],
      kelengkapan: ["box", "cas ada", "lensa lengkap"],
      gambar: "M3.png",
    },
  ];

  return (
    <div>
      {/* navbar */}
      <section id="Home" className="bg-black text-white">
        <nav
          class="flex justify-around py-4 bg-black
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10"
        >
          <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
            <a className="flex items-center">
              <img src="logo.jpg" className="h-8 mr-3" alt="HICAM Logo" />
            </a>
            <span class="font-semibold text-xl tracking-tight">HI CAMERA</span>
          </div>

          <label
            class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
            for="menu-btn"
          >
            <span class="navicon bg-grey-darkest flex items-center relative"></span>
          </label>

          <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
            <li class="border-t md:border-none">
              <a
                href="#Home"
                class="block md:inline-block px-4 py-3 no-underline text-f8fafc hover:text-blue"
              >
                Home
              </a>
            </li>

            <li class="border-t md:border-none">
              <a
                href="#Katalog"
                class="block md:inline-block px-4 py-3 no-underline text-white hover:text-grey-darker"
              >
                Katalog
              </a>
            </li>

            <li class="border-t md:border-none">
              <a
                href="#Review"
                class="block md:inline-block px-4 py-3 no-underline text-white hover:text-grey-darker"
              >
                Review
              </a>
            </li>

            <li class="border-t md:border-none">
              <a
                href="#About"
                class="block md:inline-block px-4 py-3 no-underline text-white hover:text-grey-darker"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </section>

      {/* banner */}
      <section className="text-white bg-black body-font">
        <div className="container mx-auto flex px-15 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font lg:text-4xl text-3xl mb-4 font-medium text-white">
              HI CAMERA
            </h1>
            <p className="mb-8 lg:text-xl leading-relaxed">
              “Menjual kamera DSLR maupun mirrorless terjangkau dan terpercaya“
            </p>
            <div className="flex justify-center">
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                <a href="https://wa.me/+6285257354446">Hubungi Penjual</a>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:pl-2 lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="hero4.jpg"
            />
          </div>
        </div>
      </section>

      {/* card produk katalog*/}
      <section id="Katalog" className="text-white bg-black body-font">
        <div className="max-w-x text-center justify-center mx-auto">
          <h2 className="text-3xl font-semibold text-white lg:text-4xl">
            KATALOG
          </h2>
        </div>
        {/* card produk */}
        <div className="container bg-grey-600 px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-evenly -m-4 ">
            {/*produk 1 */}
            <div className="p-8 text-gray-500 bg-white shadow-xl border border-gray-100 rounded-2xl font-medium mt-6">
              <a
                class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                href="#"
              >
                <img
                  class="object-cover w-60 h-40 px-1 py-0 my-10 mx-1"
                  src={data[0].gambar}
                  alt="product image"
                />
                {data[0].status ? (
                  <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    NEW
                  </span>
                ) : null}
              </a>
              <div className="mt-4">
                <h5 class="text-xl tracking-tight text-slate-900">
                  {data[0].nama}
                </h5>
                <p>
                  <span class="text-3xl font-bold text-slate-900">
                    {data[0].harga}
                  </span>
                </p>
                <button
                  data-modal-target="staticModal"
                  data-modal-toggle="staticModal"
                  type="button"
                  onClick={() => setShowModal(true)}
                  href="#staticModal"
                  className="bg-slate-900 hover:bg-gray-700 text-white font-bold my-4 mx-11 py-3 px-16 rounded"
                >
                  DETAIL
                </button>
                {showModal ? (
                  <div id="modal1">
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">canon</h3>
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                          </div>
                          {/*body*/}
                          <div className="grid grid-cols-2">
                            <div className="grid grid-cols-1 relative p-6 flex-auto ">
                              <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src="lens.jpg"
                              />
                            </div>
                            <div className="grid grid-cols-3">
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Tipe : bekas Tipe : bekas Tipe : bekas Tipe :
                                bekas
                                <h1>Rp.1.200.000</h1>
                              </p>
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Tipe : bekas Tipe : bekas Tipe : bekas Tipe :
                                bekas
                              </p>
                            </div>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              <a href="https://wa.me/+6285257354446">
                                Hubungi Penjual
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </div>
                ) : null}
              </div>
            </div>
            {/*produk 2 */}
            <div className="p-8 text-gray-500 bg-white shadow-xl border border-gray-100 rounded-2xl font-medium mt-6">
              <a
                class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                href="#"
              >
                <img
                  class="object-cover w-60 h-40 px-1 py-0 my-10 mx-1"
                  src={data[1].gambar}
                  alt="product image"
                />
                {data[1].status ? (
                  <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    NEW
                  </span>
                ) : null}
              </a>
              <div className="mt-4">
                <h5 class="text-xl tracking-tight text-slate-900">
                  {data[1].nama}
                </h5>
                <p>
                  <span class="text-3xl font-bold text-slate-900">
                    {data[1].harga}
                  </span>
                </p>
                <button
                  data-modal-target="staticModal"
                  data-modal-toggle="staticModal"
                  type="button"
                  onClick={() => setShowModal(true)}
                  href="#staticModal"
                  className="bg-slate-900 hover:bg-gray-700 text-white font-bold my-4 mx-11 py-3 px-16 rounded"
                >
                  DETAIL
                </button>
                {showModal2 ? (
                  <div id="modal1">
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              {data[1].nama}
                            </h3>
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal2(false)}
                            >
                              Close
                            </button>
                          </div>
                          {/*body*/}
                          <div className="grid grid-cols-2">
                            <div className="grid grid-cols-1 relative p-6 flex-auto ">
                              <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src={data[1].gambar}
                              />
                            </div>
                            <div className="grid grid-cols-3">
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Tipe : {data[1].deskripsi}
                                <h1>{data[1].harga}</h1>
                              </p>
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Tipe : {data[1].kelengkapan}
                              </p>
                            </div>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal2(false)}
                            >
                              <a href="https://wa.me/+6285257354446">
                                Hubungi Penjual
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </div>
                ) : null}
              </div>
            </div>
            {/*produk 3 */}
            <div className="p-8 text-gray-500 bg-white shadow-xl border border-gray-100 rounded-2xl font-medium mt-6">
              <a
                class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                href="#"
              >
                <img
                  class="object-cover w-60 h-40 px-1 py-0 my-10 mx-1"
                  src={data[2].gambar}
                  alt="product image"
                />
                {data[2].status ? (
                  <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    NEW
                  </span>
                ) : null}
              </a>
              <div className="mt-4">
                <h5 class="text-xl tracking-tight text-slate-900">
                  {data[2].nama}
                </h5>
                <p>
                  <span class="text-3xl font-bold text-slate-900">
                    {data[2].harga}
                  </span>
                </p>
                <button
                  data-modal-target="staticModal"
                  data-modal-toggle="staticModal"
                  type="button"
                  onClick={() => setShowModal3(true)}
                  href="#staticModal"
                  className="bg-slate-900 hover:bg-gray-700 text-white font-bold my-4 mx-11 py-3 px-16 rounded"
                >
                  DETAIL
                </button>
                {showModal3 ? (
                  <div id="modal1">
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              {data[2].nama}
                            </h3>
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal3(false)}
                            >
                              Close
                            </button>
                          </div>
                          {/*body*/}
                          <div className="grid grid-cols-2">
                            <div className="grid grid-cols-1 relative p-6 flex-auto ">
                              <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src={data[2].gambar}
                              />
                            </div>
                            <div className="grid grid-cols-3">
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Tipe : {data[2].deskripsi}
                                <h1>{data[2].harga}</h1>
                              </p>
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Tipe : {data[2].kelengkapan}
                              </p>
                            </div>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal3(false)}
                            >
                              <a href="https://wa.me/+6285257354446">
                                Hubungi Penjual
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </div>
                ) : null}
              </div>
            </div>
            {/*produk 4 */}
            <div className="p-8 text-gray-500 bg-white shadow-xl border border-gray-100 rounded-2xl font-medium mt-6">
              <a
                class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                href="#"
              >
                <img
                  class="object-cover w-60 h-40 px-1 py-0 my-10 mx-1"
                  src={data[3].gambar}
                  alt="product image"
                />
                {data[3].status ? (
                  <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    NEW
                  </span>
                ) : null}
              </a>
              <div className="mt-4">
                <h5 class="text-xl tracking-tight text-slate-900">
                  {data[3].nama}
                </h5>
                <p>
                  <span class="text-3xl font-bold text-slate-900">
                    {data[3].harga}
                  </span>
                </p>
                <button
                  data-modal-target="staticModal"
                  data-modal-toggle="staticModal"
                  type="button"
                  onClick={() => setShowModal4(true)}
                  href="#staticModal"
                  className="bg-slate-900 hover:bg-gray-700 text-white font-bold my-4 mx-11 py-3 px-16 rounded"
                >
                  DETAIL
                </button>
                {showModal4 ? (
                  <div id="modal1">
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              {data[3].nama}
                            </h3>
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal4(false)}
                            >
                              Close
                            </button>
                          </div>
                          {/*body*/}
                          <div className="grid grid-cols-2">
                            <div className="grid grid-cols-1 relative p-6 flex-auto ">
                              <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src={data[3].gambar}
                              />
                            </div>
                            <div className="grid grid-cols-3">
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Tipe : {data[3].deskripsi}
                                <h1>{data[3].harga}</h1>
                              </p>
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Tipe : {data[3].kelengkapan}
                              </p>
                            </div>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal4(false)}
                            >
                              <a href="https://wa.me/+6285257354446">
                                Hubungi Penjual
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </div>
                ) : null}
              </div>
            </div>
            {/*produk 5 */}
            <div className="p-8 text-gray-500 bg-white shadow-xl border border-gray-100 rounded-2xl font-medium mt-6">
              <a
                class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                href="#"
              >
                <img
                  class="object-cover w-60 h-40 px-1 py-0 my-10 mx-1"
                  src={data[4].gambar}
                  alt="product image"
                />
                {data[4].status ? (
                  <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    NEW
                  </span>
                ) : null}
              </a>
              <div className="mt-4">
                <h5 class="text-xl tracking-tight text-slate-900">
                  {data[4].nama}
                </h5>
                <p>
                  <span class="text-3xl font-bold text-slate-900">
                    {data[4].harga}
                  </span>
                </p>
                <button
                  data-modal-target="staticModal"
                  data-modal-toggle="staticModal"
                  type="button"
                  onClick={() => setShowModal5(true)}
                  href="#staticModal"
                  className="bg-slate-900 hover:bg-gray-700 text-white font-bold my-4 mx-11 py-3 px-16 rounded"
                >
                  DETAIL
                </button>
                {showModal5 ? (
                  <div id="modal1">
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              {data[4].nama}
                            </h3>
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal5(false)}
                            >
                              Close
                            </button>
                          </div>
                          {/*body*/}
                          <div className="grid grid-cols-2">
                            <div className="grid grid-cols-1 relative p-6 flex-auto ">
                              <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src={data[4].gambar}
                              />
                            </div>
                            <div className="grid grid-cols-3">
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Tipe : {data[4].deskripsi}
                                <h1>{data[4].harga}</h1>
                              </p>
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Tipe : {data[4].kelengkapan}
                              </p>
                            </div>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal5(false)}
                            >
                              <a href="https://wa.me/+6285257354446">
                                Hubungi Penjual
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </div>
                ) : null}
              </div>
            </div>
            {/*produk 6 */}
            <div className="p-8 text-gray-500 bg-white shadow-xl border border-gray-100 rounded-2xl font-medium mt-6">
              <a
                class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                href="#"
              >
                <img
                  class="object-cover w-60 h-40 px-1 py-0 my-10 mx-1"
                  src={data[5].gambar}
                  alt="product image"
                />
                {data[5].status ? (
                  <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    NEW
                  </span>
                ) : null}
              </a>
              <div className="mt-4">
                <h5 class="text-xl tracking-tight text-slate-900">
                  {data[5].nama}
                </h5>
                <p>
                  <span class="text-3xl font-bold text-slate-900">
                    {data[5].harga}
                  </span>
                </p>
                <button
                  data-modal-target="staticModal"
                  data-modal-toggle="staticModal"
                  type="button"
                  onClick={() => setShowModal6(true)}
                  href="#staticModal"
                  className="bg-slate-900 hover:bg-gray-700 text-white font-bold my-4 mx-11 py-3 px-16 rounded"
                >
                  DETAIL
                </button>
                {showModal6 ? (
                  <div id="modal1">
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              {data[5].nama}
                            </h3>
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal6(false)}
                            >
                              Close
                            </button>
                          </div>
                          {/*body*/}
                          <div className="grid grid-cols-2">
                            <div className="grid grid-cols-1 relative p-6 flex-auto ">
                              <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src={data[5].gambar}
                              />
                            </div>
                            <div className="grid grid-cols-3">
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Tipe : {data[5].deskripsi}
                                <h1>{data[5].harga}</h1>
                              </p>
                              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Tipe : {data[5].kelengkapan}
                              </p>
                            </div>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal6(false)}
                            >
                              <a href="https://wa.me/+6285257354446">
                                Hubungi Penjual
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review*/}
      <section id="Review" className="text-white bg-black body-font">
        <div className="max-w-x text-center justify-center mx-auto">
          <h2 className="text-3xl font-semibold text-white lg:text-4xl">
            REVIEW
          </h2>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {/*1*/}
            <blockquote className="rounded-lg bg-white p-8">
              <div className="flex items-center gap-4">
                <div>
                  <div class="flex items-center space-x-1">
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>

                  <p className="mt-1 text-lg font-medium text-black">
                    Mariadi Sinaga
                  </p>
                </div>
              </div>
              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-black">
                barang bagus sesuai gambar,meski second namun tetap berfungsi
                dengan baik.
              </p>
            </blockquote>

            {/*2*/}
            <blockquote className="rounded-lg bg-white p-8">
              <div className="flex items-center gap-4">
                <div>
                  <div class="flex items-center space-x-1">
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>

                  <p className="mt-1 text-lg font-medium text-black">
                  Mulyanto Thamrin
                  </p>
                </div>
              </div>
              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-black">
                barang bagus sesuai gambar,meski second namun tetap berfungsi
                dengan baik.
              </p>
            </blockquote>

            {/*3*/}
            <blockquote className="rounded-lg bg-white p-8">
              <div className="flex items-center gap-4">
                <div>
                  <div class="flex items-center space-x-1">
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>

                  <p className="mt-1 text-lg font-medium text-black">
                    Hidayat
                  </p>
                </div>
              </div>
              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-black">
                barang bagus sesuai gambar,meski second namun tetap berfungsi
                dengan baik.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* About*/}
      <section id="About" className="text-white bg-black body-font">
        <div className="max-w-x text-center justify-center mx-auto">
          <h1 className="text-align: center text-3xl font-semibold text-white lg:text-4xl">
            ABOUT US
          </h1>
        </div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full w-5/6">
            <img
              className="object-cover object-center rounded h-auto max-w-xs"
              alt="hero"
              src="logo.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              HI CAMERA
            </h3>
            <p className="mb-8 leading-relaxed justify-center">
              HI CAM adalah toko kamera ( camera store ) yang menyediakan
              berbagai macam jenis kamera DSLR maupun mirrorles. Kami dapat
              melayani anda secara online maupun offline dimanapun dan kapanpun.
              Toko kami berada di Banyuwangi dengan pelayanan yang nyaman &
              penjelasan yang detail dari Tim kami.
            </p>
          </div>
        </div>
      </section>

      {/* Footer*/}
      <section className="bg-black">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          {/* navigasi footer */}
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <a
                href="#Home"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Home
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#Katalog"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Katalog
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#Review"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Review
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#About"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                About
              </a>
            </div>
          </nav>

          {/*social media footer*/}
          <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2023 HI CAMERA.
          </p>
        </div>
      </section>
    </div>
  );
}
