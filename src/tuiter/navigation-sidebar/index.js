import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { useSelector } from "react-redux";
const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const [, , active] = pathname.split("/");

  // Decided to implement the profile, login and register links conditionally in the NavigationSidebar component.
  const authLinks = currentUser
  ? [{ name: 'profile', icon: <FaUser /> }]
  : [
      { name: 'login', icon: <FaSignInAlt /> },
      { name: 'register', icon: <FaUserPlus /> },
    ];

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
    ...authLinks,
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