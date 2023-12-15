let year = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <footer className="absolute text-center bottom-0 w-[100%] h-[2.5rem] ">
        <p className="text-[#ccc] ">Copyright &copy; {year}</p>
      </footer>
    </div>
  );
};

export default Footer;
