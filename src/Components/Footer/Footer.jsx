const Footer = () => {
  return (
    <footer className="p-10 footer text-neutral-content bg-[#272525]">
      <nav>
        <header className="text-white">
          <img className="h-[50px]" src="/logo.png" alt="" />
        </header>
      </nav>
      <nav>
        <header className="text-white">Contact</header>
        <div className="flex gap-2">
          <img src="/mail.svg" alt="" />
          <a className="link link-hover">instaplanned@gmail.com</a>
        </div>
        <div className="flex gap-2">
          <img src="/location.svg" alt="" />
          <a className="link link-hover">The Royale, 188 East 64th Street</a>
        </div>
        <div className="flex gap-2">
          <img src="/phone.svg" alt="" />
          <a className="link link-hover">03004003954</a>
        </div>
      </nav>
      <nav>
        <header className="text-white">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="text-white">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
