import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { apiCreateTechnician } from '../../services/AdminAPIs/Technician'

const AddTechnician: React.FC = () => {
    // const { id } = useParams<{ id?: any }>()
    const navigate = useNavigate()
    // const token = localStorage.getItem('token')

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        employmentDate: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const payload = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                employmentDate: formData.employmentDate,
            }
            const response = await apiCreateTechnician(payload)

            console.log('tech',response.data)
            // if (response && response.data) {
            //     // Handle successful response if needed
            //     navigate('/technician-list') // navigate to the technician list after success
            // }
        } catch (error) {
            console.error("Error creating technician:", error)
        }
    }

    return (
        <div className="w-full max-w-2xl mx-auto mt-4 p-6 bg-white shadow-md rounded-md">
    <h2 className="text-3xl text-center font-serif font-medium text-cyan-600 mb-10 ">
        Add Technician
    </h2>
    <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label className="block text-sm font-medium text-gray-600 font-serif">
                    Email:
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>
            <div className="w-full md:w-1/2 px-2">
                <label className="block text-sm font-medium text-gray-600 font-serif">
                    First Name:
                </label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label className="block text-sm font-medium text-gray-600 font-serif">
                    Last Name:
                </label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>
            <div className="w-full md:w-1/2 px-2">
                <label className="block text-sm font-medium text-gray-600 font-serif">
                    Phone:
                </label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>
        </div>
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 font-serif">
                Address:
            </label>
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
            />
        </div>
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 font-serif ">
                Employment Date:
            </label>
            <input
                type="date"
                name="employmentDate"
                value={formData.employmentDate}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md font-serif"
                required
            />
        </div>
        <button
            type="submit"
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded px-4 py-2 font-serif"
        >
            Save
        </button>
    </form>
</div>

    )
}

export default AddTechnician

