function Avatar() {
  return (
    <img
      className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
      loading="lazy"
      src={'https://avatars.githubusercontent.com/jeffhogg86'}
      alt="profile pic"
    />
  );
}

export default Avatar;
