import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const [, , active] = pathname.split("/");
  const links = [
    { name: '', icon: <FaTwitter /> },
    { name: 'home', icon: <FaHome /> },
    { name: 'explore', icon: <FaHashtag /> },
    { name: 'notifications', icon: <FaBell /> },
    { name: 'messages', icon: <FaEnvelope /> },
    { name: 'bookmarks', icon: <FaBookmark /> },
    { name: 'lists', icon: <FaList /> },
    { name: 'profile', icon: <FaUser /> },
    { name: 'more', icon: <FaEllipsisH /> },
  ];  
  return (
    <div className="list-group">
      {links.map((link) => 
        <Link to={`/tuiter/${link.name}`} className={`list-group-item text-capitalize ${active === link.name ? "active" : ""}`}>
          {link.icon} {link.name}
        </Link>
      )}
    </div>
  );
};
export default NavigationSidebar;