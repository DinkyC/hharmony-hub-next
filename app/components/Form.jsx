'use client';
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState } from 'react';
import Counter from './Counter.jsx';

export default function Form() {
    const [selectedProduct, setSelectedProduct] = useState('');

    const handleProductChange = (event) => {
        setSelectedProduct(event.target.value);
    };

    return (
        <form name="contact" method="post" data-netlify="true" className="flex flex-col pb-8 lg:pb-16 sm:w-4/6">
            <input type="hidden" name="form-name" value="contact" />
            <div className="flex flex-col sm:flex-row sm:w-full">
                <div className="pb-8 sm:mr-2 sm:w-1/2">
                    <input type="text" placeholder="Name" name="name" className="xl:text-2xl shadow bg-white input sm:input-lg  input-bordered input-primary w-full h-12 rounded" />
                </div>
                <div className="pb-8 sm:w-1/2">
                    <input type="text" placeholder="Email" name="email" className="xl:text-2xl shadow bg-white input sm:input-lg input-bordered input-primary w-full h-12 rounded" />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="pb-8 sm:w-full">
                    <select name="product" className="shadow sm:text-lg xl:text-2xl bg-white select sm:select-lg sm:w-full select-bordered rounded h-12 w-64" value={selectedProduct} onChange={handleProductChange}>
                        <option value="" disabled>Products</option>
                        <option value="High Times Catnip ($11.99)">High Times Catnip ($11.99)</option>
                        <option value="High Times Dog Chew ($21.99)">High Times Dog Chew ($21.99)</option>
                        <option value="High Times Cat Chew ($21.99)">High Times Cat Chew ($21.99)</option>
                    </select>
                </div>
                <Counter/>
            </div>
            <button type="submit" className="bg-regal-brown shadow-black text-xl lg:text-2xl xl:text-3xl btn sm:btn-lg btn-neutral text-white">Contact Us Today</button>
        </form>
    );
}

