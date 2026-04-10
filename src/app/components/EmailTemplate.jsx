import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

export const EmailTemplate = ({ From, Subject, Message }) => (
  <Html>
    <Head />
    <Preview>New portfolio message: {Subject}</Preview>
    <Tailwind>
      <Body className="bg-slate-50 my-auto mx-auto font-sans">
        <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px] bg-white shadow-sm">
          <Section className="mt-[32px]">
            <Text className="text-purple-600 text-[12px] font-semibold tracking-wide uppercase m-0">
              Portfolio Message
            </Text>
            <Heading className="text-black text-[24px] font-normal text-left p-0 my-[30px] mx-0">
              {Subject}
            </Heading>
          </Section>
          
          <Text className="text-black text-[14px] leading-[24px]">
            Hello Sphelele,
          </Text>
          
          <Text className="text-black text-[14px] leading-[24px]">
            You've received a new message from <strong>{From}</strong>:
          </Text>

          <Section className="bg-slate-100 rounded-lg p-[20px] my-[24px]">
            <Text className="text-slate-700 italic text-[15px] leading-[24px] m-0">
              "{Message}"
            </Text>
          </Section>

          <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          
          <Text className="text-[#666666] text-[12px] leading-[24px]">
            This email was sent via your Next.js portfolio contact form.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailTemplate;