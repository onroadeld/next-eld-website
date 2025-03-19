import LogoIcon from "@/assets/icons/logo.svg";

const headerLinks = [
  { title: "Home", id: "#home" },
  { title: "Partners", id: "#partners" },
  { title: "About", id: "#about" },
  { title: "Features", id: "#features" },
  { title: "Register", id: "#register" },
  { title: "FAQ", id: "#faq" },
  { title: "Download app", id: "#download-app" },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 sm:mb-14 mb-4">
      <div className="flex items-center cursor-pointer">
        <LogoIcon alt="Company Logo" />
      </div>

      <nav className="hidden sm:block">
        <ul className="flex space-x-6">
          {headerLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.id}
                className="hover:underline text-[#333333] cursor-pointer"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
