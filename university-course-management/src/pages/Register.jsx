const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");
  setSuccess("");

  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  setLoading(true);

  try {
    const response = await api.post("/auth/register", {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    });

    setSuccess(response.data.message);

    setTimeout(() => {
      navigate("/login");
    }, 2000);

  } catch (err) {
    console.error(err);

    if (err.response) {
      setError(err.response.data.message);
    } else {
      setError("Unable to connect to the server.");
    }
  }

  setLoading(false);
};

