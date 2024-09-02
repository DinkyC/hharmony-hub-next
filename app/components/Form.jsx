'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useEffect, useState, setState } from 'react';
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
        reset,
        handleSubmit,
        register,
        setError,
        formState,
        formState: { errors, isSubmitting, isSubmitSuccessful },
      } = useForm({
        resolver: zodResolver(schema),

      });

    const [selectedProduct, setSelectedProduct] = useState('');
    const [counter, setCounter] = useState(1);
    
    useEffect(() => {
      if (formState.isSubmitSuccessful) {
        reset(); 
      }

    }, [formState, reset]);

    const handleProductChange = (event) => {
        setSelectedProduct(event.target.value);
    };

     const onSubmission = async (data) => {
        fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        .then(console.log(JSON.stringify(data)))
        .then(response => {
            console.log(response);  // Check the raw response
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response;  // This will fail if the body is empty
        })
        .then(data => {
            console.log('Success:', data);
            location.reload;
            window.scrollTo(0,0);
            alert('Success! We will be reaching out to you shortly!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to send: ' + error.message);
        });

    };

    return (
        <form id="form" name="contact" method="POST" action="/" onSubmit={handleSubmit(onSubmission)} className="flex flex-col pb-20 sm:w-4/6">
            <div className="flex flex-col sm:flex-row sm:w-full">
                <div className="pb-8 sm:mr-2 sm:w-1/2">
                    <input
                        {...register("name")}
                        type="text"
                        placeholder="Name" 
                        name="name" 
                        className="xl:text-2xl shadow input sm:input-lg  input-bordered input-primary w-full h-12 rounded"
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
                        className="xl:text-2xl shadow input sm:input-lg input-bordered input-primary w-full h-12 rounded"
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
                        className="shadow sm:text-lg xl:text-2xl select sm:select-lg sm:w-full select-bordered rounded h-12 w-64"
                        value={selectedProduct} 
                        onChange={handleProductChange}>
                            <option value="" disabled>Products</option>
                            <option value="High Times Cat Food ($49.99)">High Times Cat Food ($49.99)</option>
                            <option value="High Times Dog Food ($49.99)">High Times Dog Food ($49.99)</option>
                            <option value="High Times Catnip ($11.99)">High Times Catnip ($11.99)</option>
                            <option value="High Times Dog Chew ($21.99)">High Times Dog Chew ($21.99)</option>
                            <option value="High Times Cat Chew ($21.99)">High Times Cat Chew ($21.99)</option>
                            <option value="High Times Beer ($15.99)">High Times Beer ($15.99)</option>
                            <option value="High Times Hard Cider ($19.99)">High Times Hard Cider ($19.99)</option>
                            <option value="High Times Liqueur($25.99)">High Times Liqueur ($25.99)</option>
                            <option value="High Times Mezcal ($30.99)">High Times Mezcal ($39.99)</option>
                            <option value="High Times Tequila ($49.99)">High Times Tequila ($49.99)</option>
                            <option value="High Times Wine ($15.99)">High Times Wine ($15.99)</option>
                            <option value="Terpene Infusion Kit for Mezcal ($19.99)">Terpene Infusion Kit for Mezcal ($19.99)</option>
                            <option value="Terpene Infusion Kit for Whiskey ($19.99)">Terpene Infusion Kit for Whiskey ($19.99)</option>
                            <option value="Terpene Infusion Kit for Vodka ($19.99)">Terpene Infusion Kit for Vodka ($19.99)</option>
                            <option value="Terpene Infusion Kit for Tequila ($19.99)">Terpene Infusion Kit for Tequila ($19.99)</option>
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
                    name="count" 
                    value={Number(counter)} 
                />
             </div>
            <button
                type="submit" 
                disabled={isSubmitting} 
                className="bg-regal-brown shadow-black text-xl lg:text-2xl xl:text-3xl btn sm:btn-lg btn-neutral text-white"
            >
                {isSubmitting ? "Loading..." : "Contact Us Today"}
           </button>
        </form>
    );
}

