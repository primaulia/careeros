import { QuestType } from "../types/QuestType";
import installExtension from "../images/installExtension.png";
import resolveComment from "../images/resolveComment.png";
import saveContact from "../images/saveContact.png";
import scheduleCoffee from "../images/scheduleCoffee.png";
import submitApplication from "../images/submitApplication.png";
import dayjs from "dayjs";

const contactFullname = (contact: { first_name: string; last_name: string }) =>
  contact.first_name + " " + contact.last_name;

export const parser = (data: QuestType) => {
  const { type, due_date, company, contact, job } = data;

  switch (type) {
    case "install_extension":
      return {
        title: "Install the CareerOS Chrome Extension",
        description:
          "Unlock the superpowers of CareerOS with our Chrome Extension. This plugin lets you save companies, contacts, and jobs from Linkedin and other job boards. It also lets you access our messaging template and send Linkedin messages directly from CareerOS.",
        icon: installExtension,
        link: "#",
      };
    case "submit_application":
      return {
        title: `Submit your application for ${job!.title} at ${company!.name}`,
        description: `Deadline: ${dayjs(due_date).format("DD/MM/YYYY")}`,
        icon: submitApplication,
        link: company!.linkedin_url,
      };
    case "resolve-comment":
      return {
        title: `Resolve a comment from [CA name]`,
        description: "You have an unresolved comment from your Career Advisor.",
        icon: resolveComment,
        link: "#",
      };
    case "save_first_company":
      return {
        title: `Save your first company`,
        description:
          "Browse our company database for your favorite companies or new inspiration and save your first company to get started.",
        icon: saveContact,
        link: "#",
      };
    case "add_contact":
      return {
        title: `Save a contact at ${company!.name}`,
        description:
          "Browse our company database for your favorite companies or new inspiration and save your first company to get started.",
        icon: company?.logo_url,
        link: company!.linkedin_url,
      };
    case "send_linkedin_message":
      return {
        title: `Send a LinkedIn message to ${contactFullname(contact!)}  at ${
          company!.name
        }`,
        description:
          "Send a customized LinkedIn message to reach out to your new contact. Don't worry! We'll help you with the wording.",
        icon: "https://thispersondoesnotexist.com/",
        link: contact!.linkedin_url,
      };
    case "send_linkedin_connection":
      return {
        title: `Send a LinkedIn invitation to ${contactFullname(
          contact!
        )}  at ${company!.name}`,
        description:
          "Send an invitation with a tailored message to your new contact. Our AI will help you!",
        icon: "https://thispersondoesnotexist.com/",
        link: contact!.linkedin_url,
      };
    case "send_first_email":
      return {
        title: `Send first email to ${contactFullname(contact!)}  at ${
          company!.name
        }`,
        description: `Send a first email to ${contactFullname(contact!)} at ${
          company!.name
        } to get a conversation started.`,
        icon: "https://thispersondoesnotexist.com/",
        link: contact!.linkedin_url,
      };
    case "add_new_contact":
      return {
        title: `Save a new contact at ${company!.name}`,
        description: "Add another contact to this company to start networking.",
        icon: company!.logo_url,
        link: company!.linkedin_url,
      };
    case "schedule_coffee_chat":
      return {
        title: `Schedule a coffee chat with ${contactFullname(contact!)} at ${
          company!.name
        }`,
        description:
          "Get unique insights from your new contact by scheduling an informational interview with them. Make sure to use our coffee chat tips to prepare for your meeting.",
        icon: scheduleCoffee,
        link: contact!.linkedin_url,
      };
    case "send_follow_up_email":
      return {
        title: `Send follow-up email to ${contactFullname(contact!)} at ${
          company!.name
        }`,
        description:
          "Send a follow-up email to [contact name] at [company] to get a conversation started.",
        icon: "https://thispersondoesnotexist.com/",
        link: contact!.linkedin_url,
      };
  }
};
