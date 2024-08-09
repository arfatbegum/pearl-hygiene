"use client";

import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { database } from "@/firebaseConfig.js";
import Image from "next/image";

const SectorDetails = ({ params }) => {
    const [product, setProduct] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const productRef = ref(database, `cleaning-sectors/${params.id}`);

        get(productRef).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                setProduct(snapshot.val());
            } else {
                console.log('No data available');
            }
            setIsLoaded(true);
        }).catch((error) => {
            console.error(error);
            setIsLoaded(true);
        });
    }, [params.id]);

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className="lg:px-[50px]">
            <div className="bg-white lg:flex lg:gap-8 items-center lg:mx-24 lg:mt-12 lg:mb-24 m-4 p-8 shadow-md rounded-lg">
                {/* {product && image && (
                    <img src={image} alt="" />
                )}
                {product && (
                    <div className="lg:mt-0 mt-4">
                        <h2 className="mb-5 text-lg"><b>name</b></h2>
                        <p>{description}</p>
                        <p className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: product.details }}></p>
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default SectorDetails;
