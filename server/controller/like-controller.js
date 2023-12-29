import Like from "../model/like.js";

export const addLike=async(request,response)=>{
    try {
        
        const like = new Like(request.body);
        await like.save();

        return response.status(200).json({ msg: 'Like saved successfully!' });
    } catch (error) {
        return response.status(500).json({ msg: 'Error while saving like to the database' });
    }
}


export const getAllLikes=async(request,response)=>{
    try {
        let likes = await Like.find({ postId: request.params.id });
        if (!likes|| likes.length === 0) {
            return response.status(404).json({ msg: 'Likes not found' });
        }
        return response.status(200).json(likes);
    } catch (error) {
        return response.status(500).json({ msg: 'Error while fetching likes' });
    }
}

