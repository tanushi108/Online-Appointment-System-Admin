import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'

const DeleteDoctor = () => {

  const {
    doctors,
    aToken,
    getAllDoctors,
    deleteDoctor   // 👈 make sure this exists in context
  } = useContext(AdminContext)

  const [selectedDoctor, setSelectedDoctor] = useState(null)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  const handleDelete = async () => {
    if (!selectedDoctor) return

    const confirm = window.confirm("Are you sure you want to delete this doctor?")
    if (!confirm) return

    try {
      await deleteDoctor(selectedDoctor._id)
      toast.success("Doctor deleted successfully")
      setSelectedDoctor(null)
      getAllDoctors()
    } catch (err) {
      toast.error("Failed to delete doctor")
    }
  }

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>All Doctors</h1>

      {/* ✅ Delete Button */}
      {selectedDoctor && (
        <button
          onClick={handleDelete}
          className='mb-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'
        >
          Delete Selected Doctor
        </button>
      )}

      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {
          doctors.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedDoctor(item)}
              className={`border rounded-xl max-w-56 overflow-hidden cursor-pointer
                ${selectedDoctor?._id === item._id
                  ? 'border-red-500 shadow-lg'
                  : 'border-indigo-200'
                }`}
            >
              <img
                className='bg-indigo-50 transition-all duration-500'
                src={item.image}
                alt=""
              />

              <div className='p-4'>
                <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
                <p className='text-zinc-600 text-sm'>{item.speciality}</p>

                {/* <div className='mt-2 flex items-center gap-1 text-sm'>
                  <input
                    type="checkbox"
                    checked={item.available}
                    onChange={(e) => {
                      e.stopPropagation()
                      changeAvailability(item._id)
                    }}
                  />
                  <p>Available</p>
                </div> */}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DeleteDoctor
