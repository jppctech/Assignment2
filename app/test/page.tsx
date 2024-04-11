"use client"

import useSWR from 'swr';

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

const Swr = () => {
  const {
    data: users,
    error,
    isValidating,
  } = useSWR('https://gorest.co.in/public/v2/users', fetcher);

  // Handles error and loading state
  if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div>
    <h1>Users</h1>
    <ul>
      {users.map((user: any) => (
        <li key={user.id}>{user.email}, {user.id}</li>
      ))}
    </ul>
  </div>
  );
};

export default Swr;

