import React from "react";
import { Dialog, DialogContent, DialogActions } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";

export const Termsandconditions = ({ open, onClose }) => {
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
        padding: 0 4px;
        line-height: 1;
        cursor: pointer;
        background: transparent;
        border: none;
      }

      .custom-close-icon:hover {
        color: #000000;
        opacity: 0.7;
      }
    `}
      </style>
      {/* Terms & Conditions Dialog */}
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth={false}
        scroll="paper"
        sx={{
          "& .MuiPaper-root": {
            width: "800px",
            backgroundColor: "#ffffff", // White background for dialog paper
            color: "#000000", // Black text
            border: "1px solid #000000", // Black border
            borderRadius: 1.5,
            overflowX: "hidden",
            padding: "15px 15px",
          },
        }}
      >
        <DialogActions
          sx={{
            width: {
              xs: "350px", // Full width on mobile
              sm: "700px", // Full width on tablets
              md: "800px", // Fixed width on small and up
            },
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            height: 10,
            borderBottom: "1px solid #ccc",
            padding: "2px 0 17px 0",
            marginLeft: {
              xs: "-15px", // No negative margin on mobile to prevent it from going off-screen
              sm: "-15px", // Original margin for larger screens
            },
          }}
        >
          <AiOutlineClose onClick={onClose} className="custom-close-icon" />
        </DialogActions>
        <DialogContent
          sx={{
            width: "100%",
            padding: {
              xs: 0, // 0 padding on extra-small screens (mobile)
              sm: "0 3rem", // 0 top/bottom and 3rem left/right on small and up
            },
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
            Terms of Use
          </h2>
          <h4>Effective Date: July, 2021</h4>
          <p>
            Important, read carefully: your use of and access to the kia
            digi-connect app and products and services and associated software
            (collectively, the "Services") of kia digi-connect is conditioned
            upon your compliance with and acceptance of these terms, which
            include your agreement to arbitrate claims. Please review thoroughly
            before accepting.
          </p>
          <h3>1. Definitions</h3>
          <p>
            The following definitions will apply in this Agreement, and any
            reference to the singular includes a reference to the plural and
            vice versa. “End User” means a Host or Participant (as defined in
            the Services Description) who uses the Services.
          </p>
          <h3>2. Services</h3>
          <p>
            Kia Digi-Connect will provide the video conference Services, and
            standard updates to the Services that are made generally available
            by Kia Digi-Connect during the term. Kia Digi-Connect may, in its
            sole discretion, discontinue the Services or modify the features of
            the Services from time to time without prior notice.
          </p>
          <h3>3. Use of Services and Your Responsibilities</h3>
          <p>
            a. <b>Registration Information</b> You may be required to provide
            information about Yourself in order to register for and/or use
            certain Services. You agree that any such information shall be
            accurate. You may also be asked to choose a user name and password.
            You are entirely responsible for maintaining the security of Your
            user name and password and agree not to disclose such to any third
            party.
          </p>
          <p>
            b. <b>Your Content.</b> You agree that You are solely responsible
            for the content ("Content") sent or transmitted by You or displayed
            or uploaded by You in using the Services and for compliance with all
            Laws pertaining to the Content, including, but not limited to, Laws
            requiring You to obtain the consent of a third party to use the
            Content and to provide appropriate notices of third party rights.
            You represent and warrant that You have the right to upload the
            Content to Kia Digi-connect and that such use does not violate or
            infringe on any rights of any third party. Under no circumstances
            will Kia Digi-Connect be liable in any way for any (a) Content that
            is transmitted or viewed while using the Services, (b) errors or
            omissions in the Content, or (c) any loss or damage of any kind
            incurred as a result of the use of, access to, or denial of access
            to Content. Although Kia Digi-connect is not responsible for any
            Content, Kia Digi-connect may delete any Content, at any time
            without notice to You, if Kia Digi-connect becomes aware that it
            violates any provision of this Agreement, or any law. You retain
            copyright and any other rights You already hold in Content which You
            submit, post or display on or through, the Services.
          </p>
          <p>
            c. <b>Recordings</b> You are responsible for compliance with the IT
            laws. The host can choose to record Kia Digi-Connect meetings and
            Webinars. By using the Services, you are giving Kia Digi-Connect
            consent to record and store such recordings for any or all Kia
            Digi-Connect meetings or webinars that you join, if such recordings
            are stored in our systems. You will receive a notification (visual
            or otherwise) when recording is enabled. If you do not consent to
            being recorded, you can choose to leave the meeting or webinar.
          </p>
          <p>
            d. <b>Prohibited Use</b> By using our services, You agree on behalf
            of yourself, your users and your attendees that You will not use,
            and will not permit any End User to use, the Services to: (i)
            modify, disassemble, decompile, prepare derivative works of, reverse
            engineer or otherwise attempt to gain access to the source code of
            the Services; (ii) knowingly or negligently use the Services in a
            way that abuses, interferes with, or disrupts Kia Digi-Connect’ s
            networks, Your accounts, or the Services; (iii) engage in activity
            that is illegal, fraudulent, false, or misleading, (iv) transmit
            through the Services any material that may infringe the intellectual
            property or other rights of third parties; (v) build or benchmark a
            competitive product or service, or copy any features, functions or
            graphics of the Services; or (vi) use the Services to communicate
            any message or material that is harassing, libelous, threatening,
            obscene, indecent, would violate the intellectual property rights of
            any party or is otherwise unlawful, that would give rise to civil
            liability, or that constitutes or encourages conduct that could
            constitute a criminal offense, under any applicable law or
            regulation; (vii) upload or transmit any software, Content or code
            that does or is intended to harm, disable, destroy or adversely
            affect performance of the Services in any way or which does or is
            intended to harm or extract information or data from other hardware,
            software or networks of Kia Digi-Connect or other users of Services;
            (viii) engage in any activity or use the Services in any manner that
            could damage, disable, overburden, impair or otherwise interfere
            with or disrupt the Services, or any servers or networks connected
            to the Services or Kia Digi-Connect's security systems (ix) use the
            services in violation of applicable laws or regulations (x) use the
            Services in violation of any Kia Digi-Connect policy or in a manner
            that violates applicable law, including but not limited to
            anti-spam, export control, privacy, and anti-terrorism laws and
            regulations and laws requiring the consent of subjects of audio and
            video recordings, and You agree that You are solely responsible for
            compliance with all such laws and regulations.
          </p>
          <p>
            e. <b>Limitations on Use</b> You may not reproduce, resell, or
            distribute the Services or any reports or data generated by the
            Services for any purpose unless You have been specifically permitted
            to do so under a separate agreement with Kia Digi-Connect. You may
            not offer or enable any third parties to use the Services purchased
            by You, display on any website or otherwise publish the Services or
            any Content obtained from a Service (other than Content created by
            You) or otherwise generate income from the Services or use the
            Services for the development, production or marketing of a service
            or product substantially similar to the Services.
          </p>
          <h3>4. Kia Digi-Connect's Obligations for Content</h3>
          <p>
            Kia Digi-Connect will maintain reasonable physical and technical
            safeguards to prevent unauthorized disclosure of or access to
            Content, in accordance with industry standards. Kia Digi-Connect
            will notify You if it becomes aware of unauthorized access to
            Content. Kia Digi-Connect will not access, view or process Content
            except (a) as provided for in this Agreement and in Kia
            Digi-Connect’s Privacy Statement; (b) as authorized or instructed by
            You, (c) as required to perform its obligations under this
            Agreement; or (d) as required by Law. Kia Digi-Connect has no other
            obligations with respect to Content.
          </p>
          <h3>5. Eligibility</h3>
          <p>
            You affirm that You are at least 16 years of age and are otherwise
            fully able and competent to enter into the terms, conditions,
            obligations, affirmations, representations, and warranties set forth
            in this Agreement, and to abide by and comply with this Agreement.
            Your access may be terminated without warning if we believe that You
            are under the age of 16 or are otherwise ineligible.
          </p>
          <h3>6. Properietary Rights</h3>
          <p>
            Kia Digi-Connect and/or its suppliers, as applicable, retain
            ownership of all proprietary rights in the Services and in all trade
            names, trademarks, service marks, logos, and domain names ("Kia
            Digi-Connect Marks") associated or displayed with the Services. You
            may not frame or utilize framing techniques to enclose any Kia
            Digi-Connect Marks, or other proprietary information (including
            images, text, page layout, or form) of Kia Digi-Connect without
            express written consent. You may not use any meta tags or any other
            "hidden text" utilizing Kia Digi-Connect Marks without Kia
            Digi-Connect's express written consent.
          </p>
          <h3>7. Copyright</h3>
          <p>
            You may not post, modify, distribute, or reproduce in any way
            copyrighted material, trademarks, rights of publicity or other
            proprietary rights without obtaining the prior written consent of
            the owner of such proprietary rights. Kia Digi-Connect may deny
            access to the Services to any User who is alleged to infringe
            another party's copyright.
          </p>
          <h3>8. No Warranties</h3>
          <p>
            You understand and agree that the services are provided "as is" and
            kia digi-connect, its affiliates, suppliers and resellers expressly
            disclaim all warranties of any kind, express or implied, including
            without limitation any warranty of merchantability, fitness for a
            particular purpose or non-infringement. kia digi-connect, its
            affiliates, suppliers and resellers make no warranty or
            representation regarding the results that may be obtained from the
            use of the services, regarding the accuracy or reliability of any
            information obtained through the services or that the services will
            meet any user's requirements, or be uninterrupted, timely, secure or
            error free. use of the services is at your sole risk. any material
            and/or data downloaded or otherwise obtained through the use of the
            services is at your own discretion and risk. you will be solely
            responsible for any damage to you resulting from the use of the
            services. the entire risk arising out of use or performance of the
            services remains with you. kia digi-connect does not assume any
            responsibility for retention of any user information or
            communications between users. kia digi-connect cannot guarantee and
            does not promise any specific results from use of the services. use
            is at your own risk.
          </p>
          <h3>9. Limitation of Liability</h3>
          <p>
            To the maximum extent permitted by applicable law, in no event will
            kia digi-connect or its affiliates, suppliers or resellers be liable
            for any special, incidental, indirect, exemplary or consequential
            damages whatsoever (including, without limitation, damages for loss
            of business profits, business interruption, loss of business
            information, or any other pecuniary loss or damage) arising out of
            the use of or inability to use the services or the provision of or
            failure to provide technical or other support services, whether
            arising in tort (including negligence) contract or any other legal
            theory, even if kia digi-connect, its affiliates, suppliers or
            resellers have been advised of the possibility of such damages. in
            any case, kia digi-connect's, its affiliates', suppliers' and
            resellers' maximum cumulative liability and your exclusive remedy
            for any claims arising out of or related to this agreement will be
            limited to the amount actually paid by you for the services (if any)
            in the twelve (12) months preceding the event or circumstances
            giving rise to such claims. Because some states and jurisdictions do
            not allow the exclusion or limitation of liability, the above
            limitation may not apply to You.
          </p>
          <h3>10. Privacy and Other Policies</h3>
          <p>
            Use of the Services is also subject to Kia Digi-Connect's Privacy
            Statement, a link to which can be found by selecting “Privacy and
            Legal Policies” in the footer of Kia Digi-Connect’s website.
          </p>
          <h3>11. Termination and Suspension of Services</h3>
          <p>
            If you fail or Digi-Connect suspects on reasonable grounds that you
            have failed to comply with any provisions of this agreement, Kia
            Digi-Connect may without notice to you: (i) terminate this agreement
            and/or (ii) preclude your access to the Services. Digi-Connect
            further reserves the right to modify, suspend, or discontinue the
            Services (or any part or Content thereof) at any time with or
            without notice to you, and Digi-Connectwill not be liable to you or
            to any third party should it exercise such rights.
          </p>
          <h3>12. Waiver and Indemnity</h3>
          <p>
            By using the services, you agree, to the extent permitted by law, to
            indemnify and hold digi-connect, its directors, officers, employees,
            affiliates, agents, contractors, and licensors harmless with respect
            to any claims arising out of your breach of this agreement, your use
            of the services, or any action taken by digi-connect as part of its
            investigation of a suspected violation of this agreement or as a
            result of its finding or decision that a violation of this agreement
            has occurred.You agree that you shall not sue or recover any damages
            from digi-connect, its directors, officers, employees, affiliates,
            agents, contractors, and licensors as a result of its decision to
            remove or refuse to process any information or content, to warn you,
            to suspend or terminate your access to the services, or to take any
            other action during the investigation of a suspected violation or as
            a result of digi-connect's conclusion that a violation of this
            agreement has occurred. This waiver and indemnity provision applies
            to all violations described in or contemplated by this agreement.
          </p>
          <h3>13. Resolving Disputes</h3>
          <p>
            a.
            <b>Governing Law & Jurisdiction.</b>
            The interpretation of these terms and conditions shall be
            constructed in accordance with the laws of India. Any disputes
            arising under or in connection with the use of Digi-Connect,
            Application or service or the Terms shall be subject to the
            exclusive jurisdiction of the appropriate Courts in Delhi, India.
          </p>
          <p>
            b. <b>Time Limits.</b> Except where otherwise provided by law, you
            are not allowed to bring any claim against Digi-Connect or KIN (or
            any other third party beneficiary) more than two year from the date
            of cause of action.
          </p>
          <h3>14. General</h3>
          <p>
            a.
            <b>Communicating with Each Other.</b>
            Any written notice from you to us will be considered given when we
            receive it at our address provided in the introduction of these
            Terms and Conditions. Any written Notice from us to you will be
            considered given when we send it by email to any email address
            you’ve provided to us, or two days after we mail it to you at the
            most current billing address we have on file for you. Any oral
            notices will be considered given when we call you or when you call
            us at 1800 108 5000. To know the Digi-Connect Privacy Policy the
            current version of these Terms and Conditions, and other
            information, you can also visit our Website at
            https://www.kia.com/in/buy/digiconnect-request.html
          </p>
          <p>
            b. <b>Others.</b> You agree that all of the occupants of your
            Vehicle, whether passengers, guests or drivers, are bound by these
            Terms and Conditions and you will make them aware of our rights and
            subject to the limitations of these Terms and Conditions.
          </p>
          <p>
            c. <b>Our Relationship.</b> These Terms and Conditions do not create
            any fiduciary relationships between you and us. It also does not
            create any relationship of principal and agent, partnership, or
            employer and employee.
          </p>
          <p>
            d. <b>Assignment.</b> You shall not transfer, assign, sublicense nor
            pledge in any manner whatsoever, any of your rights or obligations
            under these Terms and Conditions. KIN may transfer, assign
            sublicense or pledge in any manner whatsoever, any of its rights and
            obligations under these Terms and Conditions to a subsidiary,
            affiliate or to any third party whatsoever, without notifying you or
            receiving your consent.
          </p>
          <p>
            e. <b>Final Provisions.</b> These Terms and Conditions and any other
            KIA Digi-Connect documents incorporated herein by reference) is the
            entire agreement between you and us. It supersedes all other
            agreements or representations, oral or written, between us, past or
            present in respect of the Digi-Connect. In the event of a conflict
            between any provision contained in these Terms and Conditions and
            any provision of any other Digi-Connect document incorporated
            herein, the provision contained in these Terms and Conditions shall
            take precedence only to extent of such variation, and no additional
            or different terms shall be binding on either of us unless agreed to
            in writing. These Terms and Conditions will not be presumptively
            construed for or against either party. Section titles contained
            herein are for convenience only. If any part of these Terms and
            Conditions is considered invalid or unenforceable under any
            applicable law, the rest of it will remain enforceable. Even after
            the Digi-Connect Service has ended, these Terms and Conditions will
            govern any disputes arising out of or relating to it. It will also
            be binding on your heirs and successors and on our successors and
            assigns. No waiver of any part of these Terms and Conditions, or of
            any breach of it, in any one instance will require us to waive any
            other instance or breach. In some circumstances, we might decide to
            provide you service voluntarily even if you would not otherwise
            qualify. This will not be deemed a waiver or require us to do so
            again. You agree we will not be liable for anything resulting from
            our provision of such service.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};
