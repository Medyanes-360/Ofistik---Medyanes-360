"use client"
import React from "react";
import Image from "next/image";

const RequestModal = ({
  isOpen,
  onClose,
  event,
  randevuSaat,
  randevuTarih,
  endSaat,
}) => {
  if (!event) {
    return null;
  }
  const modalClass1 = isOpen
    ? "fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-600 bg-opacity-50"
    : "hidden";

  return (
    <div className={modalClass1}>
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="relative w-[430px] max-[768px]:w-[375px] p-5 bg-white rounded-2xl animate__animated animate__fadeInDown">
          <div className="flex items-center justify-center relative">
            <div className="titleModal m-3">
              <h1 className="text-center text-xl mr-auto ml-auto w-full mb-0">
                Randevu Detayları
              </h1>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 absolute right-1"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <div className="m-3">
              <div className="appointmentNotes">
                <div className="flex">
                  <div className="imgArea w-[120px] p-2">
                  <Image src="/images/pp.png" width={30} height={30} quality={100} className="ml-[3px]" alt="" />
                  </div>
                  <div className="forSomeone flex mt-3 flex-wrap items-center justify-center">
                    <div className="generalNameAreaSomeOne mr-5">
                      <div className="nameAreaSomeone flex">
                        <i className="fa-solid fa-user text-premiumOrange flex items-center justify-center"></i>
                        <h2 className="text-sm font-bold ml-[8px] text-center">
                          İsim Soyisim
                        </h2>
                      </div>
                      <div>
                        <h1 className="text-sm">
                          {event.firstName} {event.lastName}
                        </h1>
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
                        <h2 className="text-sm text-center">{event.gender}</h2>
                      </div>
                    </div>
                    <div className="generalBirthdayAreaSomeOne mr-5 mt-3">
                      <div className="birthdayAreaSomeone flex">
                        <i className="fa-solid fa-cake-candles text-premiumOrange flex items-center justify-center"></i>
                        <h2 className="text-sm font-bold ml-[8px] text-center">
                          Doğum Tarihi
                        </h2>
                      </div>
                      <div>
                        <h2 className="text-sm text-center">
                          {event.dateOfBirth}
                        </h2>
                      </div>
                    </div>
                    <div className="generalAppointmentTime mr-5 mt-3">
                      <div className="appointmentTimeArea flex">
                        <i className="fa-regular fa-calendar-check text-premiumOrange flex items-center justify-center"></i>
                        <h2 className="text-sm font-bold ml-[8px] text-center">
                          Randevu Tarihi
                        </h2>
                      </div>
                      <div>
                        <h2 className="text-sm text-center">
                          {randevuTarih} {randevuSaat}-{endSaat}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full mt-5 justify-around">
                  <div className="serviceNameArea">
                    <div className="service flex">
                      <i className="fa-solid fa-user text-premiumOrange flex items-center justify-center"></i>
                      <h2 className="text-sm font-bold ml-[8px] text-center">
                        Hizmet
                      </h2>
                    </div>
                    <div>
                      <h1 className="text-sm">{event.service}</h1>
                    </div>
                  </div>
                  <div className="languageArea">
                    <div className="textLogoArea flex">
                      <i className="fa-solid fa-earth-americas text-premiumOrange flex items-center justify-center"></i>
                      <h5 className="text-sm font-semibold ml-[8px] mt-auto mb-auto text-center">
                        Dil
                      </h5>
                    </div>
                    <div className="appointmentLanguage">
                      <h1 className="text-sm">{event.language}</h1>
                    </div>
                  </div>
                  <div className="generalAppointmentNumber">
                    <div className="birthdayAreaSomeone flex">
                      <i className="fa-solid fa-calendar-check text-premiumOrange flex items-center justify-center"></i>
                      <h2 className="text-sm font-bold ml-[8px] text-center">
                        Randevu Numarası
                      </h2>
                    </div>
                    <div>
                      <h2 className="text-sm text-center">
                        {event.id}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="notesArea mt-[8px] border-2 border-premiumOrange rounded-xl">
                  <div className="p-3">
                    <div className="flex">
                      <i className="fa-solid fa-book text-xl text-premiumOrange"></i>
                      <h2 className="text-xl ml-2 text-premiumOrange">
                        Notlar
                      </h2>
                    </div>
                    <p className="text-sm">{event.notes}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestModal;
