export const Reviews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div>
      <h1>Reviews</h1>
      <p>
        This is a demo Reviews
        {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
};
