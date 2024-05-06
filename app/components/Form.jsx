'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState, setState } from 'react';
import Counter from './Counter.jsx';
import { useRouter } from 'next/navigation';

const schema = z.object({
    email: z.string().email(),
    name: z.string().min(1, {message: "Name must at least be one character"}),
    product: z.string().includes("$", {message: "Must select a product"}),
    count: z.string(),
});

const FormFields = z.infer;

export default function Form() {

    const {
        handleSubmit,
        register,
        setError,
        formState: { errors, isSubmitting },
      } = useForm({
        resolver: zodResolver(schema),
      });

    const [selectedProduct, setSelectedProduct] = useState('');
    const [counter, setCounter] = useState(1);
    const [formData, setFormData] = useState({});

    const handleProductChange = (event) => {
        setSelectedProduct(event.target.value);
    };

    const encode = (data) => {
        return Object.keys(data)
          .map(
            (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
          )
          .join('&');
      };

    const onSubmission = async (data) => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...data }),
        })
        .then(() => {
            console.log(data);
            alert('Success! We will be reaching out to shortly!');
        })
        .catch((error) => alert(error));
    };


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form name="contact" method="POST" action="/" data-netlify="true" onSubmit={handleSubmit(onSubmission)} className="flex flex-col pb-8 lg:pb-16 sm:w-4/6">
            <input type="hidden" name="form-name" value="contact" />
            <div className="flex flex-col sm:flex-row sm:w-full">
                <div className="pb-8 sm:mr-2 sm:w-1/2">
                    <input
                        {...register("name")}
                        type="text"
                        placeholder="Name" 
                        name="name" 
                        className="xl:text-2xl shadow bg-white input sm:input-lg  input-bordered input-primary w-full h-12 rounded"
                        onChange={handleChange}
                    />
                   {errors.name && (
                        <div className="text-red-500">{errors.name.message}</div>
                   )}
                </div>
                <div className="pb-8 sm:w-1/2">
                    <input
                        {...register("email")}
                        type="email" 
                        placeholder="Email" 
                        name="email" 
                        className="xl:text-2xl shadow bg-white input sm:input-lg input-bordered input-primary w-full h-12 rounded"
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <div className="text-red-500">{errors.email.message}</div>
                    )}
                </div>
            </div>
            <div className="flex flex-row">
                <div className="pb-8 sm:w-full">
                    <select
                        {...register("product")}
                        type="text" 
                        name="product" 
                        className="shadow sm:text-lg xl:text-2xl bg-white select sm:select-lg sm:w-full select-bordered rounded h-12 w-64"
                        value={selectedProduct} 
                        onChange={(e) => {
                            handleProductChange(e);
                            handleChange(e);
                        }}>
                            <option value="" disabled>Products</option>
                            <option value="High Times Catnip ($11.99)">High Times Catnip ($11.99)</option>
                            <option value="High Times Dog Chew ($21.99)">High Times Dog Chew ($21.99)</option>
                            <option value="High Times Cat Chew ($21.99)">High Times Cat Chew ($21.99)</option>
                    </select>
                    {errors.product && (
                        <div className="text-red-500">{errors.product.message}</div>
                    )}
                </div>
                <Counter counter={counter} setCounter={setCounter}/>
                <input
                    {...register("count")}
                    type="text" 
                    hidden 
                    onChange={handleChange} 
                    name="count" 
                    value={Number(counter)} 
                />
             </div>
            <button type="submit" disabled={isSubmitting} className="bg-regal-brown shadow-black text-xl lg:text-2xl xl:text-3xl btn sm:btn-lg btn-neutral text-white">{isSubmitting ? "Loading..." : "Contact Us Today"}</button>
        </form>
    );
}

