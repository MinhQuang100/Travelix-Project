import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest, faFacebook, faTwitter, faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="w-full pt-28 pb-26 bg-gradient-to-r from-blue-400 to-purple-600 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    {/* Footer Column */}
                    <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                        <div className="footer_about">
                            <div className="logo_container mb-6">
                                <div className="logo text-4xl font-bold text-white">travelix</div>
                            </div>
                            <p className="text-white">Discover your next great adventure, become an explorer to get started!</p>
                            <ul className="footer_social_list flex space-x-4 mt-6">
                                <li className="footer_social_item hover:bg-yellow-500 p-2 rounded-full transition">
                                    <FontAwesomeIcon icon={faPinterest} className="text-white" />
                                </li>
                                <li className="footer_social_item hover:bg-yellow-500 p-2 rounded-full transition">
                                    <FontAwesomeIcon icon={faFacebook} className="text-white" />
                                </li>
                                <li className="footer_social_item hover:bg-yellow-500 p-2 rounded-full transition">
                                    <FontAwesomeIcon icon={faTwitter} className="text-white" />
                                </li>
                                <li className="footer_social_item hover:bg-yellow-500 p-2 rounded-full transition">
                                    <FontAwesomeIcon icon={faBehance} className="text-white" />
                                </li>
                                <li className="footer_social_item hover:bg-yellow-500 p-2 rounded-full transition">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-white" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Column */}
                    <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                        <div className="footer_col">
                            <div className="text-lg font-semibold uppercase mb-4">Blog Posts</div>
                            <div className="footer_blog space-y-6">
                                {/* Footer blog item */}
                                <div className="footer_blog_item flex space-x-4">
                                    <div className="footer_blog_image flex-shrink-0">
                                        <img src="images/footer_blog_1.jpg" alt="Travel with us this year" className="w-16 h-16 object-cover rounded" />
                                    </div>
                                    <div className="footer_blog_content">
                                        <div className="footer_blog_title text-base font-medium"><div>Travel with us this year</div></div>
                                        <div className="footer_blog_date text-sm text-yellow-300">Nov 29, 2017</div>
                                    </div>
                                </div>

                                {/* Footer blog item */}
                                <div className="footer_blog_item flex space-x-4">
                                    <div className="footer_blog_image flex-shrink-0">
                                        <img src="images/footer_blog_2.jpg" alt="New destinations for you" className="w-16 h-16 object-cover rounded" />
                                    </div>
                                    <div className="footer_blog_content">
                                        <div className="footer_blog_title text-base font-medium"><div>New destinations for you</div></div>
                                        <div className="footer_blog_date text-sm text-yellow-300">Nov 29, 2017</div>
                                    </div>
                                </div>

                                {/* Footer blog item */}
                                <div className="footer_blog_item flex space-x-4">
                                    <div className="footer_blog_image flex-shrink-0">
                                        <img src="images/footer_blog_3.jpg" alt="Travel with us this year" className="w-16 h-16 object-cover rounded" />
                                    </div>
                                    <div className="footer_blog_content">
                                        <div className="footer_blog_title text-base font-medium"><div>Travel with us this year</div></div>
                                        <div className="footer_blog_date text-sm text-yellow-300">Nov 29, 2017</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Column */}
                    <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                        <div className="footer_col">
                            <div className="text-lg font-semibold uppercase mb-4">Tags</div>
                            <div className="footer_tags">
                                <ul className="tags_list flex flex-wrap space-x-2 space-y-2">
                                    <li className="tag_item hover:bg-yellow-500 transition border border-yellow-500 rounded px-3 py-1 text-sm">
                                        <div>design</div>
                                    </li>
                                    <li className="tag_item hover:bg-yellow-500 transition border border-yellow-500 rounded px-3 py-1 text-sm">
                                        <div>fashion</div>
                                    </li>
                                    <li className="tag_item hover:bg-yellow-500 transition border border-yellow-500 rounded px-3 py-1 text-sm">
                                        <div>music</div>
                                    </li>
                                    <li className="tag_item hover:bg-yellow-500 transition border border-yellow-500 rounded px-3 py-1 text-sm">
                                        <div>video</div>
                                    </li>
                                    <li className="tag_item hover:bg-yellow-500 transition border border-yellow-500 rounded px-3 py-1 text-sm">
                                        <div>party</div>
                                    </li>
                                    <li className="tag_item hover:bg-yellow-500 transition border border-yellow-500 rounded px-3 py-1 text-sm">
                                        <div>photography</div>
                                    </li>
                                    <li className="tag_item hover:bg-yellow-500 transition border border-yellow-500 rounded px-3 py-1 text-sm">
                                        <div>adventure</div>
                                    </li>
                                    <li className="tag_item hover:bg-yellow-500 transition border border-yellow-500 rounded px-3 py-1 text-sm">
                                        <div>travel</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
