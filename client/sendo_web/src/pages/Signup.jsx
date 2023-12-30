import React , { useState }from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    is_Seller: 0,
    address: "",
    phoneNumber: "",
    gender: 0,
    birthday: "",
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.2.20:3000/api/register', formData);
      console.log(response.data);
      alert('Registration successful. Check your email for verification.');
      navigate('/login');
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      } else {
        console.error('Unexpected error:', error);
        setError('Unexpected error occurred');
      }
    }
  };
  return (
    <>
      <div className="flex justify-center h-screen bg-red-500 ">
      <Card className=" px-7 py-5" shadow={false}>
        <Link to="/">
          <Button className="p-0 text-black bg-transparent mb-5">Back</Button>
        </Link>
        <Typography variant="h4" color="blue-gray">
          Đăng ký tài khoản
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Rất vui được gặp bạn! Nhập thông tin của bạn để đăng ký.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
         onSubmit={handleSubmit}
         >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Họ tên
            </Typography>
            <Input
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email của bạn
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            {error && (
            <div className="text-red-500 text-sm mb-4">
              {error}
            </div>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Mật khẩu
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Button className="bg-red-600 mt-6" fullWidth type="submit">
            sign up
          </Button>
        </form>
      </Card>
    </div>
    </>
  );
}
