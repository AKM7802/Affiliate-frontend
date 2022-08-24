import { useState,useEffect } from "react"

const Category=(props)=>{
    const url=props.url
    const [contents,setcontents]=useState([])
    const loadContent=async()=>{
        
        const containerlink=await fetch(`${props.url}api/containers`)
        const containerjson=await containerlink.json()
        console.log(containerjson.data.doc)
        setcontents(containerjson.data.doc)
    }

    useEffect(()=>{
        loadContent()
    },[])

    return (
        
        <div className="category-content " id="category">
            <h1 className="content-block-heading cat-head">CATEGORY</h1>
            <div className="category-block">
                {contents.map((content)=>{
                    return(
                        <div className="category-file">
                            <a href={`/${content._id}`}>
                                <img src={content.images[0]} className="file-image"></img>
                                <h2 className="file-image-header">{content.cName}</h2>
                            </a>
                            <div className="trans"></div>
                        </div>
                    )
                })
                }
                
               
            </div>
        </div>
    )
}
   
export default Category
    
    
    