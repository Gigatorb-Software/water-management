import MainAPIService from '../MainAPIService'

export async function apiGetAllServices() {
    return MainAPIService.fetchData<any>({
        url: '/api/getAllService',
        method: 'get',
        
    })
}

export async function apiCreateServices(data: any) {
    return MainAPIService.fetchData<any>({
        url: '/api/createService',
        method: 'post',
        data,
    })
}