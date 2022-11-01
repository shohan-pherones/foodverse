const Footer = () => {
  return (
    <footer className="container mx-auto py-8 flex flex-col gap-5 items-center opacity-75">
      <h2 className="text-2xl font-bold lowercase italic">
        Food<span className="text-rose-500">verse</span>
      </h2>
      <p>
        Copyright &copy; {new Date().getFullYear()} Foodverse. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
