import React from 'react'

export default function Home() {
    return (
        <table className='w-full border-collapse'>
            <thead>
                <tr className='border-b border-gray-200 text-left text-sm text-gray-500'>
                    <th className='py-3'>ชื่องาน</th>
                    <th className='py-3'>Job type</th>
                    <th className='py-3'>Price</th>
                    <th className='py-3'>created_at</th>
                </tr>
            </thead>
            <tbody>
                <tr className='border-b border-gray-100 hover:bg-gray-50'>
                    <td className='py-3'>หาคนถ่ายวิดีโอ</td>
                    <td className='py-3'>ถ่ายภาพ</td>
                    <td className='py-3'>ตามข้อตกลง</td>
                    <td className='py-3'>04/07/2026</td>
                </tr>
            </tbody>


        </table>
    )
}
