"use client"
import Image from "next/image";
import "../../style/appointmentView.css";

function AppointmentView({
  serviceProviderName,
  serviceProviderJob,
  service,
  date,
  time,
  language,
  price,
  forWho,
  notes,
  isOpen,
  onClose,
  confirmButton,
  firstName,
  lastName,
  gender,
  birthday,
  isRequest,
  duration,
}) {
  const modalClass = isOpen
    ? "fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-600 bg-opacity-50"
    : "hidden";

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <>
      <div className={modalClass} onClick={handleOverlayClick}>
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="relative w-[430px] max-[768px]:w-[375px] p-5 bg-white rounded-2xl animate__animated animate__fadeInDown">
            <div className="flex items-center justify-center relative">
              <div className="titleModal m-3">
                {isRequest === false && (
                  <h1 className="text-center text-xl mr-auto ml-auto w-full mb-0">
                    Online Randevu Özeti
                  </h1>
                )}
                {isRequest === true && (
                  <h1 className="text-center text-xl mr-auto ml-auto w-full mb-0">
                    Online Randevu Talebi Özeti
                  </h1>
                )}
              </div>
              <div
                className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-md p-4 cursor-pointer transition-all duration-700  bg-gray-200/50 hover:bg-red-500 group absolute right-2 bottom-2"
                onClick={onClose}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-txtRed transition-all duration-700 rotate-180 flex absolute group-hover:opacity-0 group-hover:rotate-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-white rotate-0 transition-all duration-700 opacity-0 group-hover:block group-hover:rotate-180 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.5 12.75a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75Z"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="serviceProviderArea w-auto flex m-3">
                <div className="profileImg w-1/4 relative bg-cover h-[100px]">
                  <Image
                    fill
                    src="/images/person.jpg"
                    alt=""
                    className="p-[5px] rounded-2xl w-full object-cover h-full"
                  />
                </div>
                <div className="detailInfos w-3/4 ml-[8px] flex flex-col justify-center">
                  <div className="nameArea">
                    <h2 className=" text-left text-base font-semibold">
                      {serviceProviderName}
                    </h2>
                  </div>
                  <div className="jobArea">
                    <h3 className=" text-left text-base font-normal">
                      {serviceProviderJob}
                    </h3>
                  </div>
                  <div className="serviceType">
                    <h2 className="text-sm font-semibold">({service})</h2>
                  </div>
                  <div className="forWho flex">
                    <i className="fa-solid fa-circle mt-[6px] text-[11px] text-premiumOrange"></i>
                    <h2 className="text-[14px] font-bold ml-2">
                      {forWho} İçin
                    </h2>
                  </div>
                </div>
              </div>
              <div className="m-3">
                <div className="appointmentDetailsArea flex">
                  <div className="dateArea mr-5">
                    <div className="textLogoArea flex">
                      <i className="fa-solid fa-calendar text-premiumOrange flex items-center justify-center"></i>
                      <h5 className="text-sm font-semibold ml-[8px] mt-auto mb-auto text-center">
                        Tarih
                      </h5>
                    </div>
                    <div className="appointmentDate mt-[5px]">
                      <h2 className="text-xs text-center">{date}</h2>
                    </div>
                  </div>
                  <div className="timeArea mr-5">
                    <div className="textLogoArea flex">
                      <i className="fa-solid fa-clock text-premiumOrange flex items-center justify-center"></i>
                      <h5 className="text-sm font-semibold ml-[8px] mt-auto mb-auto text-center">
                        Saat
                      </h5>
                    </div>
                    <div className="appointmentTime mt-[5px]">
                      <h2 className="text-xs text-center">{time}</h2>
                    </div>
                  </div>
                  <div className="languageArea mr-5">
                    <div className="textLogoArea flex">
                      <i className="fa-solid fa-earth-americas text-premiumOrange flex items-center justify-center"></i>
                      <h5 className="text-sm font-semibold ml-[8px] mt-auto mb-auto text-center">
                        Dil
                      </h5>
                    </div>
                    <div className="appointmentLanguage mt-[5px]">
                      <h2 className="text-xs text-center">{language}</h2>
                    </div>
                  </div>
                  <div className="moneyArea mr-5">
                    <div className="textLogoArea flex">
                      <i className="fa-regular fa-money-bill-1 text-premiumOrange flex items-center justify-center"></i>
                      <h5 className="text-sm font-semibold ml-[8px] mt-auto mb-auto text-center">
                        Ücret/Dakika
                      </h5>
                    </div>
                    <div className="appointmentLanguage mt-[5px]">
                      <h2 className="text-xs text-center">{price} TL / DK</h2>
                    </div>
                  </div>
                </div>
                <div className="appointmentNotes">
                  {forWho === "Başkası" && (
                    <div className="forSomeone flex mt-3">
                      <div className="generalNameAreaSomeOne mr-5">
                        <div className="nameAreaSomeone flex">
                          <i className="fa-solid fa-user text-premiumOrange flex items-center justify-center"></i>
                          <h2 className="text-sm font-bold ml-[8px] text-center">
                            İsim Soyisim
                          </h2>
                        </div>
                        <div>
                          <h2 className="text-sm text-center">
                            {firstName} {lastName}
                          </h2>
                        </div>
                      </div>
                      <div className="generalGenderAreaSomeOne mr-5">
                        <div className="genderAreaSomeone flex">
                          <i className="fa-solid fa-venus-mars text-premiumOrange flex items-center justify-center"></i>
                          <h2 className="text-sm font-bold ml-[8px] text-center">
                            Cinsiyet
                          </h2>
                        </div>
                        <div>
                          <h2 className="text-sm text-center">{gender}</h2>
                        </div>
                      </div>
                      <div className="generalGenderAreaSomeOne mr-5">
                        <div className="birthdayAreaSomeone flex">
                          <i className="fa-solid fa-cake-candles text-premiumOrange flex items-center justify-center"></i>
                          <h2 className="text-sm font-bold ml-[8px] text-center">
                            Doğum Tarihi
                          </h2>
                        </div>
                        <div>
                          <h2 className="text-sm text-center">{birthday}</h2>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="notesArea mt-[8px] border-2 border-premiumOrange rounded-xl">
                    <div className="p-3">
                      <div className="flex">
                        <i className="fa-solid fa-book text-xl text-premiumOrange"></i>
                        <h2 className="text-xl ml-2 text-premiumOrange">
                          Notlar
                        </h2>
                      </div>
                      <p className="text-sm">{notes}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="confirmButtonArea">
                <button
                  onClick={confirmButton}
                  className="bg-premiumOrange p-2 w-full text-white rounded-xl text-lg"
                >
                  Onayla
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentView;
