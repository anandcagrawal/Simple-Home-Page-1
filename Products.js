import React from 'react';
import Img1 from "../src/images/Img1.jpg";
import Img2 from "../src/images/Img2.jpg";
import Img3 from "../src/images/Img3.jpg";
import Img4 from "../src/images/Img4.jpg";
import Img5 from "../src/images/Img5.jpg";
import Img6 from "../src/images/Img6.jpg";

const Products = () => {
    return (
        <>
            <div className="container-fluid col-11 mx-auto">
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />

                <products className="text-gray-600 body-font">
                    <div className="container px-5 py-30 mx-auto">
                        <div className="flex flex-wrap -m-4">

                            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Img1} />
                                </a>
                                <div className="mt-4">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">High Heels Silver</h2>
                                    <p className="mt-1">$19.99</p>
                                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-2  hover:bg-indigo-600 rounded-3xl">Add to cart</button>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Img2} />
                                </a>
                                <div className="mt-4">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">High Heels Pink</h2>
                                    <p className="mt-1">$24.99</p>
                                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-2  hover:bg-indigo-600 rounded-3xl">Add to cart</button>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Img3} />
                                </a>
                                <div className="mt-4">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">High Heels Black</h2>
                                    <p className="mt-1">$24.99</p>
                                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-2  hover:bg-indigo-600 rounded-3xl">Add to cart</button>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Img4} />
                                </a>
                                <div className="mt-4">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Espadrille Heels</h2>
                                    <p className="mt-1">$49.99</p>
                                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-2  hover:bg-indigo-600 rounded-3xl">Add to cart</button>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Img5} />
                                </a>
                                <div className="mt-4">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Cone Heels Pink</h2>
                                    <p className="mt-1">$24.99</p>
                                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-2  hover:bg-indigo-600 rounded-3xl">Add to cart</button>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Img6} />
                                </a>
                                <div className="mt-4">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">French Heels</h2>
                                    <p className="mt-1">$49.99</p>
                                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-2 hover:bg-indigo-600 rounded-3xl">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </products>
            </div>
        </>
    )
}

export default Products;
