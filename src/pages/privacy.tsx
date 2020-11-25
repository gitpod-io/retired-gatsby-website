import React from 'react'
import IndexLayout from '../layouts'
import TextBox from '../components/TextBox'

const PrivacyPage: React.SFC<{}> = () => (
  <IndexLayout canonical="/privacy/" title="Privacy">
    <TextBox>
      <h1>Privacy Policy</h1>

      <p>
        Below we provide you with an overview of what data we collect for what purpose and how we ensure the protection of the data{' '}
        <a href="#short">in short</a> and <a href="#detailed">in a more detailed form</a>.
      </p>

      <p>
        The controller is TypeFox GmbH, Am Germaniahafen 1, 24143 Kiel/Germany, registered with the commercial register of the local court
        (Amtsgericht) Kiel under HRB 17385, represented by the managing directors Sven Efftinge, Moritz Eysholdt, Dr. Jan K&ouml;hnlein (
        <strong>"we/us/our"</strong> or <strong>"Gitpod"</strong>). We offer services to our users and visitors (the{' '}
        <strong>"User/you/your"</strong>) on our website <a href="/">https://gitpod.io</a>(<strong>"Website"</strong>) as well as related
        services including the use of our service according to our <a href="/terms/">terms of service</a>
        (jointly the <strong>"Service"</strong>).
      </p>
      <p>
        For any questions about data protection you may contact us via <a href="mailto:data@typefox.io">data@typefox.io</a>.
      </p>

      <h2 id="short">In Short</h2>

      <table>
        <tr>
          <td>Controller</td>
          <td>
            <p>
              TypeFox GmbH
              <br /> Am Germaniahafen 1, 24143 Kiel/Germany
              <br /> registered with the commercial register of the local court <em>(Amtsgericht)</em> Kiel under HRB 17385
              <br /> represented by the managing directors Sven Efftinge, Moritz Eysholdt, Dr. Jan K&ouml;hnlein <br /> Phone:
              +49-431-99026870
              <br /> Email: contact@typefox.io
            </p>
            <p>
              We have appointed a data protection officer who may be contacted via <a href="mailto:data@typefox.io">data@typefox.io</a>.
            </p>
            <p>This privacy policy also contains further data controllers.</p>
          </td>
        </tr>
        <tr>
          <td>Purpose and Legal Basis of Processing Data; Provision and Recipients of Data</td>
          <td>
            <p>Your data will be used for the following purposes:</p>
            <ul>
              <li>to provide the functioning Website,</li>
              <li>to implement this privacy policy and carrying out the contractual relationship and our Service,</li>
              <li>
                to analyze your use of our Service and improve our Service with our legitimate interests of marketing and fraud prevention,
              </li>
              <li>to provide and analyze our pages on Social Media,</li>
              <li>to act according to our legal obligations, or</li>
              <li>as otherwise explained in this privacy policy or by any communication by us.</li>
            </ul>
            <p>Furthermore, your data will be processed by us with your explicit consent. </p>
            <p>
              Applicable legal provisions are in particular those of the regulation (EU) 2016/679 of the European Parliament and Council of
              27 April 2016, repealing the directive 95/46/EC, on the protection of individuals with regard to the processing of personal
              data, on the free movement of such data ("General Data Protection Regulation", GDPR) as well as in the Federal Data Protection
              Act <em>(Bundesdatenschutzgesetz, BDSG)</em> and the German Telemedia Act <em>(Telemediengesetz, TMG)</em>.
            </p>
            <p>
              We as well as our external service partners receive your data for processing those for the purpose of providing our Service.
              You provide data if this is necessary for the aforementioned purposes. In the event you refrain from providing such data you
              may face legal disadvantages, for example, limited or no possibility of using our Service.
            </p>
          </td>
        </tr>
        <tr>
          <td>Transfer of Data outside of the EU</td>
          <td>
            <p>
              In course of data processing by us data may be transferred to third countries, i.e. countries outside the EU. This may happen
              via implementation of third party providers such as cloud services and external service partners which process data on our
              behalf.
            </p>
          </td>
        </tr>
        <tr>
          <td>Your Rights</td>
          <td>
            <p>
              You have the right to withdraw your consent relating to the use of data any time with effect for the future when such data
              processing is based in your consent.
            </p>
            <p>
              {' '}
              You are entitled to access the data stored by us and are also entitled to amend or rectify your data if such data are
              incorrect.
            </p>
            <p>
              {' '}
              You have the right to object to the processing of your personal data, for example if your personal data are processed for
              direct marketing purposes.
            </p>
            <p>You are entitled to request the erasure of your data. </p>
            <p>
              You are entitled to receive information about the stored data (in a structured, current and machine-readable format) at any
              time and to request the correction or deletion of the data in case of incorrect data storage.
            </p>
            <p>
              You have also the right to lodge a complaint with a supervisory authority at your choice. An overview of the European National
              Data Protection Authorities may be found here: http://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080
              <br />
            </p>
          </td>
        </tr>
        <tr>
          <td>Period for Storing Data; Deletion</td>
          <td>
            <p>The data are deleted if such data are no longer necessary for the purpose of processing.</p>
          </td>
        </tr>
        <tr>
          <td>Data Security</td>
          <td>
            <p>
              We have implemented measures to ensure data and IT security. The Website is operated through a safe SSL-connection. If an
              SSL-connection is activated third parties are prevented from reading any data that are transferred by you to us.
            </p>
          </td>
        </tr>
      </table>

      <h2 id="detailed">More Detailed Information</h2>

      <ul>
        <li>
          <a href="#details-I">I. What are Personal Data?</a>
        </li>
        <li>
          <a href="#details-II">II. How are my Data processed when visiting the Website and contacting us?</a>
        </li>
        <li>
          <a href="#details-III">III. What Third Party Services, Cookies, Analytics and Social Plugins does the Website use?</a>
        </li>
        <li>
          <a href="#details-IV">IV: How are my data processed when using the Gitpod Service (with User Account)?</a>
        </li>
        <li>
          <a href="#details-V">V: How are Data processed when visiting our Social Media pages?</a>
        </li>
        <li>
          <a href="#details-VI">
            VI. Are my Data transferred to Third Parties? Does automated decision making including profiling take place?
          </a>
        </li>
        <li>
          <a href="#details-VII">VII. Are my Data transferred outside the EU?</a>
        </li>
        <li>
          <a href="#details-VIII">VIII. Your Rights</a>
        </li>
        <li>
          <a href="#details-IX">
            IX. Duration of Storing your Data; Data Security; Access and Changes to this Privacy Policy; Contact Details
          </a>
        </li>
      </ul>

      <h2 id="details-I">I. What are Personal Data?</h2>
      <p>
        Personal data are any information relating to an identified or identifiable natural person. Personal data includes e.g. name, email
        address or telephone number. Personal data also includes information about hobbies, memberships or websites viewed. We will only
        collect, use and/or pass on personal data if this is permitted by law or if the User consents to the data processing.
      </p>
      <h2 id="details-II">II. How are my Data processed when visiting the Website and contacting us?</h2>
      <h3>Visiting the Website</h3>
      <p>
        If you browse our Website the provider of the website collects and stores information automatically in so-called "server-log-files"
        that your browser transfers to us. These are:
        <em>
          type/version of the browser, system software used, referrer URL, hostname of the device, time of the server request, IP-address or
          other unique device identifier.
        </em>
      </p>

      <p>
        If you are using a mobile device the following data may also be processed additionally through the Website:
        <em>country code, language, hostname of the device, name and version of the operational system.</em>
      </p>

      <p>
        We use these data only for statistical analysis for the purpose of operation, security and optimization of our Website. This data
        processing is based on Art. 6 (1) c. for providing a secure and stable Website and Service. The data processing may also be based on
        Art. 6 (1) f. GDPR or TMG and we wish to achieve the legitimate interests of stabilizing and improving our Website, quality
        insurance and fraud prevention.
      </p>

      <h3>Contacting us</h3>
      <p>
        When contacting us via email, the User’s details are stored for the purpose of processing the enquiry and, if applicable, follow-up
        questions based on your consent based on the legal basis of Art. 6 (1) a. GDPR or fulfilling your request based on Art. 6 (1) b.
        GDPR.
      </p>

      <h3>Emails and Newsletters</h3>
      <p>With the newsletter we inform the user about the Website, our Service and us.</p>

      <p>
        When registering for the newsletter via the Website, you have to provide an email address. This email address will be transmitted to
        and stored by us (or a provider as specified below). After registration, you will receive an email to confirm the registration
        ("double opt-in"). Via clicking the registration link you have given your consent to the processing of your personal data for
        receiving our newsletter and analyzing such newsletters according to Art. 6 (1) a. GDPR and we may process such data accordingly. In
        case of registration for the newsletter we (or our provider as specified below) also store the IP address, the device name, the mail
        provider as well as the user's first and last name and the date of registration.
      </p>

      <p>
        We may also send you newsletters referring to similar services and products if you have an existing contractual relationship with us
        and you did not object receiving such emails. The legal basis for such processing of data for sending and analyzing such newsletters
        is your consent (Art. 6 (1) a. GDPR) or an existing contractual relationship (Art. 6 (1) b. GDPR).
      </p>

      <p id="mailchimp">
        <strong>Use of Mailchimp:</strong>
        The mail provider <strong>"Mailchimp"</strong> by Rocket Science Group LLC, 675 Ponce De Leon Ave NE, Suite 5000, Atlanta, GA 30308,
        USA receives and processes on our behalf the data necessary for the emails and newsletters, in particular email address, IP address,
        device name. These data are processed on servers in the USA. Mailchimp is certified according to "privacy shield". The "privacy
        shield" is an agreement between the European Union (EU) and the USA to ensure compliance with European data protection standards in
        the USA. Mailchimp is a service with which the dispatch of newsletters can be organized and analyzed. With the help of Mailchimp we
        can analyze our newsletter campaigns. When you open an e-mail sent with Mailchimp, a file contained in the e-mail (so-called web
        beacon) connects to the Mailchimp servers in the USA. This allows you to determine whether a newsletter message has been opened and
        which links have been clicked on. In addition, technical information is recorded (e.g. time of registration, IP address, browser
        type and operating system). This information cannot be assigned to the respective newsletter recipient. They are used exclusively
        for statistical analysis of newsletter campaigns. The results of these analyses can be used to better adapt future newsletters to
        the interests of the recipients. Details on Mailchimp and its privacy policy can be found here: https://mailchimp.com/legal/privacy/
      </p>

      <p>
        The data are stored for the purpose of newsletter subscription will be stored by us until you unsubscribe from the newsletter and
        will be deleted from our servers as well as from the servers of Mailchimp after you unsubscribe from the newsletter. Data stored by
        us for other purposes (e.g. email address for the use of our Service) remain unaffected.
      </p>

      <p>
        <strong>
          You can withdraw your consent or object to the processing of data (email address) and their respective use for sending the
          newsletter and analyzing your data at any time.
        </strong>{' '}
        This can be done free of charge (except for the transmission costs) and via a link in the newsletter itself or notification to us
        or, if applicable, to Mailchimp.
      </p>

      <h2 id="details-III">III. What Third Party Services, Cookies, Analytics and Social Plugins does the Website use?</h2>

      <h3>Cookies</h3>
      <p>
        In order to offer you a convenient online service featuring numerous functions, our Website uses text files (
        <strong>"Cookies"</strong>) containing information to identify returning visitors for the time of their visit to our Website.
        Cookies are usually saved on your device and do not cause any harm. Cookies facilitate the transfer of specific content, such as
        entering data, which has already been supplied, and help us identify popular sections of our Website.
      </p>

      <p>
        The processing of data when using Cookies is based on our legitimate interests of a statistical analysis of the User relationship
        for marketing and quality assurance purposes according to Art. 6 (1) f. GDPR or TMG.
      </p>

      <p>
        <strong>OPT-OUT:</strong> You can deactivate the use of Cookies in the settings of your browser at any time. To find out how to
        change the settings, please consult the help function of your browser. Users may also manage a lot of online Cookies by different
        businesses on the US-website http://www.aboutads.info/choices/ or the EU-website
        http://www.youronlinechoices.com/uk/your-ad-choices/. However, we want to point out that without Cookies the use and comfort of use
        of our services may be restricted.
      </p>

      <h3>Google Analytics</h3>
      <p>
        We use Google Analytics a web analytics tool offered by Google (inter alia Google Ireland Limited, Gordon House, Barrow Street,
        Dublin 4, Ireland and Google LLC, Mountain View, CA, USA (<strong>"Google"</strong>). This analysis service uses so-called
        "cookies". For analysis, text files will be stored on your device. The information stored in the corresponding files about the use
        of this website are generally transmitted and stored in Google server in the USA. As the IP anonymization is active on this Website,
        your IP address will be shortened by Google within the member states of the European Union (EU). This information will be used to
        evaluate your use of the services offered here and enable the operator of this website to analyze your website activity and provide
        other services associated with the website service. The IP address transmitted from your browser, as part of Google Analytics will
        not be merged with other data from Google.
      </p>

      <p>
        When the IP address is processed this is based on our legitimate interests of a statistical analysis of the relationship for
        marketing and quality assurance purposes according to Art. 6 (1) f. GDPR or TMG.
      </p>

      <p>
        Adjusting the settings of your browser can prevent the use of cookies. In this case, it may be possible that the functions of the
        service offered here cannot be used in its entirety. Furthermore, it is possible to prevent the acquisition and processing of data
        generated by the "cookies" in relation to the use of this website, by downloading and installing the browser plugin available at the
        following link: http://tools.google.com/dlpage/gaoptout?hl=de
      </p>

      <p>
        We point out that an <a href="#details-VI">automated decision making or profiling</a> can take place when integrating Google or an
        existing Google account.
      </p>
      <p>
        For Users who have their usual residence in the European Economic Area or Switzerland, Google Ireland Limited is the data controller
        for your data, unless otherwise stated in the privacy notices of a particular service. Google Ireland Limited is therefore the
        company affiliated with Google which is responsible for processing your data and complying with applicable data protection laws.
      </p>
      <p>
        You can also find more information in Google's privacy policy{' '}
        <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>.
      </p>

      <h3>Google Fonts</h3>
      <p>
        Our Website uses the <strong>"Google Fonts"</strong> service of Google (inter alia Google Ireland Limited, Gordon House, Barrow
        Street, Dublin 4, Ireland and Google LLC, Mountain View, CA, USA to integrate and display text on the website. For this purpose
        Google may process your data (including the IP address) on servers in the USA.
      </p>

      <p>
        When the IP address is processed this is based on our legitimate interests of technical functionality of the Website based on Art. 6
        (1) f. GDPR or TMG.
      </p>
      <p>
        For Users who have their usual residence in the European Economic Area or Switzerland, Google Ireland Limited is the data controller
        for your data, unless otherwise stated in the privacy notices of a particular service. Google Ireland Limited is therefore the
        company affiliated with Google which is responsible for processing your data and complying with applicable data protection laws.
      </p>
      <p>
        You can also find more information in Google's privacy policy:{' '}
        <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>
      </p>

      <h3>Mailchimp</h3>
      <p>
        We use the services by Mailchimp for sending newsletters and emails. For details on Mailchimp please refer to the
        <a href="#mailchimp">respective section above</a>.
      </p>

      <h3 id="youtube">Youtube</h3>
      <p>
        We use the YouTube.com platform to [post our own videos and] make them publicly available. YouTube is operated by Google (inter alia
        Youtube LLC, USA and Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland).
      </p>

      <p>
        Some of our Website contain links to the YouTube platform. In general, we are not responsible for the content of websites to which
        links are provided. In the event that you click a link on YouTube, we would like to point out that YouTube stores the data of its
        users (e.g. personal information, IP address) in accordance with its own privacy guidelines and uses them for business purposes.
      </p>
      <p>
        On our Website we also integrate videos stored on YouTube directly. In this integration, content from the YouTube website is
        displayed in sub-areas of a browser window. However, YouTube videos are only accessed by clicking on them separately. This technique
        is also called ‘framing’. If you click on a (sub-)page of our Website where YouTube videos are included, a connection is established
        to the YouTube servers and the content is displayed on the Website by notifying your browser.
      </p>
      <p>
        YouTube content is only integrated in the ‘extended data protection mode’. YouTube provides this by itself, thereby ensuring that
        YouTube does not initially store any cookies on your device. However, when you access the relevant pages, the IP address and the
        other data are processed by Youtube. However, this information cannot be assigned to you unless you log in your YouTube or another
        Google service (e.g. Gmail) account or are permanently registered before accessing the site.
      </p>
      <p>
        As soon as you click on an integrated video, YouTube only stores cookies on your device that do not contain any personally
        identifiable data, unless you are currently logged in to a Google service. These cookies can be prevented by appropriate browser
        settings and extensions (see above [add link to opt-out in the “Cookies” section above].
      </p>
      <p>
        For Users who have their usual residence in the European Economic Area or Switzerland, Google Ireland Limited is the data controller
        for your data, unless otherwise stated in the privacy notices of a particular service. Google Ireland Limited is therefore the
        company affiliated with Google which is responsible for processing your data and complying with applicable data protection laws.
      </p>
      <p>
        Further information about data processing and privacy practices of YouTube and Google can be found at
        www.google.de/intl/de/policies/privacy/ and https://support.google.com/youtube/answer/171780?hl=e
      </p>

      <h2 id="details-IV">IV. How are my Data processed when using the Gitpod Service (with User Account)?</h2>

      <h3>Registration and Access to Existing Account</h3>
      <p>
        In order to fully use our full online Service, you will need to register. You may only register if you have an existing user account
        at the third party services set forth on the Website, for example the service offered on the website https://github.com operated by
        GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA, (<strong>"Existing Account"</strong>).
      </p>

      <p>
        When you sign up for using the Gitpod Service via your Existing Account, data at such Existing Account with be accessible by us with
        your explicit consent only. Such data include:
        <em>user profile data (name, username and email address), list of repositories you have access to.</em>
      </p>

      <p>You can manage these data at any time via using your Existing Account linked to the Gitpod Service.</p>

      <p>
        The data entered or transferred via the Existing Account as part of the registration process and any further data entered, will only
        be used via the Website and with our support to the extent that this processing is necessary for the fulfillment of a contract with
        us or for the implementation of pre-contractual measures, i.e. use of the Gitpod Service, as well as for the execution and
        processing of inquiries by you.
      </p>

      <p>
        The processing of data when using our Service is generally based on your explicit consent when signing up (based on Art. 6 (1) a.
        GDPR) as well as the legal basis of Art. 6 (1) b. GDPR or TMG, i.e. the data will be processed, when this is necessary for the
        fulfillment of the contract between you and us or for executing any measures that take place on your request prior to the contract.
      </p>

      <h3>Use of the Gitpod Service</h3>
      <p>
        For the further use of the Gitpod Service on the Website you submit more data depending on the way of use of our services according
        to our <a href="/terms/">terms of service</a>.
      </p>

      <p>
        We use the information and data collected in the Service, including your personal data, in order to fulfill our contractual
        obligations for you/our customers based on the legal basis of Art. 6 (1) b. GDPR or TMG and as further set forth in this privacy
        policy or our <a href="/terms/">terms of service</a>. This also includes sending you emails and notifications necessary for the
        Service.
      </p>

      <p>
        In the event we process personal data controlled by the customer as data processor we will offer and enter into a respective
        separate data processing agreement with such customer whereas such data processing agreement may be requested via email to
        <a href="mailto:data@typefox.io">data@typefox.io</a>.
      </p>

      <p>
        We do not store or receive any kind of payment or credit card data but use external payment providers as set forth on the Website.
      </p>

      <p>
        We may also analyze your personal data when using the Gitpod Service for the purpose of improving our Service. We may also store
        your data to assure fair use of our Service. The legal basis for analyzing and storing such data is Art. 6 (1) f. GDPR with our
        legitimate interest of marketing, quality assurance and fraud prevention.
      </p>
      <p>
        We also process your data if this is necessary to comply with our legal obligations (legal basis: Art. 6 (1) c. GDPR), for example
        legal retention periods.
      </p>
      <p>For the abovementioned purposes your data may also be shared with our shareholders or affiliated companies.</p>
      <h3>Integration of Third Party Services</h3>
      <p>
        When using the Gitpod Service your data may also be processed by third party providers as set forth in this privacy policy, for
        example <a href="#freshchat">FreshChat</a>. For details please refer to <a href="#details-III">III.</a> above as well as{' '}
        <a href="#details-VI">VI.</a> and <a href="#details-VII">VII.</a> below.
      </p>

      <p>
        When using our paid Service your data will be processed by external payment providers. Currently we use the payment services by
        Stripe (for EU/EEA: Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland; more information:
        https://stripe.com/de/privacy ; contact: https://stripe.com/contact) and Chargebee (by Chargebee Inc. 340 S Lemon Avenue, 1537
        Walnut, CA 91789, USA; more information: https://www.chargebee.com/privacy/ ). When using such services your data may be processed
        outside the EU. The US companies of Stripe and Chargebee are each certified according to ‘Privacy Shield’ to comply with data
        protection standards applicable in the EU (for more information please refer to: https://www.privacyshield.gov/ ).
      </p>
      <p>
        Our service may also include links to pages on Twitter, Medium, Spectrum Chat/Github). For details please refer to V. below [add
        link to V.].
      </p>
      <h2 id="details-V">V. How are Data processed when visiting our Social Media pages?</h2>
      <p>We operate pages on</p>
      <ul>
        <li>
          Twitter (twitter.com or applications) by Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA, please also
          refer to: https://twitter.com/de/privacy / https://twitter.com/personalization;
        </li>
        <li>
          Medium (medium.com or applications) by A Medium Corporation, 799 Market Street, 5th Floor, San Francisco, CA 94103, USA, please
          also refer to: https://medium.com/policy/medium-privacy-policy-f03bf92035c / https://medium.com/me/settings /
          https://medium.com/me/following/suggestions
        </li>
        <li>
          Spectrum Chat (spectrum.chat or applications) by GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA, please also
          refer to: https://spectrum.chat/privacy.html
        </li>
      </ul>
      <p>When you visit our Social Media pages, data is processed both by us and by the responsible social media provider.</p>
      <p>
        The respective provider of Social Media assumes the data protection obligations towards you as the user, such as information on data
        processing, and is the contact person for your rights. This results from the fact that such provider has direct access to the
        relevant information on the Social Media page and the processing of your data. However, you are also welcome to contact us if this
        should become necessary and we will then forward the request to the respective provider if necessary.
      </p>
      <p>
        When using the Social Media providers set forth above data may also be processed outside the EU. The US companies of Github and
        Twitter are certified in accordance with the EU-US Privacy Shield agreement, which guarantees compliance with data protection
        regulations in the EU. For more information please refer to their respective privacy policies or https://www.privacyshield.gov . By
        using Medium Services, you authorize Medium to transfer, store, and use your information in the United States and any other country
        where Medium operates. Where your data is disclosed to Medium’s processors, it is subject by contract to at least the same level of
        data protection as that set forth under https://medium.com/policy/medium-privacy-policy-f03bf92035c9.
      </p>
      <p>
        With our Social Media pages, we can communicate with you and provide you with interesting information. We may receive further data
        from you through your comments, shared images, messages and reactions, which are then processed to answer or communicate with you.
        If you use Social Media on several end devices, a cross-device analysis of the data can take place. Furthermore, the providers of
        the Social Media pages may also use cookies and tracking technologies to analyze and improve their services.
      </p>
      <p>
        Data processing takes place with your consent or for the purpose of answering your enquiry (Art. 6 (1) a, b GDPR) or on the basis of
        legitimate interests in improving the services, advertising and marketing activities and presentation to the outside world (Art. 6
        (1) f GDPR).
      </p>
      <p>
        As Twitter user, you can at any time influence how your user behavior is recorded when you visit Twitter pages. To do this, you can
        manage the settings for advertising preferences in your Twitter account or under https://twitter.com/personalization or
        https://twitter.com/de/privacy#overlay-chapter2.10.1 or without an account under https://pscp.tv/account/settings. Twitter also
        provides opportunities to contact or exercise rights at https://help.twitter.com/forms/privacy.
      </p>
      <p>
        As Medium user, you can at any time influence how your user behavior is recorded when you visit Medium pages. To do this, you can
        manage the settings for advertising preferences in your Medium account or under https://medium.com/me/settings or
        https://medium.com/me/following/suggestions. Medium also provides opportunities to contact or exercise rights in their privacy
        policy under https://medium.com/policy/medium-privacy- policy-f03bf92035c9.
      </p>
      <p>
        As a user of Spectrum Chat / Github you can find more information on how to influence the processing of your data in their privacy
        policy https://spectrum.chat/privacy.html or contact them via help@spectrum.chat.
      </p>
      <h2 id="details-VI">VI. Are my Data transferred to Third Parties? Does Profiling or automated decision making take place?</h2>

      <h3>Transfer of Data to Third Parties</h3>
      <p>
        We will transfer your personal data to a third party only within the scope of legal provisions, i.e. if we are obliged to transfer
        the data due to a government or court order, or, if applicable, legal provisions authorize the transfer or if you give your explicit
        consent.
      </p>

      <p>
        For more information please refer to this privacy policy or contact us via <a href="mailto:data@typefox.io">data@typefox.io</a>.
      </p>

      <h3>Automated Decision Making including Profiling</h3>
      <p>
        In general we do not process any personal data via automated decision making including profiling via the Website or Service.
        However, such profiling or automated decision making may happen by third party providers through the Website or Service. We will
        inform you about such fact if possible.
      </p>

      <p>
        Profiling means any automated processing of personal data consisting in the use of such personal data to evaluate certain personal
        aspects relating to a natural person, in particular to analyse or predict aspects relating to the performance of work, economic
        situation, health, personal preferences, interests, reliability, behaviour, location or relocation of that natural person. Examples
        of such profiling include the analysis of data (e.g. based on statistical methods) with the aim of displaying personalized
        advertising to the user or giving shopping tips. The data subject shall not be subject to a decision based exclusively on automated
        processing, including profiling, which has legal effect against him or significantly affects him or her in a similar manner.
      </p>

      <h2 id="details-VII">VII. Are my Data transferred outside the EU?</h2>
      <p>
        When visiting the Website and using our Service data may be transferred to countries outside the EU whereas the services by{' '}
        <a href="#google">Google/Youtube</a>, <a href="#mailchimp">Mailchimp</a>, <a href="#github">GitHub</a>,{' '}
        <a href="#chargebee">Chargebee</a> and , <a href="#stripe">Stripe</a> are affected.
      </p>

      <p>
        When using our Service your data may also be processed by our cloud service provider (namely: Google Cloud) on servers outside the
        EU.
      </p>

      <p>
        The US companies providing the services of Google, Mailchimp, GitHub, Stripe and Chargebee are each certified under
        EU-US-Privacy-Shield and comply with data protection standards applicable in the EU. For more information on EU-US-Privacy-Shield
        and details about the certificates please refer to: https://www.privacyshield.gov
      </p>
      <p>
        Your data may also be processed outside the EU when visiting our Social Media pages. For further information please refer to{' '}
        <a href="#details-V">section V.</a>.
      </p>

      <h2 id="details-VIII">VIII. Your Rights</h2>

      <p>
        <strong>As a data subject you have the right:</strong>
      </p>
      <ul>
        <li>
          to withdraw your consent to us at any time. As a result, we are no longer allowed to continue the processing of data based on this
          consent in the future;
        </li>
        <li>
          to object to the processing of your personal data, if your personal data are processed on the basis of legitimate interests
          pursuant to Art. 6 (1) f. GDPR insofar as there are reasons for this arising from your particular situation;
        </li>
        <li>to obtain from us access to your personal data;</li>
        <li>to obtain from us without undue delay the rectification of inaccurate personal data concerning you;</li>
        <li>
          to obtain the erasure of your personal data stored with us, unless the processing is necessary to exercise the right to free
          expression of opinion and information, to fulfill a legal obligation, for reasons of public interest or to assert, exercise or
          defend legal claims;
        </li>
        <li>
          to demand the restriction of the processing of your personal data, if the accuracy of the data is disputed by you, the processing
          is unlawful, but you refuse its deletion and we no longer need the data, but you need it to assert, exercise or defend legal
          claims or you have filed an objection against the processing; and
        </li>
        <li>
          to receive your personal data, which you have provided to us, in a structured, current and machine-readable format or to request
          the transmission to another controller.
        </li>
      </ul>

      <p>
        If you wish to make use of your rights mentioned above please send an email to <a href="mailto:data@typefox.io">data@typefox.io</a>.
      </p>

      <p>
        If you obtain access to your personal data you may, in particular, request access to the following information: the purposes of the
        processing, the categories of personal data concerned, the recipients or categories of recipients to whom the personal data have
        been or will be disclosed. We also will, if possible, give information about the envisaged period of time for which the personal
        data will be stored, the existence of the right to request from the controller rectification or erasure of personal data or
        restriction of processing of personal data concerning the data subject or to object to such processing, the right to lodge a
        complaint with a supervisory authority and where the personal data are not collected from the data subject, any available
        information as to their source and the existence of automated decision-making, including profiling and meaningful information about
        this event.
      </p>

      <p>
        <strong>You have the right to lodge a complaint vis-&agrave;-vis a supervisory authority of your choice. </strong>
        For example for Berlin/Germany: https://www.datenschutz-berlin.de/kontakt.html. An overview of the European National Data Protection
        Authorities may be found here: http://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080
      </p>

      <h2 id="details-IX">IX. Duration of Storing your Data; Data Security; Access and Changes to this Privacy Policy; Contact Details</h2>

      <h3>Duration of Storing your Data</h3>
      <p>
        As a rule, we only store your personal data for as long as it is necessary for the execution of the contract or the respective
        purpose and limit the storage period to an absolutely necessary minimum. Your IP-address and server-log-files (as set forth above)
        are stored for seven (7) days for security and technical reasons.
      </p>

      <p>
        In the case of long-term contractual relationships, such as the use of our Service, these storage periods may vary, but are
        generally limited to the duration of the contractual relationship or, with regard to the inventory data, to the maximum legal
        retention periods, e.g. in accordance with the German Commercial Code <em>(Handelsgesetzbuch, HGB)</em> and the Tax Code{' '}
        <em>(Abgabenordnung, AO)</em>.
      </p>

      <p>
        Criteria for the storage period include whether the data are still up-to-date, whether the contractual relationship with us still
        exists, whether an inquiry has already been processed, whether a process has been completed or not, and whether legal retention
        periods for the personal data concerned are relevant or not.
      </p>

      <h3>Data Security</h3>
      <p>
        We have installed technical and organizational measures in order to safeguard our Website and/or Service against loss, destruction,
        access, changes or the distribution of your data by unauthorized persons.
      </p>

      <p>
        The Website and Service is operated through a safe SSL-connection. If an SSL-connection is activated third parties are prevented
        from reading any data that are transferred by you to us.
      </p>

      <h3>Access and Changes to this Privacy Policy</h3>
      <p>
        This privacy policy is accessible via our Website under <a href="/privacy/">https://gitpod.io/privacy/</a>
        and may be downloaded and printed anytime.
      </p>

      <p>
        We reserve the right to change the regulations of this privacy policy at any time, taking into account currently applicable data
        protection provisions. In case of any changes, you will be notified.
      </p>

      <h3>Contact Details</h3>
      <p>
        For any inquiries and additional questions about processing personal data please contact{' '}
        <a href="mailto:data@typefox.io">data@typefox.io</a>. Further details may be found here:{' '}
        <a href="/imprint/">https://gitpod.io/imprint/</a>
      </p>
    </TextBox>
  </IndexLayout>
)

export default PrivacyPage
