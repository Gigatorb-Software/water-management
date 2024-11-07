import MainAPIService from '../MainAPIService'

export async function apiGetAllTechnician(data: any) {
    return MainAPIService.fetchData<any>({
        url: '/api/getAllRegister',
        method: 'get',
        data,
    })
}

export async function apiCreateTechnician(data: any) {
    return MainAPIService.fetchData<any>({
        url: '/api/technicianRegister',
        method: 'post',
        data,
    })
}