import React from 'react';
import {CMSStyle} from './common/CustomStyle';
import PrivacyBanner from '../images/privacy_banner.png';
import ScrollToTopOnMount from './common/ScrollToTopOnMount';

const PrivacyPolicy = () => (
	<div>
		<ScrollToTopOnMount/>
		<section className="inner_banner" style={CMSStyle(PrivacyBanner)}>
      		<div className="container">
         		<div className="inner_banner_txt">
            		Privacy <span>Policy</span>
         		</div>
      		</div>  
    	</section>
    	<section>
	      	<div className="container">
	        	<div className="terms_panel">
	          		<p className="paragraph-6">This privacy policy describes Proof Technologies, LLC practices and procedures regarding the collection, use, disclosure, and sharing of your information when you use Proof. This online privacy policy applies only to information collected through our website and not to information collected offline.</p>
	          		<h2>What Information Do We Collect?</h2>
	          		<p className="paragraph-6">We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.</p>
	          		<h3>User-Provided Information</h3>
	          		<p className="paragraph-6">When ordering or registering on the Service you may be asked to enter your: name, e-mail address, mailing address, phone number or credit card information You also provide us information in Content you post to the Service. Your store and product information you provide to the Service, and metadata about them (such as when you posted them), are publicly viewable on the Service, along with your name. This information may be searched by search engines.</p>
	          		<h3>Information Collected Automatically</h3>
	          		<p className="paragraph-6">When you use the Service, we use persistent and session cookies (for information on cookies, please see below) and other tracking technologies such as log files, clear GIFs, and Flash technologies to: (a) store your username and password; (b) analyze the usage of the Service; (c) customize the Service to your preferences; and (d) control the advertising displayed by the Service. We also may include clear GIFs in HTML-based emails sent to our users to determine whether the message has been opened. As we adopt additional technology, we may also gather additional information through other methods. We use these automated technologies to collect and analyze certain types of information, including: (a) information related to the devices or browsers you use to access or interact with the Service, such as: IP addresses, geolocation information, unique device identifiers and other information about your mobile phone or other mobile device(s), browser types, browser language, and unique numbers or codes in cookies; and (b) information related to the ways in which you interact with the Service, such as: referring and exit pages and URLs, platform type, the number of clicks, domain names, landing pages, pages viewed and the order of those pages, the amount of time spent on particular pages, the date and time you used the Service, and other similar information. We may also capture other data, such as search criteria and results. We may collect different types of information about your location, including general information (e.g., IP address, zip code) and more specific information (e.g., GPS-based functionality on mobile devices used to access the Service), and may use that information to customize the Service with location-based information and features. If you access the Service through a mobile device and you do not want your device to provide us with location-tracking information, you can disable the GPS or other location-tracking functions on your device, provided your device allows you to do this.</p>
	          		<h3>Cookies</h3>
	          		<p className="paragraph-6">A cookie is a small text file stored by a website in a user’s web browser (e.g. Internet Explorer, Safari, Firefox or Chrome) that helps us in many ways to make your visit to our website more enjoyable and meaningful to you. Among other things, cookies avoid you having to log in every time you come back to our website. They also allow us to tailor a website or advertisement to better match your interests and preferences. A session cookie is stored only in your computer’s working memory (RAM) and only lasts for your browsing session. When you close all your browser’s windows, or when you shut down your computer, the session cookie disappears forever. A persistent cookie remains on your computer after you close your browser so that it can be used by your browser on subsequent visits to the Service. Persistent cookies stay on your computer until either they expire or are overwritten with newer cookies, or you manually remove them. Most browsers can be configured not to accept cookies, however, this may prevent you from having access to some site functions or features. While specific names of the cookies and similar technologies that we use may change from time to time as we improve and update our services, they generally fall into the below categories of use:<br/><br/>Authentication and security cookies. We use these cookies to enable you to remain logged into Proof, and verify that it is you as you use Proof. This helps keep your account safe and secure from unauthorized use, and helps combat spam and other abuse which violates our policies.<br/><br/>Analytics and research cookies. We use these cookies to better understand how people use Proof. For example, how often particular features are used, or which content leads towards user activity.<br/><br/>Product features and setting cookies. We use these cookies to enable the functionality of some features within the Proof product, in particular to personalize the experience towards you. We also use these cookies to store certain of your preferences and settings.<br/><br/>Advertising cookies. We use these cookies to help deliver relevant ads to you and your users, and measure the performance of ads. Google, as a third party vendor, uses cookies to serve ads on your site. Google’s use of the DART cookie enables it to serve ads to your users based on their visit to your sites and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.<br/><br/>We also use cookies to show you advertisements on other websites, including Google. Third party vendors, including Google, also use these cookies to serve ads based on your past visits to our website. Third party vendors, including Google, also show our ads on their websites across the internet. We use this “remarketing” to promote Proof and any other products we promote. You can opt out of Google’s use of cookies by visiting Google’s Ads Settings. Alternatively, you can opt out of a third-party vendor’s use of cookies by visiting the Network Advertising Initiative opt-out page.<br/><br/>For additional information on how to block cookies, please refer to the privacy or security settings of your browser.</p>
	        	</div>
	      	</div>  
		</section>
	</div>
);

export default PrivacyPolicy