import React from 'react'

export default function AddModal({ children, title, onClose }) {
    return (
        <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center sm:h-full flex">
            <div onClick={onClose} className=" fixed inset-0 bg-mainBlack opacity-[0.7]"></div>
            <div className="relative w-full rounded-lg bg-white max-w-2xl px-4 h-screen md:h-auto">

                <div className="bg-mainWhite rounded-lg shadow relative">

                    <div className="flex items-center justify-between p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold">
                            {title}
                        </h3>
                        <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-2xl px-4 py-2 mr-auto inline-flex">
                            X
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        {children}
                    </div>


                </div>
            </div>
        </div>
    )
}
