"use client"
import Button from '@/components/modules/Button/Button'
import DeleteModal from '@/components/modules/DeleteModal/DeleteModal'
import Modal from '@/components/modules/Modal/Modal'
import { useDeleteMessageMutation } from '@/redux/api/contatcApi'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function MessagesTable({ messages }) {

    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowViewModal, setIsShowViewModal] = useState(false)

    const [messageId, setMessageId] = useState("");
    const [selectedMessage, setSelectedMessage] = useState("");

    const [deleteMessage] = useDeleteMessageMutation();
    const router = useRouter();

    const deleteMessageHandler = async (id) => {
        try {
            const result = await deleteMessage({ id }).unwrap();
            toast.success(result.message)
            router.refresh()
            setIsShowDeleteModal(false)

        } catch (err) {
            console.error(err);
            toast.error('خطای سمت سرور !')
            setIsShowDeleteModal(false)
        }
    }

    return (
        <>
            <table className="w-full mt-10 text-gray-500 overflow-auto">
                <thead className="border-b child:whitespace-nowrap">
                    <tr className='child:text-right child:p-4 text-gray-600'>
                        <th>نام</th>
                        <th>شماره همراه</th>
                        <th>ایمیل</th>
                        <th>محتوای پیام</th>
                        <th>جواب با ایمیل</th>
                        <th>جواب با پیامک</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 child:whitespace-nowrap'>
                    {messages?.map((message) => (
                        <tr key={message._id} className=' child:p-4 child:text-sm'>

                            <td>{message.name}</td>
                            <td>{message.email}</td>
                            <td>{message.phone}</td>

                            <td >
                                <div onClick={() => {
                                    setIsShowViewModal(true)
                                    setSelectedMessage(message.message)
                                }} className=" inline-block">
                                    <Button isIconNeed={false} style="w-[100px] bg-red-500" text="دیدن پیام" />
                                </div>
                            </td>
                            <td >
                                <div className=' inline-block'>
                                    <Button isIconNeed={false} style="w-[100px] bg-main" text="ارسال" />
                                </div>
                            </td>
                            <td >
                                <div className=' inline-block'>
                                    <Button isIconNeed={false} style="w-[100px] bg-main" text="ارسال" />
                                </div>
                            </td>

                            <td >
                                <div onClick={() => {
                                    setIsShowDeleteModal(true)
                                    setMessageId(message._id)
                                }} className=" inline-block">
                                    <Button isIconNeed={false} style="w-[100px] bg-red-500" text="حذف پیام" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {
                isShowViewModal && <Modal onClose={() => setIsShowViewModal(false)} onSubmit={() => {
                    setIsShowViewModal(false)
                }}>
                    <div className="px-6 pb-6 pt-0 space-y-6">
                        <p className='text-mainBlack'>{selectedMessage}</p>
                    </div>
                </Modal>
            }

            {/* delete modal */}
            {isShowDeleteModal &&
                <DeleteModal onClose={() => setIsShowDeleteModal(false)} onSubmit={() => {
                    deleteMessageHandler(messageId)
                }} title="پیام حدف شود؟" />
            }
        </>
    )
}
