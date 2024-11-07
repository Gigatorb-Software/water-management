import MainAPIService from '../MainAPIService'

export async function apiGetUserById(id: any) {
    return MainAPIService.fetchData<any>({
        url: `/api/getUserById/${id}`,
        method: 'get',
        
    })
}
export async function apiServiceFormSubmit( formData: FormData) {
    return MainAPIService.fetchData<any>({
      url: '/api/createService',
      method: 'post',
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }