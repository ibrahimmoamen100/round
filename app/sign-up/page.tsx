import Container from "@/components/container";
import SignUpForm from "@/components/sign-up-form";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="relative isolate overflow-hidden bg-[#fafafa] w-screen  py-8 px-4">
      <Image
        src="/images/bg-opacity.png"
        alt=""
        fill
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <Image
        src="/images/circle.png"
        width={100}
        height={100}
        alt=""
        className="absolute inset-0 -top-16 -left-14 -z-10 w-40 h-40 object-cover"
      />
      <Container className="flex items-center justify-between flex-col gap-20 md:flex-row">
        <SignUpForm className="flex-1" />
        <div className="flex-1 max-w-xl">
          <Image
            src="/images/welcome.png"
            alt=""
            width={1920}
            height={1080}
            className=" object-contain"
          />
        </div>
      </Container>
    </div>
  );
}
