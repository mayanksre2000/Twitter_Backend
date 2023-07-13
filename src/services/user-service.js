import  UserRepository  from "../repository/user-repository.js"



class UserService {
    constructor() {
        this.userRepository = new UserRepository();        

    }
    async signUp(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error;
        }

    }
    async signIn(data){
        try {
            const email = data.email;
            const currentPassword = data.password;
            const user = await this.userRepository.findBy({email:email});
            console.log(user)
            if(!user){     //if there is no user with this email in our database(checked in above findBy method)
                throw{
                    message: 'No user found'
                }
            }
            if(!user.comparePassword(currentPassword)){  //checking if password matches
                throw{
                    message: 'Incorrect password'
                }
            }
            console.log("User succefully signed in")
            // const token = user.genJWT();
            // return token;
            
        } catch (error) {
            throw error;
        }

    }

   
}


export default UserService;
   