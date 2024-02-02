import React, { Suspense, lazy } from 'react';
import "../css/product.css";

const ProductImage = lazy(() => import('./ProductImage'));

export default function Product({ products }) {
    
    function getAdultMinMSRP(data) {
        const jsonData = JSON.parse(data);
        return jsonData.adult_min_msrp;
    }
    function getYouthMinMSRP(data) {
        const jsonData = JSON.parse(data);
        return jsonData.youth_min_msrp;
    }
    return (
        <div className='products'>
            {
                !products ? <p className=''>Something went wrong, please check your internet connection.</p> :
                    products.map(product => (
                        <div key={product.id} className='details'>
                            <div className='header'>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <ProductImage src={product.thumbnail_path} alt={product.name} />
                                </Suspense>
                            </div>
                            <div className='body'>
                                <p className='product_name'>{product.name}</p>
                                <p>Adult: $ { getAdultMinMSRP(product.pricing)}</p>
                                <p>Youth: $ { getYouthMinMSRP(product.pricing)}</p>
                                <button className='customize'>CUSTOMIZE</button>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
}
