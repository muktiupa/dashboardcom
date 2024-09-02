// pages/index.js (or pages/home.js)
import Sidebar from "@/components/common/Sidebar";
import Header from "@/components/common/Header";
// import Body from "@/components/common/Body";
import InquiryTable from "@/components/common/InquiryTable";

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      
      <div className="w-full">
        {/* Header */}
        <Header/>
      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100 w-[100%] h-full">
       {/* <Body/> */}
       <InquiryTable />
      </main>
      </div>
    </div>
  );
}
