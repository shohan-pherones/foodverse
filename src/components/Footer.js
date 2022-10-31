const Footer = () => {
  return (
    <footer className="container mx-auto py-10 border-t-2 flex flex-col gap-2 items-center text-gray-500">
      <h2 className="text-2xl font-extrabold lowercase italic">
        Food<span className="text-cyan-400">verse</span>
      </h2>
      <p className="text-lg">
        Copyright &copy; {new Date().getFullYear()} Foodverse. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
