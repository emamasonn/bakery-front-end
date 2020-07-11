
let URL_API
if(process.env.NODE_ENV === 'development'){
    URL_API = process.env.REACT_APP_URL_LOCAL
}else{
    URL_API = process.env.REACT_APP_URL_PRO
}

export const env_app = {
    URL_API
}