import instance from './instance';

const getContent = async () =>{
    try{
        console.log('fetching posts...');
        const response = await instance.protectedInstance.get('/content/allPosts');
        console.log('posts:',response.data)
        if(response.data.posts){
            return response.data.posts;
        }
        return null;

    }catch(error){
        console.log('Error fetching posts:',error);
    }
}

export default {
    getContent
}