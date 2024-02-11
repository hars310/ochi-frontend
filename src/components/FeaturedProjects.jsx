import { FaCircle } from "react-icons/fa";

function FeaturedProjects() {
  return (
    <div  className="w-full py-16 min-h-screen">
      <div className="border-b-[1.2px] pb-12 w-full border-zinc-400">
        <h1 className="text-5xl px-12">Featured projects</h1>
      </div>
      <div className="w-full flex gap-4 p-12">
        <div className="w-[50%]">
          <div className="flex gap-4 mb-4 items-center">
            <div className="w-3 h-3 bg-white  rounded-full"></div>
            <h1 className="text-sm">FYDE</h1>
          </div>

          <div className="h-[36vw] hover:scale-[95%]  cursor-pointer  rounded-lg bg-cover   bg-[url('https://imgs.search.brave.com/PWakuX2CDbrQl5nFyOiiE2g0Q8Zsk1X6V7Wgfek4qNE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2hzLWZzL2h1YmZz/L2hlYXJ0d29vZC1y/ZXNvcnQuanBnP3dp/ZHRoPTI4NzAmaGVp/Z2h0PTE0MzgmbmFt/ZT1oZWFydHdvb2Qt/cmVzb3J0LmpwZw')]"></div>
          <div className="flex gap-2 mt-4">
            <div className="border-[1.2px] text-xs flex items-center py-2 px-6 rounded-full">
              AUDIT
            </div>
            <div className="border-[1.2px] text-xs flex items-center py-2 px-6 rounded-full">
              COPYWRITING
            </div>
            <div className="border-[1.2px] text-xs flex items-center py-2 px-6 rounded-full">
              SALES DECK
            </div>
            <div className="border-[1.2px] text-xs flex items-center py-2 px-6 rounded-full">
              SLIDES DESIGN
            </div>
          </div>
        </div>

        <div className="w-[50%]">
          <div className="flex gap-4 mb-4 items-center">
            <div className="w-3 h-3 bg-white  rounded-full"></div>
            <h1 className="text-sm">TESLA</h1>
          </div>

          <div className="h-[36vw] rounded-lg bg-cover bg-[url('https://imgs.search.brave.com/wIT-xhtVF-H_TIgeHJb4-tBvVyOjvusHttzEYc-5tIs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuanVzdGlubWlu/ZC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMTAvaGVy/by1pbWFnZS13ZWJz/aXRlLWV4YW1wbGUt/c2hvd2Nhc2UtcHJv/ZHVjdC5wbmc')]"></div>
          <div className="flex gap-4 mt-4">
            <div className="border-[1.2px] text-xs flex items-center py-2 px-6 rounded-full">
              AGENCY
            </div>
            <div className="border-[1.2px] text-xs flex items-center py-2 px-6 rounded-full">
              COMPANY PRESENTATION
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-8 px-12">
        <div className="w-[50%]">
          <div className="flex gap-4 mb-4 items-center">
            <div className="w-3 h-3 bg-white  rounded-full"></div>
            <h1 className="text-sm">TRAWA</h1>
          </div>

          <div className="h-[36vw] rounded-lg bg-cover bg-[url('https://imgs.search.brave.com/j5-GOZqLJhuhgJbmX_CsMVHe0iTnvoq_VWPotVX3yAg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzg2LzA5Lzgz/LzM2MF9GXzI4NjA5/ODM5MF9EMko0akxi/T2tDemlrdVNYeFFC/aDI2SXhoUjd0NGky/OC5qcGc')]"></div>
          <div className="flex gap-2 mt-4">
            <div className="border-[1.2px] text-xs flex items-center py-2 px-6 rounded-full">
              BRAND IDENTITY
            </div>
            <div className="border-[1.2px] text-xs flex items-center py-2 px-6 rounded-full">
              DESIGN RESEARCH
            </div>
            <div className="border-[1.2px] text-xs flex items-center py-2 px-6 rounded-full">
              INVESTOR DECK
            </div>
            
          </div>
        </div>

        <div className="w-[50%]">
          <div className="flex gap-4 mb-4 items-center">
            <div className="w-3 h-3 bg-white  rounded-full"></div>
            <h1 className="text-sm">PREMIUM BLEND</h1>
          </div>

          <div className="h-[36vw] rounded-lg bg-[url('https://imgs.search.brave.com/10RPAskKX7T5ucgg9dy3ZA0aelFQZbHawGflReULh-Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzYwMDllYzhj/ZGE3ZjMwNTY0NWM5/ZDkxYi82MDEwN2Zm/MWYxNWM2M2Y5MTVm/ZGI4YmFfNjAwMjA4/NmY3MmI3MjdiM2Ux/MDFlNDkzX2hhcnJ5/cy1vbi10aGUtZXNw/bGFuYWRlLmpwZWc')] bg-cover"></div>
          <div className="flex gap-4 mt-4">
            <div className="border-[1.2px] text-xs flex items-center py-2 px-6 rounded-full">
              BRANDED TEMPLATE
            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-center mt-16">
      <div className="bg-white text-black font-semibold  px-6 py-3 w-fit flex cursor-pointer  items-center gap-6 rounded-full">
            <h1 className="text-sm tracking-tighter">VIEW ALL CASE STUDIES</h1>{" "}
            <FaCircle className="w-2" />
          </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
