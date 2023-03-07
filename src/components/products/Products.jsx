import React, { useEffect, useState } from 'react';
import app from '../../Utils/fireBase.config';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const Products = () => {
    const db = getFirestore(app);
    const [vinilesList, setVinilesList] = useState([])

    const getproducts = async () => {
        const vinilesCol = collection(db, 'viniles');
        const vinilesSnapshot = await getDocs(vinilesCol);
        setVinilesList(vinilesSnapshot.docs?.map(doc => doc.data()))
    }

    useEffect(() => {
        getproducts()
    }, [])

    console.log(vinilesList);
    
    return (
        <div>
            <img src={vinilesList[1].url} alt="" />
        </div>
    );
};

export default Products;