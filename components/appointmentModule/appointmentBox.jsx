"use client"
import React from "react";
import Swal from "sweetalert2";

function AppointmentBox({
  time,
  date,
  selectedTime,
  onTimeClick,
  active,
  isMobile,
}) {
  const handleTimeClick = () => {
    //seçtiğimiz saati geri döndürüyor ve background renk ayarlamarını yapıyor
    if (active) {
      if (onTimeClick && typeof onTimeClick === "function") {
        onTimeClick(time, date);
      }
    } else {
      Swal.fire({
        title: "Hata !",
        text: "Bu saat başkası tarafından alındı.",
        icon: "error",
        confirmButtonText: "Kapat",
      });
    }
  };

  const isSelected = selectedTime === time; // seçtiğimiz saati atadığımız değişken

  return (
    <div
      className={`timeBox w-[145px] max-[768px]:w-[100px] ${
        isSelected
          ? "bg-white border-2 border-premiumOrange text-premiumOrange"
          : "bg-premiumOrange"
      } ${
        active ? "bg-premiumOrange " : "bg-stepBorder1"
      }  rounded-lg mb-[5px] p-[2px] max-[768px]:m-[5px] cursor-pointer`}
      onClick={handleTimeClick}
    >
      {isMobile === true && (
        <>
          <h4
            className={`text-sm ${
              isSelected ? "text-premiumOrange" : "text-white"
            } p-1 pb-0 text-center`}
          >
            {time}
          </h4>
        </>
      )}
      {isMobile === false && (
        <>
          <h4
            className={`text-sm ${
              isSelected ? "text-premiumOrange" : "text-white"
            } p-1 text-center`}
          >
            {time}
          </h4>
        </>
      )}
    </div>
  );
}

export default AppointmentBox;
