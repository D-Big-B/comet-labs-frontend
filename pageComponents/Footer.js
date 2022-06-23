import React from "react";
import Image from "next/image";
import multorLogo from "./../assets/images/multor-logo-footer.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__image">
          <Image src={multorLogo} alt="multor" />
        </div>
        <div className="footer__info">
          &copy; 2022 D-Big-B. All rights reserved
        </div>
      </div>
    </footer>
  );
}
