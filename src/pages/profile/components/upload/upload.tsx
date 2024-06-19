import { CheckIcon, VIcon } from "@/assets/icons";
import { useUpload } from "./hook/upload.hook";
import { useTranslation } from "react-i18next";

type Props = {};

export function Upload({}: Props) {
  const [{ user, inpRef, urlImage }, { handleChange, renderName }]: any =
    useUpload();
    const {t} = useTranslation()
  return (
    <>
      <div
        className="mt-10 flex h-48 w-48 items-center justify-center rounded-full bg-pink-500 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: urlImage ? `url(${urlImage})` : "none" }}
      >
        {!urlImage ? (
          <h1 className="text-[60px] text-white">
            {user?.name[0].toUpperCase()}
          </h1>
        ) : null}
      </div>
      <span
        className="mt-2 cursor-pointer text-[14px] underline"
        onClick={() => {
          inpRef?.current.click();
        }}
      >
        {t("profile.updateAvatar")}
      </span>
      <input
        onChange={handleChange}
        ref={inpRef}
        className="hidden"
        type="file"
        accept="image/png, image/jpeg, image/gif"
      />
      <div className="mt-10 w-[85%] text-left">
        <CheckIcon />
      </div>
      <div className="mt-5 w-[85%] text-left font-semibold">
        <p className="">{t("profile.vertifyTitle")}</p>
      </div>
      <div className="mt-2 w-[85%] text-left text-[13px] text-gray-600">
        <p className="">
        {t("profile.vertifyContent")}
        </p>
      </div>
      <div className="mt-4 w-[85%] text-left text-[13px] font-semibold text-gray-600">
        <button className="rounded-xl border-[1px] border-solid border-gray-600 px-5 py-3">
        {t("profile.badge")}
        </button>
      </div>
      <div className="mt-10 w-[85%] text-left">
        <hr />
      </div>
      <div className="mt-10 w-[85%] text-left text-[19px] font-semibold">
        <h3 className="">{user && renderName()} {t('profile.confirm')}</h3>
      </div>
      <div className="mb-16 mt-4 flex w-[85%] space-x-2 text-left text-[13px]">
        <VIcon />
        <span className="text-gray-600 ">{t("profile.emailAdrress")}</span>
      </div>
    </>
  );
}
