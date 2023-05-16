//?? TODO: Registration component

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    Errors: [],
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {};
  return (
    <div className="registration">
      <form>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button onSubmit={handleSubmit}>Send</button>
      </form>
    </div>
  );
};
