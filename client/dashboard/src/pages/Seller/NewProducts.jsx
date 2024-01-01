import React from "react";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
export default function NewProducts() {
  const navigate = useNavigate();

  const [file, setFile] = useState();

  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [gender, setGender] = useState("nam");
  const [brand, setBrand] = useState("");
  const [desc, setDesc] = useState("");

  const [selectedOption, setSelectedOption] = useState("ao");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tên sp : " + name);
    console.log("Số lượng : " + quantity);
    console.log("Giới Tính : " + gender);
    console.log("Thuong Hiệu : " + brand);
    console.log("Mô tả : " + desc);
    console.log(image);

  }
  //Áo hoặc quần được chọn
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

function handleChange(e) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0])
}
  return (
    <div className="container">
      <div className="header_title">
        <h1 className="text-lg font-bold uppercase text-gray-600 text-center">
          Thêm mới sản phẩm
        </h1>
      </div>
      <div className="main_container mt-5">
        <div className="form_input">
          <form action="">
            <div className="top_form border-b border-gray-300 pb-3">
              <div className="title">
                <h2 className="text-base font-bold text-gray-600">
                  Upload ảnh sản phẩm
                </h2>
                <span className="text-sm text-gray-500">
                  Vui lòng click vào để chọn ảnh sản phẩm
                </span>
              </div>
            </div>
            <div className="bottom_form mt-5 flex">
              <div className="left_image text-left">
                <div className="input_image w-[500px] h-[420px] overflow-hidden rounded-sm border border-dashed  border-gray-300">
                  <div className="flex items-center justify-center w-full h-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-full cursor-pointer bg-gray-50  hover:bg-gray-10 "
                    >
                      {file == null ? (
                        <>
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Click to upload</span>{" "}
                              or drag and drop
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            onChange={handleChange}
                            type="file"
                            className="hidden"
                          />
                        </>
                      ) : (
                        <>
                          <img src={file} className="max-h-full" alt="" />
                        </>
                      )}
                    </label>
                  </div>
                </div>
                <Button
                  className="text-gray-600 mt-2 border px-5 py-2 hover:bg-red-500 hover:text-white border-gray -500 uppercase font-semibold"
                  onClick={() => setFile(null)}
                >
                  Hủy file
                </Button>
              </div>
              <div className="right_desc ps-5 w-full text-gray-500">
                <div className="name_prod ">
                  <label className="font-semibold" htmlFor="">
                    Tên sản phẩm <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="border text-black border-gray-300 rounded-sm block mt-2 px-3 py-1 w-full outline-1 focus:outline-blue-600"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập tên sản phẩm"
                  />
                </div>
                <div className="flex">
                  <div className="category mt-5 w-1/2 mr-5">
                    <label className="font-semibold" htmlFor="">
                      Danh mục sản phẩm
                    </label>
                    <select
                      className="block outline-none border border-gray-300 py-1 px-3 mt-2 w-full text-black"
                      name=""
                      id=""
                    >
                      <option value="">item 1</option>
                      <option value="">item 2</option>
                      <option value="">item 3</option>
                      <option value="">item 4</option>
                      <option value="">item 5</option>
                    </select>
                  </div>
                  <div className="gender mt-5 w-1/2 ml-5">
                    <label className="font-semibold" htmlFor="">
                      Chọn giới tính
                    </label>
                    <div className="flex items-center mt-3 ">
                      <div className="flex items-center">
                        <input
                          id="default-radio-1"
                          type="radio"
                          checked
                          value="nam"
                          onChange={(e) => setGender(e.target.value)}
                          name="default-radio"
                          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 "
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ms-2 text-sm font-medium text-gray-900 "
                        >
                          Nam
                        </label>
                      </div>
                      <div className="flex items-center ms-10">
                        <input
                          id="default-radio-2"
                          type="radio"
                          onChange={(e) => setGender(e.target.value)}
                          value="nữ"
                          name="default-radio"
                          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  outline-none"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900 "
                        >
                          Nữ
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="size_prod w-1/2 me-5">
                    <label
                      className="font-semibold flex justify-between"
                      htmlFor=""
                    >
                      <span>Chọn size</span>
                      <span className="flex">
                        <div className="flex items-center">
                          <input
                            id="default-radio-ao"
                            type="radio"
                            value="ao"
                            name="default-radio-ao-quan"
                            checked={selectedOption === "ao"}
                            onChange={() => handleOptionChange("ao")}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                          />
                          <label
                            htmlFor="default-radio-ao"
                            className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                          >
                            Áo
                          </label>
                        </div>
                        <div className="flex items-center ms-5">
                          <input
                            id="default-radio-quan"
                            type="radio"
                            value="quan"
                            name="default-radio-ao-quan"
                            checked={selectedOption === "quan"}
                            onChange={() => handleOptionChange("quan")}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                          />
                          <label
                            htmlFor="default-radio-quan"
                            className="ms-2 text-sm font-medium text-gray-500"
                          >
                            Quần
                          </label>
                        </div>
                      </span>
                    </label>
                    <ul className="mt-2 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-sm sm:flex">
                      { selectedOption === "ao" ? (
                        <>
                          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                            <div className="flex items-center ps-2">
                              <input
                                id="vue-checkbox-list"
                                type="checkbox"
                                value=""
                                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="vue-checkbox-list"
                                className="w-full py-[6px] ms-2 text-sm font-medium text-gray-900"
                              >
                                S
                              </label>
                            </div>
                          </li>
                          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                            <div className="flex items-center ps-2">
                              <input
                                id="react-checkbox-list"
                                type="checkbox"
                                value=""
                                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="react-checkbox-list"
                                className="w-full py-[6px] ms-2 text-sm font-medium text-gray-900"
                              >
                                M
                              </label>
                            </div>
                          </li>
                          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                            <div className="flex items-center ps-2">
                              <input
                                id="angular-checkbox-list"
                                type="checkbox"
                                value=""
                                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="angular-checkbox-list"
                                className="w-full py-[6px] ms-2 text-sm font-medium text-gray-900"
                              >
                                L
                              </label>
                            </div>
                          </li>
                          <li className="w-full ">
                            <div className="flex items-center ps-2">
                              <input
                                id="laravel-checkbox-list"
                                type="checkbox"
                                value=""
                                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="laravel-checkbox-list"
                                className="w-full py-[6px] ms-2 text-sm font-medium text-gray-900"
                              >
                                XL
                              </label>
                            </div>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                            <div className="flex items-center ps-2">
                              <input
                                id="vue-checkbox-list"
                                type="checkbox"
                                value=""
                                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="vue-checkbox-list"
                                className="w-full py-[6px] ms-2 text-sm font-medium text-gray-900"
                              >
                                28
                              </label>
                            </div>
                          </li>
                          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                            <div className="flex items-center ps-2">
                              <input
                                id="react-checkbox-list"
                                type="checkbox"
                                value=""
                                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="react-checkbox-list"
                                className="w-full py-[6px] ms-2 text-sm font-medium text-gray-900"
                              >
                                29
                              </label>
                            </div>
                          </li>
                          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                            <div className="flex items-center ps-2">
                              <input
                                id="angular-checkbox-list"
                                type="checkbox"
                                value=""
                                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="angular-checkbox-list"
                                className="w-full py-[6px] ms-2 text-sm font-medium text-gray-900"
                              >
                                30
                              </label>
                            </div>
                          </li>
                          <li className="w-full ">
                            <div className="flex items-center ps-2">
                              <input
                                id="laravel-checkbox-list"
                                type="checkbox"
                                value=""
                                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="laravel-checkbox-list"
                                className="w-full py-[6px] ms-2 text-sm font-medium text-gray-900"
                              >
                                31
                              </label>
                            </div>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div className="w-1/2 ms-5">
                    <label className="font-semibold" htmlFor="">
                      Số lượng
                    </label>
                    <input
                      className="border text-black border-gray-300 rounded-sm block mt-2 px-3 py-1 w-full outline-1 focus:outline-blue-600"
                      type="text"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="Nhập số lượng"
                    />
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="color_prod w-1/2 me-5">
                    <label className="font-semibold" htmlFor="">
                      Màu sẵn có
                    </label>
                    <div className="flex justify-between mt-3">
                      <label className="relative inline-flex items-center me-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-9 h-5 bg-red-300 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
                      </label>

                      <label className="relative inline-flex items-center me-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-9 h-5 bg-green-300 rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                      </label>

                      <label className="relative inline-flex items-center me-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-9 h-5 bg-violet-300 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>

                      <label className="relative inline-flex items-center me-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-9 h-5 bg-yellow-200 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-al peer-checked:bg-yellow-400"></div>
                      </label>

                      <label className="relative inline-flex items-center me-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-300 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-black"></div>
                      </label>
                    </div>
                  </div>
                  <div className="brand_prod w-1/2 ms-5">
                    <label className="font-semibold" htmlFor="">
                      Tên thương hiệu
                    </label>
                    <input
                      className="border text-black border-gray-300 rounded-sm block mt-2 px-3 py-1 w-full outline-1 focus:outline-blue-600"
                      type="text"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      placeholder="Nhập tên thương hiệu"
                    />
                  </div>
                </div>
                <div className="desShort mt-4 w-full">
                  <label htmlFor="">Mô tả chi tiết</label>
                  <textarea
                    rows={2}
                    className="border text-black border-gray-300 rounded-sm block mt-2 px-3 py-1 w-full outline-1 focus:outline-blue-600"
                    type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Nhập mô tả"
                  />
                </div>
              </div>
            </div>
            <div className="btn_submit text-center text-blue-500 mt-5">
              <Button onClick={() => navigate('/seller/products')}
                className="text-white px-8 py-2 hover:bg-red-600 bg-gray-400 rounded-sm mr-10"
              >
                Hủy 
              </Button>
              <Button onClick={handleSubmit}
                className="text-white px-8 py-2 bg-green-400 hover:bg-blue-500 rounded-sm"
              >
                Thêm
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
