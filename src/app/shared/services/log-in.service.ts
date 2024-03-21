export class LogInService{
    isAuthenticUser : boolean = true;
    isLoggedIn(){
        return new Promise<boolean>((resolve, reject) => {
            setTimeout(()=>{
                resolve(this.isAuthenticUser)
            },2000);
        })
    }
}