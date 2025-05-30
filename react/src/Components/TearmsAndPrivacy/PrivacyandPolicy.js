import React from "react";
import { Dialog, DialogContent, DialogActions } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";

export const PrivacyandPolicy = ({ open, onClose }) => {
  return (
    <div
      style={{
        color: "#000000", // Black text
        backgroundColor: "#ffffff", // White background
      }}
    >
      <style>
        {`
          .custom-close-icon {
            font-size: 35px;
            font-weight: 100;
            color: rgb(128, 128, 128);
            padding: 4px;
            line-height: 1;
            cursor: pointer;
            background: transparent;
            border: none;
            transition: color 0.2s, opacity 0.2s;
          }

          .custom-close-icon:hover {
            color: #000000;
            opacity: 0.7;
          }
        `}
      </style>
      {/* Privacy Policy Dialog */}
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth={false}
        scroll="paper"
        sx={{
          "& .MuiPaper-root": {
            width: { xs: "95%", sm: "800px" },
            maxWidth: { xs: "95vw", sm: "800px" },
            backgroundColor: "#ffffff",
            color: "#000000",
            border: "1px solid #000000",
            borderRadius: 1.5,
            overflowX: "hidden",
            padding: { xs: "8px", sm: "15px" },
            margin: { xs: "0 auto", sm: "auto" },
          },
        }}
      >
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: { xs: "8px", sm: "16px" },
            borderBottom: "1px solid #ccc",
            minHeight: "48px",
          }}
        >
          <AiOutlineClose
            onClick={onClose}
            className="custom-close-icon"
          />
        </DialogActions>
        <DialogContent
          sx={{
            width: "100%",
            padding: { xs: "16px", sm: "24px" },
            "&::-webkit-scrollbar-track": {
              marginRight: "20px",
            },
          }}
        >
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Privacy And Policy
          </h2>
          <h4>Last updated: July, 2021</h4>
          <p>
            This Privacy Statement describes the personal data we collect and/or
            process (which may include collecting, organizing, structuring,
            storing, using, or disclosing) to provide products and services
            offered directly by Kia Digi-Connect (“Kia Digi-Connect”),
            including Kia Digi-Connect’s websites and its meetings, webinars,
            and messaging platform.
          </p>
          <p>
            Kia Digi-Connect respects your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit the Kia Digi-Connect App. Please read this Privacy Policy
            carefully.
          </p>
          <h3>Acceptance of Terms of the Privacy Policy by the Users</h3>
          <p>
            This Privacy Policy is applicable when you access and use the
            Digi-Connect App. By using the App, you signify your acceptance of
            the Privacy Policy and expressly consent to our collection, use,
            disclosure, and retention of your personal information as described
            in this Privacy Policy. If you do not agree to this Privacy Policy
            and/or to our processing of your data/information in the manner
            outlined in this Privacy Policy, please do not use this App or
            submit any personal data to us. Our Privacy Policy is subject to
            change at any time without notice. To make sure you are aware of any
            changes, please review this Privacy Policy periodically. Your
            continued use of the App following the posting of changes to this
            Privacy Policy shall be deemed your acceptance of those changes.
          </p>
          <h3>BY USING OUR SERVICES OR BY OTHERWISE GIVING US YOUR PERSONAL INFORMATION, YOU AGREE TO THE TERMS OF THIS PRIVACY POLICY</h3>
          <h3>Purpose</h3>
          <p>
            The purpose of this privacy statement is to ensure that sensitive
            data and information of data providers are adequately protected and
            maintained and that providers of such data have given their consent
            to the purpose of usage of such data, prior to the collection of
            such data and information.
          </p>
          <h3>Scope of the Privacy Policy</h3>
          <p>
            This Privacy Policy refers and applies only to the Digi-Connect App.
            Its main aim is to inform the users of the way their personal data
            is collected and processed, providing relevant information to the
            user, as well as fixing the accessing conditions and the use of the
            App.
          </p>
          <h3>Data Collection Methods</h3>
          <p>
            Kia Digi-Connect collects the data and information, either personal
            or sensitive, from the present and prospective employees,
            contractors, agents, affiliates, clients, business partners, dealers,
            sub-dealers, and other entities through various methods.
          </p>
          <h4 style={{ color: "blue" }}>What Personal Data Do We Receive?</h4>
          <p>
            Personal data is any information from or about an identified or
            identifiable person, including information that Kia Digi-Connect can
            associate with an individual person. We may collect, or process on
            behalf of our customers, the following categories of personal data
            when you use or interact with Kia Digi-Connect Products:
          </p>
          <p>
            <b>Account Information:</b> Information associated with an account
            that licenses Kia Digi-Connect, which may include administrator name,
            contact information, email ID.
          </p>
          <p>
            <b>Profile and Participant Information:</b> Information associated
            with the Kia Digi-Connect profile of a user who uses Kia
            Digi-Connect Products under a licensed account or that is provided
            by an unlicensed participant joining a meeting, which may include
            name, display name, picture, email address, phone number, job
            information, stated locale, user ID, or other information provided
            by the user or their account owner.
          </p>
          <p>
            <b>Contacts and Calendar Integrations:</b> Contact information added
            by accounts or their users to create contact lists on Kia
            Digi-Connect, which may include contact information a user
            integrates from a third-party app. Users can also integrate their
            calendars from other services with their Kia Digi-Connect profile or
            account.
          </p>
          <p>
            <b>Settings:</b> Information associated with the preferences and
            settings on the account or user profile, which may include audio and
            video settings, recording file location, screen sharing settings,
            and other settings and configuration information.
          </p>
          <p>
            <b>Registration Information:</b> Information people provide when
            registering for a Kia Digi-Connect meeting, webinar, or recording,
            which may include name and contact information, responses to
            registration questions, and other registration information requested
            by the host.
          </p>
          <p>
            <b>Device Information:</b> Information about the computers, phones,
            and other devices people use when interacting with Kia Digi-Connect
            Products, which may include information about the speakers,
            microphone, camera, OS version, hard disk ID, PC name, MAC address,
            IP address (which may be used to infer general location at a city or
            country level), device attributes (like operating system version and
            battery level), Wi-Fi information, and other device information
            (like Bluetooth signals).
          </p>
          <p>
            <b>Meeting, Webinar, and Messaging Content and Context:</b> Content
            generated in meetings, webinars, or messages that are hosted on Kia
            Digi-Connect, which may include audio, video, in-meeting messages,
            chat messaging content, transcriptions, written feedback, responses
            to polls and Q&A, and files, as well as related context, such as
            invitation details, meeting or chat name, or meeting agenda. Content
            may contain your voice and image, depending on the account owner’s
            settings, what you choose to share, your settings, and what you do
            on Kia Digi-Connect.
          </p>
          <p>
            <b>Product and Website Usage:</b> Information about how people and
            their devices interact with Kia Digi-Connect Products, such as: when
            participants join and leave a meeting; whether participants sent
            messages and who they message with; performance data; mouse
            movements, clicks, keystrokes or actions (such as mute/unmute or
            video on/off), and other user inputs that help Kia Digi-Connect to
            understand feature usage, improve product design, and suggest
            features; which third-party apps users add to a meeting or other
            Product and what information and actions the app is authorized to
            access and perform; features used (such as screen sharing, emojis,
            or filters); and other usage information and metrics. This also
            includes information about when and how people visit and interact
            with KIN Website including what pages they accessed, their
            interaction with the website features, and whether or not they
            signed up for a Kia Digi-Connect Product.
          </p>
          <p>
            <b>Communications with Kia Digi-Connect:</b> Information about your
            communications with Kia Digi-Connect, including relating to support
            questions, your account, and other inquiries.
          </p>
          <p>
            <b>Information from Partners:</b> Kia Digi-Connect obtains
            information about account owners and their users from Kia
            dealerships.
          </p>
          <h4 style={{ color: "blue" }}>How Do We Use Personal Data?</h4>
          <p>
            Kia Digi-Connect employees do not access meeting, webinar, or
            messaging content (specifically, audio, video, files, and messages)
            unless directed by an account owner, or as required for legal,
            safety, or security reasons, as discussed below. Kia Digi-Connect
            uses personal data to conduct the following activities:
          </p>
          <p>
            <b>Provide Kia Digi-Connect Products and Services:</b> To develop,
            test, and improve Kia Digi-Connect Products, including, for example,
            content-related features (such as background filters), and to
            troubleshoot products and features.
          </p>
          <p>
            <b>Product Research and Development:</b> To develop, test, and
            improve Kia Digi-Connect Products, including, for example,
            content-related features (such as background filters), and to
            troubleshoot products and features.
          </p>
          <p>
            <b>Authentication, Integrity, Security, and Safety:</b> To
            authenticate accounts and activity, detect, investigate, and prevent
            malicious conduct or unsafe experiences, address security threats,
            protect public safety, and secure Kia Digi-Connect Products.
          </p>
          <p>
            <b>Communicate with You:</b> We use personal data (including contact
            information) to communicate with you about our Products, features,
            and services, including product updates, your account, and changes
            to our policies and terms. We also use your information to respond
            to you when you contact us.
          </p>
          <p>
            <b>Legal Reasons:</b> To comply with applicable law or respond to
            valid legal process, including from law enforcement or government
            agencies, to investigate or participate in civil discovery,
            litigation, or other adversarial legal proceedings, and to enforce
            or investigate potential violations of our Terms of Service or
            policies.
          </p>
          <p>
            Kia Digi-Connect uses advanced tools to automatically scan content
            such as virtual backgrounds, profile images, and files uploaded or
            exchanged through chat, for the purpose of detecting and preventing
            violations of our terms or policies and illegal or other harmful
            activity, and its employees may investigate such content where
            required for legal, safety, or security reasons.
          </p>
          <h4 style={{ color: "blue" }}>
            Who Can See and Share My Personal Data When I Use Kia Digi-Connect?
          </h4>
          <p>
            When you send messages or join meetings and webinars on Kia
            Digi-Connect, other people and organizations, including third
            parties outside the meeting, webinar, or message, may be able to see
            content and information that you share:
          </p>
          <ul>
            <li>
              <p>
                <b>Account Owner/Meeting Organiser:</b> An account owner is the
                organization or individual that signs up for a Kia Digi-Connect
                account. Typically, an account owner designates one or more
                people (called an “administrator”) to manage their account and
                can grant privileges to users on the account. Depending on their
                license with Kia Digi-Connect, the account owner can authorize
                additional users on their account, and the account owner can
                create and/or access the profile information for all users on
                their account. The account owner and their users can invite
                others (including guests not on their account) to meetings or
                webinars hosted on their account.
              </p>
              <p>
                Kia Digi-Connect gives account owners controls and features that
                they can use to determine whether certain types of content, such
                as recordings or out-of-meeting messages, can be created or
                sent, and what third-party apps can be used, for meetings and
                webinars hosted on their account. Depending on their settings,
                account owners and the people they designate can access personal
                data for people who join meetings and webinars on their account
                or send messages to users on their account. Specifically,
                account owners may have access to:
              </p>
            </li>
            <li>
              <h3>Account Usage:</h3>
              <ul>
                <li>
                  <p>
                    <b>Product Usage:</b> Information about how people and their
                    devices interact with their account, which may include who
                    sent messages to their users in chat, email addresses, IP
                    addresses, device information, and other information about
                    who joined meetings or webinars on their account, whether
                    users viewed or downloaded a recording, how long people
                    participated in their meetings, the time a message was sent,
                    information about Kia Digi-Connect Phone integrations, and
                    other usage information and feedback metrics.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Participant List:</b> Information about the participants
                    in a Kia Digi-Connect meeting, webinar, or chat, which may
                    include name, display name, email address, phone number, and
                    participant or user ID.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <b>Registration Information:</b> Information provided during
                registration for a webinar, meeting, or recording hosted by the
                account.
              </p>
            </li>
            <li>
              <p>
                <b>In-Meeting/Webinar Messages:</b> Depending on their settings,
                account owners can see sender and receiver information, along
                with the content of messages sent to and from users on their
                account, in the following circumstances:
              </p>
              <ul>
                <li>Messages sent to Everyone in a meeting that is recorded</li>
                <li>Messages sent to panelists in a webinar that is recorded</li>
                <li>Direct messages if the account owner has enabled archiving</li>
              </ul>
            </li>
            <li>
              <p>
                <b>Recordings:</b> Account owners can watch the content of
                recordings of meetings and webinars hosted on their account for
                training purposes. They can also view a transcript of meeting
                audio, if enabled.
              </p>
            </li>
            <li>
              <p>
                <b>Meeting Hosts and Participants:</b> Hosts and other
                participants in a meeting may be able to see your email, display
                name, and profile picture. Meeting hosts and participants can
                also see and (depending on the account owner’s settings) record
                or save meeting content, audio transcripts, messages sent to
                Everyone or to them directly, and files, whiteboards, or other
                information shared during a meeting. Hosts may also be able to
                see responses to Q&A and polls generated during the meeting.
              </p>
            </li>
            <li>
              <p>
                <b>Webinar Panelists and Attendees:</b> Only panelists may be
                visible to attendees during a webinar, but attendees who agree
                to unmute can be heard by other attendees. If an attendee agrees
                to become a panelist during a webinar, they may be visible to
                other attendees, depending on settings. Panelists and attendees
                may be able to see the name of a participant who asks a
                question during a Q&A, along with their question, unless the
                participant submits the question anonymously.
              </p>
            </li>
          </ul>
          <h4 style={{ color: "blue" }}>How to Exercise Your Data Rights</h4>
          <p>
            In order to exercise any of your rights as to personal data
            controlled by Kia Digi-Connect, or if you have any other questions
            about our use of your personal data, please send a request to{" "}
            <span style={{ color: "blue" }}>support@apprikart.com</span>. Please
            identify yourself and, for information relating to Kia Digi-Connect
            Products, specify your account and/or user information and other
            information to enable us to authenticate and respond to your
            request. Where legally permitted, we may decline to process requests
            that are unreasonably repetitive or systematic, require
            disproportionate technical effort, or jeopardize the privacy of
            others. As an account owner or a user under a licensed account, you
            may also take steps to affect your personal data by visiting your
            account and modifying your personal data directly.
          </p>
          <h4 style={{ color: "blue" }}>
            Protection and Security Information Collected by the Website
          </h4>
          <p>
            We have physical, electronic, and procedural safeguards that comply
            with the laws prevalent in India to protect personal information
            about you and, accordingly, we take appropriate security measures to
            protect against unauthorized access, alteration, disclosure, or
            destruction of your personal information, username, password,
            transaction information, and data stored on our Website in
            compliance with the provisions of the Information Technology Act,
            2000 and Information Technology (Reasonable Security Practices and
            Procedures and Sensitive Personal Data or Information) Rules, to
            ensure the protection and preservation of your privacy. In addition
            to the above, we, on a best endeavor basis, try to limit access to
            personal information of our users to only such users who we believe
            reasonably need to come into contact with that information to
            provide products or services to you. However, no data transmissions
            over the Internet can be guaranteed to be 100 percent secure.
            Consequently, we cannot ensure or warrant the security of any
            information you transmit to us and you understand that any
            information that you share is done at your own risk.
          </p>
          <h4 style={{ color: "blue" }}>Retention of Personal Information</h4>
          <p>
            Unless specified otherwise in this Privacy Policy, we will retain
            your information as permitted or required by applicable law. In some
            cases, even after cancellation of the user account, your information
            may be retained for the purpose of legal and regulatory compliances,
            resolving disputes, concluding activities related to account
            cancellation, enforcing our agreements, Privacy Policy, or for any
            other reason which may be deemed necessary. However, the information
            of the user will get anonymized upon cancellation of user account
            except for the abovementioned purposes.
          </p>
          <h4 style={{ color: "blue" }}>Indemnification</h4>
          <p>
            You agree and undertake to indemnify and hold harmless us, from and
            against any and all suits, disputes, actions, damages, costs, and
            expenses, if any, of whatsoever nature, arising out of or in any way
            connected with this Privacy Policy, information, and/or your use or
            access of the Website.
          </p>
          <p>
            You expressly understand that under no circumstances, including, but
            not limited to, negligence, shall we be liable to you or any other
            person or entity for any direct, indirect, incidental, special, or
            consequential damages, including, but not limited to damages for
            loss of profits, goodwill, use, data, or other intangible losses,
            resulting from circumstances, including but not limited to: (i)
            unauthorized access to or alteration of information; (ii) any
            unauthorized access to or use of our secure servers and/or any and
            all information stored therein.
          </p>
          <h4 style={{ color: "blue" }}>Governing Law and Jurisdiction</h4>
          <p>
            You represent that you have accessed the Website and have provided
            information on your own initiative and are responsible for
            compliance with all applicable laws including, but not limited to,
            any applicable local laws. This Privacy Policy is governed by the
            laws of India and the courts at New Delhi shall have exclusive
            jurisdiction.
          </p>
          <h4 style={{ color: "blue" }}>Changes in this Privacy Policy</h4>
          <p>
            We reserve the right to make changes to this Privacy Policy at any
            time and for any reason. We will alert you about any changes by
            updating the “Last updated” date of this Privacy Policy (as
            mentioned at the top of this privacy statement). You are encouraged
            to periodically review this Privacy Policy to stay informed of
            updates. You will be deemed to have been made aware of, will be
            subject to, and will be deemed to have accepted the changes in any
            revised Privacy Policy by your continued use of the Application
            after the date such revised Privacy Policy is posted.
          </p>
          <h3>Other Terms</h3>
          <h4>Authorization</h4>
          <p>
            Data providers have read and understood this consent policy, and
            voluntarily agree to provide their sensitive personal information.
          </p>
          <h4>Software Updates</h4>
          <p>
            Solution involves pre-installed software, SDK, and APIs that may
            need to change, upgrade, or enhance from time to time. These
            updates, upgrades, and enhancements may be required to correct the
            software, to protect or improve the security of the software, or to
            add or improve features of the software or the operating system. By
            using the software, you agree to take the necessary updates if
            required for smooth operation.
          </p>
          <h4>Important Information</h4>
          <p>
            You do not own or acquire any rights to use or modify the
            Application/software.
          </p>
          <p>
            All copyrights in and to the Kia Digi-Connect and software,
            including any update, upgrade, & enhancement are owned by Kia India
            and/or its licensors/vendors, who reserve all their rights in law
            and equity.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};