const Home = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="">
      <h1 className="text-red-500">
        Token Saved in local storage upon successfull login attempt.
      </h1>
      <p>{token}</p>
    </div>
  );
};

export default Home;
