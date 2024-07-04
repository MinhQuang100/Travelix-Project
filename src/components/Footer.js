// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest, faFacebook, faTwitter, faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="w-full pt-[113px] pb-[104px] bg-[#77aaff]">
            <div className="container">
                <div className="row">
                    {/* Footer Column */}
                    <div className="col-lg-3 footer_column">
                        <div className="footer_col">
                            <div className="footer_content footer_about">
                                <div className="logo_container footer_logo">
                                    <div className="logo text-3xl text-blue-800">travelix</div>
                                </div>
                                <p className="footer_about_text"></p>
                                <ul className="footer_social_list">
                                    <li className="footer_social_item"><div className='text-gray-800'><FontAwesomeIcon icon={faPinterest} /></div></li>
                                    <li className="footer_social_item"><div className='text-gray-800'><FontAwesomeIcon icon={faFacebook} /></div></li>
                                    <li className="footer_social_item"><div className='text-gray-800'><FontAwesomeIcon icon={faTwitter} /></div></li>
                                    <li className="footer_social_item"><div className='text-gray-800'><FontAwesomeIcon icon={faBehance} /></div></li>
                                    <li className="footer_social_item"><div className='text-gray-800'><FontAwesomeIcon icon={faLinkedin} /></div></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Footer Column */}
                    <div className="col-lg-3 footer_column">
                        <div className="footer_col">
                            <div className="text-[15px] font-semibold text-white uppercase">blog posts</div>
                            <div className="footer_content footer_blog">
                                
                                {/* Footer blog item */}
                                <div className="footer_blog_item clearfix ">
                                    <div className="footer_blog_image"><img src="images/footer_blog_1.jpg" alt="Travel with us this year" /></div>
                                    <div className="footer_blog_content">
                                        <div className="footer_blog_title"><div>Travel with us this year</div></div>
                                        <div className="footer_blog_date">Nov 29, 2017</div>
                                    </div>
                                </div>
                                
                                {/* Footer blog item */}
                                <div className="footer_blog_item clearfix">
                                    <div className="footer_blog_image"><img src="images/footer_blog_2.jpg" alt="New destinations for you" /></div>
                                    <div className="footer_blog_content">
                                        <div className="footer_blog_title"><div>New destinations for you</div></div>
                                        <div className="footer_blog_date">Nov 29, 2017</div>
                                    </div>
                                </div>

                                {/* Footer blog item */}
                                <div className="footer_blog_item clearfix">
                                    <div className="footer_blog_image"><img src="images/footer_blog_3.jpg" alt="Travel with us this year" /></div>
                                    <div className="footer_blog_content">
                                        <div className="footer_blog_title"><div>Travel with us this year</div></div>
                                        <div className="footer_blog_date">Nov 29, 2017</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Footer Column */}
                    <div className="col-lg-3 footer_column">
                        <div className="footer_col">
                            <div className="footer_title">tags</div>
                            <div className="footer_content footer_tags">
                                <ul className="tags_list clearfix">
                                    <li className="tag_item"><div>design</div></li>
                                    <li className="tag_item"><div>fashion</div></li>
                                    <li className="tag_item"><div>music</div></li>
                                    <li className="tag_item"><div>video</div></li>
                                    <li className="tag_item"><div>party</div></li>
                                    <li className="tag_item"><div>photography</div></li>
                                    <li className="tag_item"><div>adventure</div></li>
                                    <li className="tag_item"><div>travel</div></li>
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
