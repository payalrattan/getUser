export const getUser = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const user = await response.json();
    return user;

  } catch (err) {
    console.log(err);
    throw err; // important so UI can show error
  }
};
