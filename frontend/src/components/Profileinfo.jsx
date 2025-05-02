import React from "react";
import { FaEye, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  RiGitRepositoryFill,
  RiUserFollowFill,
  RiUserUnfollowLine,
} from "react-icons/ri";
import { TfiThought } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { formatMemberSince } from "../utils/function";

function Profileinfo({ userProfile }) {
  // function userProfile() {
  //   return {
  //     avatar_url:
  //       "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
  //     bio: "👨🏻‍💻👨🏻‍💻👨🏻‍💻",
  //     email: "johndoe@gmail.com",
  //     followers: 100,
  //     following: 200,
  //     html_url: "https://github.com/burakorkmez",
  //     location: "Somewhere, Earth",
  //     name: "John Doe",
  //     public_gists: 100,
  //     public_repos: 100,
  //     twitter_username: "johndoe",
  //     insta_username: "ayanm_2004",
  //     fb_username: "your_facebook_id",
  //     linkedin_username: "your_linkedin_id",

  //     login: "johndoe7667",
  //   };
  // }

  const user = userProfile;

     const isValid = (username) => typeof username === 'string' &&
          username.trim().length > 0;

    const memberSince = formatMemberSince(user.created_at);

  return (
    <div className="lg:w-1/3 w-full flex flex-col gap-2 md:sticky md:top-10">
      <div className="bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-800 text-white rounded-lg p-4">
        <div className="flex gap-3 items-center">
          <a href={user.html_url} target="_blank" rel="noreferrer">
            <img
              src={user.avatar_url}
              alt={user.name}
              className="rounded-md w-24 h-24 mb-2"
            />
          </a>
          <div className="flex gap-2 items-center flex-col">
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2"
            >
              <FaEye size={16} />
              View on Github
            </a>
          </div>
        </div>

        {/* User Bio */}
        {user.bio && (
          <div className="flex items-center gap-2">
            <TfiThought />
            <p className="text-sm">{user.bio}</p>
          </div>
        )}

        {/* Location */}
        {user.location && (
          <div className="flex items-center gap-2">
            <IoLocationOutline />
            {user.location}
          </div>
        )}

        {/* Social Links */}
        <div className="flex items-center gap-2">
          {/* Twitter */}
       
          {isValid(user.twitter_username) && (
            <a
              href={`https://twitter.com/${user.twitter_username}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-sky-500"
            >
              <FaXTwitter />{" "}
            </a>
          )}
         
          {/* Instagram */}
          {user.insta_username?.trim() && (
            <a
              href={`https://instagram.com/${user.insta_username}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-pink-500"
            >
              <FaInstagram />
            </a>
          )}
          {/* Facebook */}
          {user.fb_username?.trim() && (
            <a
              href={`https://facebook.com/${user.fb_username}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaFacebook />
            </a>
          )}
          {/* LinkedIn */}
          {user.linkedin_username?.trim() && (
            <a
              href={`https://linkedin.com/in/${user.linkedin_username}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
          )}
          {/* Email */}
          {user.email?.trim() && (
            <a
              href={`mailto:${user.email}`}
              className="flex items-center gap-2 hover:text-red-500 my-2"
            >
              <BiLogoGmail />
            </a>
          )}
        </div>

        {/* Member Since Date */}
        <div className="">
          <p className="text-gray-600 font-bold text-sm">Member since</p>
          <p>{memberSince}</p>
        </div>

        {/* Full Name */}
        {user.name && (
          <div className="">
            <p className="text-gray-600 font-bold text-sm">Full name</p>
            <p>{user.name}</p>
          </div>
        )}

        {/* Username */}
        <div className="">
          <p className="text-gray-600 font-bold text-sm">Username</p>
          <p>{user.login}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mx-4">
        {/* Followers Count */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-4 flex-1 min-w-[100px]">
          <RiUserFollowFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Followers: {user.followers}</p>
        </div>

        {/* Following Count */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-4 flex-1 min-w-[100px]">
          <RiUserUnfollowLine className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Following: {user.following}</p>
        </div>

        {/* Public Repos Count */}
        <div className="flex items-center justify-center gap-2 bg-glass rounded-lg p-4 flex-1 min-w-[100px]">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Public repos: {user.public_repos}</p>
        </div>
      </div>
    </div>
  );
}

export default Profileinfo;
