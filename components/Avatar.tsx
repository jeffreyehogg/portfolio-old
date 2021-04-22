function Avatar() {
  return (
    <img
      className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
      loading="lazy"
      src="/images/me.jpg"
      alt="profile pic"
    />
  );
}

export default Avatar;
