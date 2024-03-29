"use client";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import "../../style/contactInfo.css";
import Image from "next/image";

function ContactForm({
  onFormSubmit,
  onOptionSelect,
  service,
  time,
  languages,
  duration,
}) {
  const [isOwn, setIsOwn] = useState(true);

  const handleOptionChange = (option) => {
    setIsOwn(option);
    onOptionSelect(option);
  };

  return (
    <div className="contactComponent animate__animated animate__fadeInLeft lg:w-[35rem] lg:h-auto md:w-[24rem] sm:w-[24rem] md:h-auto sm:h-auto">
      <div className="title">
        <h2 className="text-center text-lg md:text-[2.8vh] lg:text-[2.6vh] xl:text-[2.4vh] text-gray-700 font-bold p-3">
          Ön Bilgi Formu
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center h-auto px-8 lg:px-0">
        <div className="choosePerson">
          <button
            onClick={() => handleOptionChange(true)}
            className={` p-2  text-sm rounded-lg m-3 px-7 ${
              isOwn === true ? "selected" : ""
            } ${
              isOwn === true
                ? " bg-premiumOrange text-white"
                : "bg-gray-200  text-gray-600"
            }`}
          >
            Kendim İçin
          </button>
          <button
            onClick={() => handleOptionChange(false)}
            className={` p-2  text-sm rounded-lg m-3 px-7 ${
              isOwn === false ? "selected" : ""
            } ${
              isOwn === false
                ? "bg-premiumOrange text-white"
                : "bg-gray-200  text-gray-600"
            }`}
          >
            Başkası İçin
          </button>
        </div>
        {isOwn === true && (
          <div className="forOwn ">
            <Formik
              initialValues={{
                kimIçin: "Kendim",
                firstName: "Bayram", //DATABASE DEN GİRİŞ YAPMIŞ KULLANICININ BİLGİLERİNİ ALACAĞIMIZ YER
                lastName: "Çınar",
                dateOfBirth: "2002-13-02",
                gender: "erkek",
                time: time,
                service: service,
                notes: "",
                language: "",
                id:
                  time.split(" ")[0].split(".").join("") +
                  time.split(" ")[2].split(":").join(""),
                duration: duration,
                confirm: false,
                delete: false,
              }}
              onSubmit={onFormSubmit}
            >
              <Form
                id="myform"
                className="flex flex-col items-center justify-center"
              >
                <div className="m-3">
                  <Field
                    as="textarea"
                    rows="4"
                    cols="50"
                    className="lg:w-[30rem] max-[768px]:w-[20rem] p-3 outline-none border-gray-100 border-2 rounded-xl"
                    placeholder="Notlar (Size daha iyi bir hizmet verebilmemiz için lütfen almak istediğiniz hizmetin içeriğini birkaç cümleyle açıklayınız.)"
                    name="notes"
                  />
                </div>
                <div className="m-3 flex w-[17rem] ">
                  {languages.map((lang, index) => (
                    <React.Fragment key={index}>
                      <Field
                        type="radio"
                        className="text-stepBorder1 w-[25px]"
                        id={lang.language.toLowerCase()}
                        name="language"
                        value={lang.language}
                      />
                      <label
                        htmlFor={lang.language.toLowerCase()}
                        className="text-stepBorder1 flex mr-[3rem]"
                      >
                        <Image
                          width={32}
                          height={24}
                          quality={100}
                          src={lang.flagImg}
                          alt={lang.language}
                          className="mr-2 inline-block"
                        />
                        {lang.language}
                      </label>
                    </React.Fragment>
                  ))}
                </div>
              </Form>
            </Formik>
          </div>
        )}
        {isOwn === false && (
          <div className="forSomeOne ">
            <Formik
              initialValues={{
                kimIçin: "Başkası",
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                notes: "",
                gender: "",
                service: service,
                time: time,
                duration: duration,
                id:
                  time.split(" ")[0].split(".").join("") +
                  time.split(" ")[2].split(":").join(""),
                language: "",
                confirm: false,
                delete: false,
              }}
              onSubmit={onFormSubmit}
            >
              <Form
                id="myform"
                className="flex flex-col items-center justify-center"
              >
                <div className="m-3">
                  <Field
                    className="lg:w-[30rem] max-[768px]:w-[20rem] p-3  outline-none border-gray-100 border-2 rounded-xl"
                    type="text"
                    placeholder="İsim"
                    name="firstName"
                  />
                </div>
                <div className="m-3">
                  <Field
                    className="lg:w-[30rem] max-[768px]:w-[20rem] p-3  outline-none border-gray-100 border-2 rounded-xl"
                    type="text"
                    placeholder="Soyisim"
                    name="lastName"
                  />
                </div>
                <div className="m-3 flex w-44">
                  <Field
                    type="radio"
                    className="text-stepBorder1 lg:w-[30rem] max-[768px]:w-[20rem]"
                    id="erkek"
                    name="gender"
                    value="erkek"
                  />
                  <label htmlFor="erkek" className="text-stepBorder1">
                    Erkek
                  </label>
                  <Field
                    type="radio"
                    className="text-stepBorder1 lg:w-[30rem] max-[768px]:w-[20rem]"
                    id="kadın"
                    name="gender"
                    value="kadın"
                  />
                  <label htmlFor="kadın" className="text-stepBorder1">
                    Kadın
                  </label>
                </div>
                <div className="m-3 relative birthDay">
                  <Field
                    id="birthdaypicker"
                    type="date"
                    className={` before:content-'Doğum Tarihi:' before:mr-1 before:text-gray-600 p-3  outline-none text-stepBorder1 lg:w-[30rem] max-[768px]:w-[20rem] border-gray-100 border-2 rounded-xl `}
                    name="dateOfBirth"
                  />
                </div>
                <div className="m-3">
                  <Field
                    as="textarea"
                    rows="4"
                    cols="50"
                    className="p-3  outline-none lg:w-[30rem] max-[768px]:w-[20rem] border-gray-100 border-2 rounded-xl"
                    placeholder="Notlar (Size daha iyi bir hizmet verebilmemiz için lütfen almak istediğiniz hizmetin içeriğini birkaç cümleyle açıklayınız.)"
                    name="notes"
                  />
                </div>

                <div className="m-3 flex w-[17rem]">
                  {languages.map((lang, index) => (
                    <React.Fragment key={index}>
                      <Field
                        type="radio"
                        className="text-stepBorder1  w-[25px]"
                        id={lang.language.toLowerCase()}
                        name="language"
                        value={lang.language}
                      />
                      <label
                        htmlFor={lang.language.toLowerCase()}
                        className="text-stepBorder1 flex mr-[3rem]"
                      >
                        <img
                          src={lang.flagImg}
                          alt={lang.language}
                          className="w-8 h-6 mr-2 inline-block"
                        />
                        {lang.language}
                      </label>
                    </React.Fragment>
                  ))}
                </div>
              </Form>
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
