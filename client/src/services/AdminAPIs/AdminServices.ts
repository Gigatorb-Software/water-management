import MainAPIService from '../MainAPIService'

export async function apiGetAllServices(data: any) {
    return MainAPIService.fetchData<any>({
        url: '/api/getAllService',
        method: 'get',
        data,
    })
}

export async function apiCreateServices(data: any) {
    return MainAPIService.fetchData<any>({
        url: '/api/createService',
        method: 'post',
        data,
    })
}