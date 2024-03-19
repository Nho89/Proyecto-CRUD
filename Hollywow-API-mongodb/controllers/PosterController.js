import Poster from "../models/PosterModel.js"

//GET
export const getAllPosters = async (request, response) => {
   
    try {
    const posters = await Poster.find({})
    response.status(200).json(posters);
}
catch(error){
    response.status(500).json({message: error.message})
}

}

//GET BY ID

export const getPosterById = async  (request,response)=>{
    try {
        const poster = await Poster.findById(id)
             response.send({poster})
        
        
    } 
    catch (error) {
        response.status(500).json({message: error.message})
    }

}

//DELETE
export const deletePoster = async (request, response) => {
    try {
        const { id } = request
        const poster = await Poster.deleteOne({_id: id})
        response.send({poster})
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

//POST

export const createPoster = async(request,response)=>{
     
    try {
        const poster = await Poster.create(body)
        response.send({data})
        
        
    } catch (error) {

        response.status(500).json({message: error.message})
    }
} 


//UPDATE

export  const updatePoster=async (request,response)=> {
    try {
        await Poster.update(request.body
            
        ,{where:{ id: request.params.id}}  
        );
        const putPoster = await Poster.findOne({
            where: { id: request.params.id}
        });  

        response.status(200).json({
            poster: putPoster,
            message:"Se actualizó el poster correctamente"
        });
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}