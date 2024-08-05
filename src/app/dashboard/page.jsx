'use client'

const Dashboard = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
             <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-medium">ผู้ใช้ทั้งหมด</h2>
                        <p className="text-3xl font-bold">1,234</p>
                    </div>
                    <div className="text-blue-500 text-4xl">
                        <i className="fas fa-users"></i> {/* ใช้ไอคอนที่เหมาะสม */}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-medium">จำนวนบทความ</h2>
                        <p className="text-3xl font-bold">567</p>
                    </div>
                    <div className="text-green-500 text-4xl">
                        <i className="fas fa-file-alt"></i> {/* ใช้ไอคอนที่เหมาะสม */}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-medium">จำนวนวีดีโอ</h2>
                        <p className="text-3xl font-bold">890</p>
                    </div>
                    <div className="text-red-500 text-4xl">
                        <i className="fas fa-video"></i> {/* ใช้ไอคอนที่เหมาะสม */}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-medium">ส่วนอื่นๆ</h2>
                        <p className="text-3xl font-bold">123</p>
                    </div>
                    <div className="text-purple-500 text-4xl">
                        <i className="fas fa-cogs"></i> {/* ใช้ไอคอนที่เหมาะสม */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard