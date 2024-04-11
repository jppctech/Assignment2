"use client"
import { useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/navigation'

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

const LoginPage = () => {

    const router = useRouter()

  const { data: users } = useSWR('https://gorest.co.in/public/v2/users', fetcher);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const foundUser = users.find((user: { email: string }) => user.email === userId);

    if (foundUser) {

      const userPassword = foundUser.id.toString();
      if (password === userPassword) {
        alert('Login successful!'); 
        router.push('/dashboard')

      } else {
        alert('Incorrect password');
      }
    } else {
      alert('Email not found');
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col h-[300px] w-[500px] justify-center items-center gap-4 rounded-3xl border border-[#f68422] ">
        <div className="h-10 bg-[#f68422] text-white px-4 rounded-3xl w-3/4 justify-center flex">
          <input
            type="email"
            placeholder="User-ID"
            className="outline-none bg-white bg-opacity-0 placeholder:text-white w-full"
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div className="h-10 bg-[#f68422] text-white px-4 rounded-3xl w-3/4 justify-center flex">
          <input
            type="password"
            placeholder="User-Password"
            className="outline-none bg-white bg-opacity-0 placeholder:text-white w-full"
            onChange={(e) => setPassword(e.target.value)} // Capture password input
          />
        </div>
        <div className="mt-6 flex items-center p-2 w-[100px] justify-center border border-[#f68422] rounded-3xl text-[#f68422] font-[700]">
          <button className="w-full h-full flex justify-center" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
