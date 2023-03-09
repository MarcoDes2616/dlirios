import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getApliques, getCintas, getDecorables, getHerramientas, getViniles, registerNewProduct } from '../Utils/fireBase.config';
import { v4 as uuid } from "uuid";

const CreateProducts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [product, setProduct] = useState({})
    const [viniles, setViniles] = useState(0)
    const [cintas, setCintas] = useState(0)
    const [apliques, setApliques] = useState(0)
    const [decorables, setDecorables] = useState(0)
    const [herramientas, setHerramientas] = useState(0)

    useEffect(() => {
        countProducts()
    }, [])

    const countProducts = async () => {
        const v = await getViniles()
        setViniles(v)
        const c = await getCintas()
        setCintas(c)
        const a = await getApliques()
        setApliques(a)
        const d = await getDecorables()
        setDecorables(d)
        const h = await getHerramientas()
        setHerramientas(h)
    }

    function handleInput(e) {
        if (e.target.name === "url") {
            setProduct({
                url: value,
                nombre: product.nombre,
                clasificacion: product.clasificacion,
                precio: product.precio,
                stock: product.stock,
                descripcion: product.descripcion,
                tipo: product.tipo,
            });
        if (e.target.name === "clasificacion") {
            setProduct({
                url: product.url,
                nombre: product.nombre,
                clasificacion: value,
                precio: product.precio,
                stock: product.stock,
                descripcion: product.descripcion,
                tipo: product.tipo,
            });
        }
        if (e.target.name === "tipo") {
            setProduct({
                url: product.url,
                nombre: product.nombre,
                clasificacion: product.clasificacion,
                precio: product.precio,
                stock: product.stock,
                descripcion: product.descripcion,
                tipo: value,
            });
        }
        if (e.target.name === "nombre") {
            setProduct({
                url: product.url,
                nombre: value,
                clasificacion: product.clasificacion,
                precio: product.precio,
                stock: product.stock,
                descripcion: product.descripcion,
                tipo: product.tipo,
            });
        }
        if (e.target.name === "descripcion") {
            setProduct({
                url: product.url,
                nombre: product.nombre,
                clasificacion: product.clasificacion,
                precio: product.precio,
                stock: product.stock,
                descripcion: value,
                tipo: product.tipo,
            });
        }
        if (e.target.name === "precio") {
            setProduct({
                url: product.url,
                nombre: product.nombre,
                clasificacion: product.clasificacion,
                precio: value,
                stock: product.stock,
                descripcion: product.descripcion,
                tipo: product.tipo,
            });
        }
        if (e.target.name === "stock") {
            setProduct({
                url: product.url,
                nombre: product.nombre,
                clasificacion: product.clasificacion,
                precio: product.precio,
                stock: value,
                descripcion: product.descripcion,
                tipo: product.tipo,
            });
        }
    }
}

const submitForm = (data) => {
    // e.preventDefault();
    data.id = uuid()
    registerNewProduct(data)
    setProduct({})
    countProducts()
}



return (
    <div className='create_product'>
        <form className='form_create'
            onSubmit={handleSubmit(submitForm)}
        >
            <div className='input_wrapper'>
                <div className='norm'>
                    <label>Clasificacion</label>
                    <select name="clasificacion" value={product.clasificacion} onChange={handleInput}
                        {...register('clasificacion', {
                            required: {
                                value: true,
                                message: '* Este campo es obligatorio'
                            }
                        })}>
                        <option value="Viniles">Viniles</option>
                        <option value="Cintas">Cintas</option>
                        <option value="Apliques">Apliques</option>
                        <option value="Decorables">Decorables</option>
                        <option value="Herramientas">Herramientas</option>
                    </select>
                </div>
                <div className='norm'>
                    <label>Tipo</label>
                    <input type="text" name='tipo' value={product.tipo} onChange={handleInput}
                        {...register('tipo', {
                            required: {
                                value: true,
                                message: '* Este campo es obligatorio'
                            }
                        })} />
                </div>
                <div className='norm'>
                    <label>Nombre</label>
                    <input type="text" name='nombre' value={product.tipo} onChange={handleInput}
                        {...register('nombre', {
                            required: {
                                value: true,
                                message: '* Este campo es obligatorio'
                            }
                        })} />
                </div>
                <div className='norm'>
                    <label>Precio</label>
                    <input type="text" name='precio' value={product.precio} onChange={handleInput}
                        {...register('precio', {
                            required: {
                                value: true,
                                message: '* Este campo es obligatorio'
                            }
                        })} />
                </div>
                <div className='input_descripcion'>
                    <label>Descripción</label>
                    <input type="text" name='descripcion' value={product.descripcion} onChange={handleInput}
                        {...register('descripcion', {
                            required: {
                                value: true,
                                message: '* Este campo es obligatorio'
                            }
                        })} />
                </div>
                <div className='norm'>
                    <label>Stock</label>
                    <input type="number" name='stock' value={product.stock} onChange={handleInput}
                        {...register('stock', {
                            required: {
                                value: true,
                                message: '* Este campo es obligatorio'
                            }
                        })} />
                </div>
                <div className='norm'>
                    <label>URL</label>
                    <input type="text" name="url" value={product.url} onChange={handleInput}
                        {...register('url', {
                            required: {
                                value: true,
                                message: '* Este campo es obligatorio'
                            }
                        })} />
                </div>
            </div>
            <button type='submit'>Cargar producto</button>
        </form>
        <div className='total_products'>
            <h4>Productos Creados</h4>
            <div>Viniles: {viniles}</div>
            <div>Cintas: {cintas} </div>
            <div>Apliques: {apliques}</div>
            <div>Decorables: {decorables}</div>
            <div>Herramientas: {herramientas}</div>
        </div>
    </div>
);
};

export default CreateProducts;