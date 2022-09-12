import { useState } from 'react'


const Home=(props)=>{
    const [containerdata,setcontainerdata]=useState([])
    const [productdata,setproductdata]=useState([])
    let index=0;
    const loadContent=async()=>{
        
        const containerlink=await fetch(`${props.url}api/containers`)
        const containerjson=await containerlink.json()
        
        setcontainerdata(containerjson.data.doc)
        
        const productlink=await fetch(`${props.url}api/products`)
        const productjson=await productlink.json()
        
        setproductdata(productjson.data.doc)

        

    }
    loadContent()
    // useEffect(()=>{
    //     loadContent()
    // },[])

    return(
    <div class="content">
        <div class="home-content-block">
            {containerdata.map((container)=>{
                index=0;
                return(<>
                    <h1 class="content-block-heading"><a href={`/${container._id}`}>{container.cName}</a></h1>
                    
                    <div class="content-card-collection">
                        {productdata.map((product,i)=>{
                            if(product.productContainer===container._id){
                            index++;
                            return(
                                <div class="content-card">
                                    <div className='position'>{index}</div>
                                    <img class="product-pic" src={product.images[0]}></img>
                                    <div class="card-details">
                                        <h2 class="product-title">{product.productName}</h2>
                                        <h4 class="author-name">{product.authorName}</h4>
                                        <p class="product-price">{product.price || "Rs:7999"}</p>
                                        <div class="buy-now">
                                            <button>Check Out The Course!</button>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            )}else return null
                        })}
                       
                        

                        
                    
                    </div> 
                
                </>)
            })}
                
            
            
            
        </div>

    </div>
    )
}

export default Home