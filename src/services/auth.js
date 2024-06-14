import instance from "./instance";

//define the authentication service
const authService ={
    signup:async (user) =>{
        try{
            console.log('Registering user...');
            const res = await instance.authInstance.post('/user/register',user);

            if(res.data) {
                console.log('User registerd successfully');
                return res.data;
            }else{
                console.log('Error registering user');
                return res.data;
            }
        }catch(error){
            console.log('Error registering user');
            return error.response.data;
        }
    },
    signin:async(user) =>{
        try{
            console.log('Authentication user...');
            const res = await instance.authInstance.post('/user/login',user);

            if(res.data){
                console.log('User authenticated successfully');

                //store teh token in the session storage
                sessionStorage.setItem('token',res.data.token);

                //store the user in the session storage
                sessionStorage.setItem('user',JSON.stringify({
                    name:res.data.name,
                    email:res.data.email
                }));


                return res.data;
            }else{
                console.log('Error authenticating user');
                return res.data;
            }
        }catch(error){
            console.log('Error authenticating user');
            return error.response.data;
        }
    }
}

export default authService;