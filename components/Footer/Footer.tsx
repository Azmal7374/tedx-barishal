/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */

const Footer = () => {
    return (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            <div>
              <h3 className="text-lg font-bold mb-2">Personal</h3>
              <ul>
                <li>Wallet</li>
                <li>Accounts</li>
                <li>Transfers</li>
                <li>Features</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Businesses</h3>
              <ul>
                <li>Features</li>
                <li>Payments</li>
                <li>Transfers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Resources</h3>
              <ul>
                <li>Guides</li>
                <li>Docs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">About Us</h3>
              <ul>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <img src="/path/to/your/logo.svg" alt="TEDX University of Barishal" />
          </div>
        </div>
      );
};

export default Footer;