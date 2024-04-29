import { ButtonPrimary, ButtonPrimaryTwo } from "@/components/Button/Button";
import { TextPrimary } from "@/components/StyleCompoment/StyleCompoment";

import { MdBedroomChild } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";

function InformationDetailRoom() {
  return (
   
 <div className="mx-auto my-3 mt-8 flex lg:w-[100%] 2xl:w-3/4 justify-between">
      <div className="md:w-[50%] xl:w-[60%]">
        <h3 className="text-[2rem] font-bold">
          Toàn bộ căn hộ. Chủ nhà Sungwon
        </h3>
        <div className="flex gap-3 border-b border-solid border-gray-600 text-gray-600">
          <p>3 Khách</p>
          <p>3 Khách</p>
          <p>3 Khách</p>
        </div>
        <div className="border-b border-solid border-gray-600 pb-8">
          <div className="mt-8 flex gap-3">
            <MdBedroomChild className="text-6xl" />
            <div className="">
              <h4 className="font-bold">Phòng trong một căn hộ chung cư</h4>
              <p>
                Phòng riêng của bạn trong nhà, cộng với quyền sử dụng không gian
                chung.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <MdBedroomChild className="text-6xl" />
            <div className="">
              <h4 className="font-bold">Phòng trong một căn hộ chung cư</h4>
              <p>
                Phòng riêng của bạn trong nhà, cộng với quyền sử dụng không gian
                chung.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <MdBedroomChild className="text-6xl" />
            <div className="">
              <h4 className="font-bold">Phòng trong một căn hộ chung cư</h4>
              <p>
                Phòng riêng của bạn trong nhà, cộng với quyền sử dụng không gian
                chung.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <MdBedroomChild className="text-6xl" />
            <div className="">
              <h4 className="font-bold">Phòng trong một căn hộ chung cư</h4>
              <p>
                Phòng riêng của bạn trong nhà, cộng với quyền sử dụng không gian
                chung.
              </p>
            </div>
          </div>
        </div>
        <div className="border-b border-solid border-gray-600 py-8">
          Một số thông tin đã được dịch tự động.{" "}
          <button className="font-bold">Hiển thị nguyên bản</button>
        </div>
        <div className="border-b border-solid border-gray-600 py-8">
          <h4 className="mb-3 text-3xl font-bold">Về địa điểm này</h4>
          <div>
            Đã 5 năm, Samir, Mehdi và tôi David ở chung nhà với bạn cùng phòng.
            Nó nằm trong một khu phố quốc tế và sôi động ở Paris. Chúng tôi
            quyết định thuê một trong các phòng của mình và gặp gỡ khách, giống
            như bạn vậy! Do đó, bạn sẽ có phòng riêng và các phòng chung khác!
            Hãy yên tâm, chúng tôi sẽ tôn trọng quyền riêng tư và quyền tự chủ
            của bạn!{" "}
          </div>
        </div>

        <div className=" py-8">
          <h4 className="mb-3 text-3xl font-bold">Địa điểm này có gì</h4>
          <div className="flex flex-wrap">
            <div className="flex w-1/2 items-center gap-2 text-[2.1rem]">
              <PiTelevisionSimpleBold />
              TV
            </div>
            <div className="flex w-1/2  items-center gap-2 text-[2.1rem]">
              <PiTelevisionSimpleBold />
              TV
            </div>
            <div className="flex items-center gap-2 text-[2.1rem]">
              <PiTelevisionSimpleBold />
              TV
            </div>
          </div>
          <ButtonPrimaryTwo width="16rem" height={3.7} className="rounded-[1rem] mt-8">Xem Thêm</ButtonPrimaryTwo>
        </div>
      </div>

      <div
        className="xl:mr-24 h-[400px] 2sm:w-[40%] xl:w-[30%] border border-solid border-white p-8 md:sticky md:top-36 md:right-0  sm:hidden md:block"
        style={{ boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div>
          <h3 className="mb-6 text-3xl font-semibold">$102 CAD/ đêm </h3>
          <form action="">
            <div className="rounded-[1rem] border border-solid border-gray-400">
              <div className="flex border-b border-solid border-gray-400">
                <div className="group-form w-1/2 border-r border-solid border-gray-400 px-4 py-3">
                  <label
                    htmlFor=""
                    className="block text-[1.4rem] font-semibold"
                  >
                    Checkin
                  </label>
                  <p>6/24/2024</p>
                </div>
                <div className="group-form w-1/2 px-4 py-3">
                  <label
                    htmlFor=""
                    className="block text-[1.4rem] font-semibold"
                  >
                    Checkout
                  </label>
                  <p>6/24/2024</p>
                </div>
              </div>
              <div className="group-form px-4 py-3">
                <label htmlFor="" className="block text-[1.4rem] font-semibold">
                  Khach
                </label>
                <p>1 Khách</p>
              </div>
            </div>

            <ButtonPrimary
              width="100%"
              height={4}
              className="mt-5 rounded-[1rem] border border-solid"
            >
              Xac Nhan
            </ButtonPrimary>
          </form>
          <p className="text-center text-[1.6rem] text-gray-500">
            You won't be charged yet
          </p>
          <div className="border-b border-solid border-gray-400 py-4">
            <div className="flex justify-between">
              <p>$102 CAD x 5 nights</p>
              <TextPrimary>$12 CAD</TextPrimary>
            </div>
            <div className="flex justify-between ">
              <p>Cleaning fee</p>
              <TextPrimary>$12 CAD</TextPrimary>
            </div>
            <div className="flex justify-between">
              <p>Cleaning fee</p>
              <TextPrimary>$12 CAD</TextPrimary>
            </div>
          </div>
          <div>
            <div className="flex justify-between py-4">
              <p>Total before taxes</p>
              <TextPrimary>$12 CAD</TextPrimary>
            </div>
          </div>
        </div>
      </div>

      
    </div>
 

   
  );
}

export default InformationDetailRoom;