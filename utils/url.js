export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
//              || 'http://localhost:1337';
export const PUBLIC_URL = 'http://localhost:3000'

export const fromImageToUrl = img => {
    // console.log(img)
    if(!img){
        return "/vercel.svg"
    }
    if(img.url.indexOf("/") === 0){
        return `${PUBLIC_URL}${img.url}`;
    }
    return img.url
}