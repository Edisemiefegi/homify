
function Footer() {
  return (
    <div className="bg-gray-950 ">
      <div className="container mx-auto sm:w-10/12 w-11/12 py-10 text-gray-400 flex flex-col md:flex-row justify-between items-center gap-6">
        <p>© 2025 Homify. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Contact Us
          </a>
            <a href="#" className="hover:text-white">
           My Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
