
const Footer = () => {
  return (
    <footer className=" bg-base-200 text-base-content p-10">
    <div className="footer max-w-6xl mx-auto">
      <aside>
        <h1 className="text-4xl font-bold">AB-Books</h1>
        <p>
          <br />
          Hello, I’m Biplob, My core skill <br /> is based on javaScript and I love to <br /> do most of the things  with javaScript.
        </p>
        
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </div>
  </footer>
  );
};

export default Footer;