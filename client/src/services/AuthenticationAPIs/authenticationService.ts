import MainAPIService from '../MainAPIService'

export async function apiSignIn(data: any) {
    return MainAPIService.fetchData<any>({
        url: '/api/login',
        method: 'post',
        data,
    })
}

export async function apiSignUp(data: any) {
    return MainAPIService.fetchData<any>({
        url: '/api/register',
        method: 'post',
        data,
    })
}