"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SteppedProgress from "./SteppedProgress";

export default function AddPodcastModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const show = searchParams.get("show");
  console.log(show);
  //   const show = searchParams?.show;

  return (
    <>
      <Link href="/?show=true">SUMMON THE MODAL</Link>

      {show && (
        // <div className="fixed z-20 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        //   <div className="p-8 border w-3/5 shadow-lg rounded-md bg-white">
        //   </div>
        // </div>
        <div className="fixed z-20 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <SteppedProgress />
        </div>
      )}
    </>
  );
}

// {
//     <div className="text-center">
//       <h3 className="text-2xl font-bold text-gray-900">Modal Title</h3>
//       <div className="mt-2 px-7 py-3">
//         <p className="text-lg text-gray-500">Modal Body</p>
//       </div>
//       <div className="flex justify-center mt-4">
//         {/* Using useRouter to dismiss modal*/}
//       </div>
//     </div>
//   </div>
